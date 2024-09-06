import registrationSchema from "../../../Models/registrationSchema.js";
import middleware from "../middelware.js";
import { promises as fs } from "fs";
import path from "path";

export async function POST(request) {
  const middlewareResponse = await middleware(request);

  if (middlewareResponse.status === true) {
    try {
      const data = await request.json();
      const { fileType, fileContent } = data;

      const lastRegistration = await registrationSchema
        .find()
        .sort({ registrationNumber: -1 });
      const lastNumber = lastRegistration[0]
        ? parseInt(lastRegistration[0].registrationNumber.split("-")[1])
        : 1099;
      const newRegistrationNumber = `IV-${lastNumber + 1}`;

      const fileExtension = fileType.split("/")[1];
      const fileName = `${newRegistrationNumber}.${fileExtension}`;
      const filePath = path.join(process.cwd(), "uploads", fileName);
      await fs.writeFile(filePath, Buffer.from(fileContent, "base64"));

      const currentDate = new Date();
      const formattedDate = `${String(currentDate.getDate()).padStart(
        2,
        "0"
      )}/${String(currentDate.getMonth() + 1).padStart(
        2,
        "0"
      )}/${currentDate.getFullYear()} ${String(currentDate.getHours()).padStart(
        2,
        "0"
      )}:${String(currentDate.getMinutes()).padStart(2, "0")}`;

      const registration = new registrationSchema({
        eventName: data.eventName,
        team: data.team,
        schoolDetails: {
          state: data.state,
          district: data.district,
          name: data.school,
          principalName: data.principalName,
          principalPhone: data.principalPhone,
          principalEmail: data.principalEmail,
        },
        nationality: data.nationality,
        confirmed: data.confirmed || false,
        dateRegistered: formattedDate,
        registrationNumber: newRegistrationNumber,
        fileUrl: `/uploads/${fileName}`,
        mentor: data.mentor,
        tracksInterested: data.tracksInterested,
        howDidYouHearAboutUs: data.howDidYouHearAboutUs,
      });

      await registration.save();

      return new Response(
        JSON.stringify({
          message: "Registration successful",
          registration: registration,
        }),
        {
          status: 201,
          headers: { "Content-Type": "application/json" },
        }
      );
    } catch (error) {
      console.error("Error during registration:", error);

      return new Response(
        JSON.stringify({
          message: "Registration failed",
          error: error.message,
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  } else {
    return new Response(JSON.stringify(middlewareResponse), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }
}
