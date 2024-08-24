import registrationSchema from '../../../Models/registrationSchema.js';
import middleware from '../middelware.js';
import AWS from 'aws-sdk';


const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

export async function POST(request) {
  const middlewareResponse = await middleware(request);
  
  
  if (middlewareResponse.status === true) {
    try {
      const data = await request.json();
      const { fileType } = data; 

      
      const lastRegistration = await registrationSchema.find().sort({ registrationNumber: -1 });
      const newRegistrationNumber = lastRegistration[0] ? lastRegistration[0].registrationNumber + 1 : 1;

      
      const fileName = `${newRegistrationNumber}.${fileType.split('/')[1]}`;
      const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: fileName,
        Expires: 60 * 5, 
        ContentType: fileType,
      };
      const uploadUrl = await s3.getSignedUrlPromise('putObject', params);



      const currentDate = new Date();
      const formattedDate = `${String(currentDate.getDate()).padStart(2, '0')}/${
        String(currentDate.getMonth() + 1).padStart(2, '0')
      }/${currentDate.getFullYear()} ${String(currentDate.getHours()).padStart(2, '0')}:${
        String(currentDate.getMinutes()).padStart(2, '0')
      }`;

      const registration = new registrationSchema({
        eventName: data.eventName,
        team: data.team,
        schoolDetails: {
          state: data.state,
          district: data.district,
          name: data.school,
        },
        nationality: data.nationality,
        confirmed: data.confirmed || false,
        dateRegistered: formattedDate,
        registrationNumber: newRegistrationNumber,
        fileUrl: `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`,
        mentor: data.mentor, 
      });

      await registration.save();

      return new Response(JSON.stringify({
        message: 'Registration successful',
        registration: registration,
        uploadUrl: uploadUrl 
      }), {
        status: 201,
        headers: { 'Content-Type': 'application/json' }
      });

    } catch (error) {
      console.error('Error during registration:', error);

      return new Response(JSON.stringify({ message: 'Registration failed', error: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  } else {
    return new Response(JSON.stringify(middlewareResponse), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}