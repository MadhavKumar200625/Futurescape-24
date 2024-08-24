import Link from 'next/link';
import React from 'react';
import { FaSquareGithub } from "react-icons/fa6";




const page = () => {
  return (
    

    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">Meet Our Team</h1>

        <div className="space-y-12">
          {Object.keys(teams).map((teamKey) => (
            <div key={teamKey}>
              <h2 className="text-2xl font-medium text-gray-700 mb-6">
                {teamKey.replace(/([A-Z])/g, ' $1').trim()}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {teams[teamKey].map((member, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
                  >
                    <img
                      src={member.imageSrc}
                      alt={`${member.name}`}
                      className="w-28 h-32 rounded-full mb-4"
                    />
                    <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                    
                    {member.eventName && (
                      <p className="text-sm text-gray-500 mt-2">{member.eventName}</p>

                    )}
                    {member.designation && (<p className="text-sm text-gray-500 mt-2">{member.designation}</p>)}
                    {member.github && <Link href={member.github}><FaSquareGithub className="text-xl mt-4 text-gray-600"></FaSquareGithub></Link>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


const teams = {
  Patrons: [
    {
      name: 'Dr Fr Joseph CC',
      eventName: 'Vice Chancellor', designation: 'CHRIST (Deemed to be University)',
      imageSrc: 'https://lavasa.christuniversity.in/uploads/cmsmenu/thumb/fjcc_20201001014328_20210109122121..jpg',
      
    },
    {
      name: 'Dr Fr Viju P D',
      eventName: 'Pro-Vice Chancellor', designation: 'CHRIST (Deemed to be University)',
      imageSrc: 'https://lavasa.christuniversity.in/uploads/cmsmenu/thumb/viju_20230524052013_20230530095854..jpg',
    },
    {
      name: 'Dr Anil Joseph Pinto',
      email: 'No email provided',
      eventName: 'Registrar', designation: 'CHRIST (Deemed to be University)',
      imageSrc: 'https://lavasa.christuniversity.in/uploads/cmsmenu/thumb/Dr%20Anil%20Joseph%20Pinto_20200911112431_20210109122143..jpg',
    },
    {
      name: 'Dr Johny Joseph',
      email: 'No email provided',
      eventName: 'Registrar (Academics)', designation: 'CHRIST (Deemed to be University)',
      imageSrc: 'https://lavasa.christuniversity.in/uploads/cmsmenu/thumb/jj_20201001015203_20210109122245..jpg',
    },
    {
      name: 'Dr Fr Lijo Thomas',
      email: 'No email provided',
      eventName: 'Dean & Director', designation: ' CHRIST (Deemed to be University), Pune Lavasa Campus',
      imageSrc: 'https://kp.christuniversity.in/KnowledgePro/images/EmployeePhotos/E2761.jpg',
    },
    {
      name: 'Dr Jibrael Jos',
      email: 'No email provided',
      eventName: 'Associate Dean', designation: 'CHRIST (Deemed to be University), Pune Lavasa Campus',
      imageSrc: 'https://lavasa.christuniversity.in/uploads/cmsmenu/thumb/E5193_20240706110222..jpg',
    },
    {
      name: 'Fr Justin P Varghese',
      email: 'No email provided',
      eventName: 'Academic Coordinator', designation: ' CHRIST (Deemed to be University), Pune Lavasa Campus',
      imageSrc: 'https://lavasa.christuniversity.in/uploads/cmsmenu/thumb/Fr%20Justin_20220604102537..jpg',
    },
    {
      name: 'Dr Lija Jacob',
      email: 'No email provided',
      eventName: 'Head - Department of Data Science', designation: ' CHRIST (Deemed to be University), Pune Lavasa Campus',
      imageSrc: 'https://kp.christuniversity.in/KnowledgePro/images/EmployeePhotos/E4980.jpg',
    },
    
  ],
  "Innovision - Organizers": [
    {
      name: 'Dr Libin Chacko Samuel',
      email: 'No email provided',
      eventName: 'Department of Data Science', designation: ' CHRIST (Deemed to be University), Pune Lavasa Campus',
      imageSrc: 'https://kp.christuniversity.in/KnowledgePro/images/EmployeePhotos/E5298.jpg',
    },
    {
      name: 'Dr Tiny S Palathara',
      email: 'No email provided',
      eventName: 'Department of Data Science', designation: ' CHRIST (Deemed to be University), Pune Lavasa Campus',
      imageSrc: 'https://kp.christuniversity.in/KnowledgePro/images/EmployeePhotos/E6646.jpg',
    },
  ],
  "Hackverse - Organizers": [
    {
      name: 'Prof. Thomas K T',
      email: 'No email provided',
      eventName: 'Department of Data Science', designation: ' CHRIST (Deemed to be University), Pune Lavasa Campus',
      imageSrc: 'https://kp.christuniversity.in/KnowledgePro/images/EmployeePhotos/E4795.jpg',
    },
    {
      name: 'Prof. Alwin Joseph',
      email: 'No email provided',
      eventName: 'Department of Data Science', designation: ' CHRIST (Deemed to be University), Pune Lavasa Campus',
      imageSrc: 'https://kp.christuniversity.in/KnowledgePro/images/EmployeePhotos/E5478.jpg',
    },
  ],
  "Conclave - Organizers": [
    {
      name: 'Dr Lija Jacob',
      email: 'No email provided',
      eventName: 'Department of Data Science', designation: ' CHRIST (Deemed to be University), Pune Lavasa Campus',
      imageSrc: 'https://kp.christuniversity.in/KnowledgePro/images/EmployeePhotos/E4980.jpg',
    },
    {
      name: 'Prof. Salve Margaret Joseph',
      email: 'No email provided',
      eventName: 'Department of Data Science', designation: ' CHRIST (Deemed to be University), Pune Lavasa Campus',
      imageSrc: 'https://kp.christuniversity.in/KnowledgePro/images/EmployeePhotos/E8623.jpg',
    },
  ],
  WebDevelopers: [
    {
      name: 'Madhav Kumar',
      github: 'https://github.com/MadhavKumar200625',
      eventName: '1BCA (24-28 Batch)',
      imageSrc: '/MadhavKumar.jpg',
    },
    {
      name: 'Mayank Sharma',
      github: 'https://github.com/MAYANKSHARMA006',
      eventName: '1BCA (24-28 Batch)',
      imageSrc: '/MayankSharma.jpg',
    },
    
    {
      name: 'Ishdeep Singh',
      github: 'https://github.com/MAYANKSHARMA006',
      eventName: '1BCA (24-28 Batch)',
      imageSrc: '/ishdeep.jpeg',
    },
  ],
};

export default page;