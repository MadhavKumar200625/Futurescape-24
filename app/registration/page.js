'use client'
import { useRouter } from 'next/navigation';


const Page = () => {
  const router = useRouter();
  

  const handleCardClick = (eventName) => {
     
    router.push(`/registration/${eventName}`);
  };

  return (
    <div className="container mx-auto my-20">
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 md:space-y-0 space-y-6 justify-center">
        {/* InnoVision Card */}
        <a
          className="md:w-1/4 flex flex-col text-center items-center bg-blue-100 rounded-xl p-3 mb-6 md:mb-0 md:mr-4 cursor-pointer"
          href='https://forms.gle/iD5V41ivKf2xF8dw8' target='_blank'
        >
          <div className="flex flex-col text-center h-auto p-5 rounded-2xl items-center">
            <div className="w-64 mb-10 inline-flex items-center justify-center flex-shrink-0">
              <h2 className="text-4xl text-black">𝕀ℕℕ𝕆𝕍𝕀𝕊𝕀𝕆ℕ</h2>
            </div>
            <div className="flex-grow">
              <h3 className="text-gray-900 text-xl title-font font-light">
                An Ideathon designed for school students, where young
                innovators present their ideas to address contemporary
                issues and challenges.
              </h3>
            </div>
          </div>
        </a>

        {/* Hackverse Card */}
        <div
          className="md:w-1/4 flex flex-col text-center items-center bg-blue-100 rounded-2xl p-3 mb-6 md:mb-0 md:mr-4 cursor-pointer"
        >
          <div className="flex flex-col text-center p-5 items-center">
            <div className="w-64 h-auto mb-10 inline-flex items-center justify-center flex-shrink-0">
              <h2 className="text-4xl text-black">ℍ𝔸ℂ𝕂𝕍𝔼ℝ𝕊𝔼</h2>
            </div>
            <div className="flex-grow">
              <h3 className="text-gray-900 text-xl title-font font-light">
                A Hackathon for college students, challenging participants
                to develop cutting-edge technological solutions with
                real-world applications.
              </h3>
            </div>
          </div>
        </div>

        {/* Conclave Card */}
        <div
          className="md:w-1/4 mt-10 md:mt-0 flex flex-col bg-blue-100 text-center items-center rounded-xl p-3 cursor-pointer"
        >
          <div className="flex flex-col text-center p-5 rounded-2xl items-center">
            <div className="w-64 h-auto mb-10 inline-flex items-center justify-center flex-shrink-0">
              <h2 className="text-4xl text-black">ℂ𝕆ℕℂ𝕃𝔸𝕍𝔼</h2>
            </div>
            <div className="flex-grow">
              <h3 className="text-gray-900 text-xl title-font font-light">
                A forum for educators from schools and colleges, focused
                on discussions around sustainable practices, education
                innovation, and the future of learning.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Page