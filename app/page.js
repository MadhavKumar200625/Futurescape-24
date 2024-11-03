"useclient";
import Image from "next/image";
import ScrollingText from "@/components/ScrollingText";
import ImageSlider from "@/components/BannerSlider";
import RegisterPopup from "@/components/RegisterPopup";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" bg-white">
      {/* <ScrollingText></ScrollingText> */}
      {/* <ImageSlider></ImageSlider> */}

      <div className="flex flex-col-reverse sm:flex-row">
        <div className="hidden sm:block sm:w-1/2">
          <ImageSlider />
        </div>
        <div className="w-full sm:w-1/2">
          <iframe
            src="https://drive.google.com/file/d/11HS_9eW5UDCZYLwXGjmLIYswrvYWhDCm/preview"
            className="w-full h-[50vh] bg-blue-100"
            allow="autoplay">
          </iframe>
        </div>
      </div>


      {/* <RegisterPopup></RegisterPopup> */}

      <div className="flex m-4  my-14 mb-10 justify-center">
        <h1 className="xl:text-8xl md:text-5xl sm:text-3xl text-xl text-black">
          𝔽𝕌𝕋𝕌ℝ𝔼𝕊ℂ𝔸ℙ𝔼 - 24
        </h1>
      </div>

      <div className="container mx-auto">
        <p className="text-base leading-relaxed m-10 text-justify text-gray-700">
          FutureScape 24 is a global initiative that aims to push the boundaries
          of innovation, creativity, and problem-solving among students and
          educators around the world. This program is more than just a series of
          events; it’s a drive for change, bringing together the ideas of both
          young minds and experienced educators to tackle the complex challenges
          of today’s world. By focusing on key areas like sustainability,
          technology, entrepreneurship, and education, FutureScape 24 helps
          participants create solutions that are both innovative and practical.
          The program encourages a culture of innovation, where participants are
          motivated to think critically, explore new ideas, and challenge what’s
          possible. Through a mix of competitive events, collaborative
          discussions, and hands-on experiences, FutureScape 24 offers a unique
          platform for participants to deeply engage with current issues, learn
          from each other, and develop solutions that can make a real difference
          in their communities and beyond.
        </p>
      </div>

      <section
        className="text-gray-600 flex justify-center p-5 body-font"
        id="events-section"
      >
        <div className="container px-5 ">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 justify-center">
            <Link
              href="/event/InnoVision"
              className="md:w-1/4 flex flex-col text-center items-center bg-blue-100 rounded-xl p-3 mb-6 md:mb-0 md:mr-4"
            >
              <div className=" flex flex-col text-center bg-blue-100 rounded-2xl items-center">
                <div className="w-64 h-auto mb-10 inline-flex items-center justify-center flex-shrink-0">
                  <h2 className="text-5xl text-black">𝕀ℕℕ𝕆𝕍𝕀𝕊𝕀𝕆ℕ</h2>
                </div>
                <div className="flex-grow">
                  <h3 className="text-gray-900 text-xl title-font font-light ">
                    An Ideathon designed for Junior College students, where
                    young innovators present their ideas to address contemporary
                    issues and challenges.
                  </h3>
                </div>
              </div>
            </Link>

            <Link
              href="/Hackthon2k24/index.html" target="blank"
              className="md:w-1/4 flex flex-col text-center items-center bg-blue-100 rounded-xl p-3 mb-6 md:mb-0 md:mr-4"
            >
              <div className=" flex flex-col text-center items-center">
                <div className="w-64 h-auto mb-10 inline-flex items-center justify-center flex-shrink-0">
                  <h3 className="text-5xl text-black">ℍ𝔸ℂ𝕂𝕍𝔼ℝ𝕊𝔼</h3>
                </div>
                <div className="flex-grow">
                  <h3 className="text-gray-900 text-xl title-font font-light ">
                    A Hackathon for college students, challenging participants
                    to develop cutting-edge technological solutions with
                    real-world applications.
                  </h3>
                </div>
              </div>
            </Link>

            <Link
              href="/event/Conclave"
              className="md:w-1/4 flex flex-col text-center items-center bg-blue-100 rounded-xl p-3 mb-6 md:mb-0 md:mr-4"
            >
              <div className=" flex flex-col text-center bg-blue-100 rounded-2xl items-center">
                <div className="w-64 h-auto mb-10 inline-flex items-center justify-center flex-shrink-0">
                  <h2 className="text-5xl text-black">ℂ𝕆ℕℂ𝕃𝔸𝕍𝔼</h2>
                </div>
                <div className="flex-grow">
                  <h3 className="text-gray-900 text-xl title-font font-light ">
                    A forum for educators from schools and colleges, focused on
                    discussions around sustainable practices, education
                    innovation, and the future of learning.
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto">
        <div className="flex justify-center flex-col mt-10">
          <br />

          <div className="mb-12 mx-10">
            <p className="text-base text-justify leading-relaxed mt-4 text-gray-700">
              Participants will have the chance to compete for attractive cash
              prizes, gain global recognition, and contribute to shaping a
              better future. FutureScape 24 is more than just a competition;
              it’s a movement to inspire, innovate, and impact the world.
            </p>
            <p className="text-base leading-relaxed mt-4 text-gray-700">
              Join us in this exciting journey to explore new frontiers and make
              a difference.
            </p>
          </div>

          <div className="mb-12 mx-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 ">
              Program Objectives
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li className="mb-2">
                Encourage participants to think critically and creatively about
                solutions to global challenges.
              </li>
              <li className="mb-2">
                Foster the development of innovative ideas and technological
                solutions that can make a real-world impact.
              </li>
              <li className="mb-2">
                Create opportunities for collaboration across different age
                groups and educational backgrounds, promoting the exchange of
                ideas and best practices.
              </li>
              <li className="mb-2">
                Highlight the importance of sustainability and the role that
                education and technology can play in achieving global goals.
              </li>
              <li className="mb-2">
                Provide a platform for educators to share and discuss their
                experiences, best practices, and innovative approaches to
                teaching.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col">
          <div className="flex justify-center">
            <h2 className="text-3xl font-bold text-black">
              CHRIST (Deemed to be University) Pune - Lavasa
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:my-10 ">
            <img
              src="/Christ Lavasa.jpeg"
              alt="christ Lavasa"
              className="sm:w-1/3 w-full"
            />
            <div className="sm:w-2/3 flex flex-col m-10 text-black">
              <p className="text-justify">
                CHRIST University, inspired by the educational vision of St.
                Chavara, was founded in 1969 and has since grown into a respected
                institution known for academic excellence across India.
                Administered by the Carmelites of Mary Immaculate (CMI), the
                university was accredited by NAAC in 1998, granted autonomy by the
                UGC in 2004, and declared a ‘Deemed to be University’ by the
                Ministry of Education in 2008. The Pune Lavasa Campus, established
                in 2014, has rapidly become a leading center for higher education,
                offering undergraduate, postgraduate, and doctoral programs in
                disciplines of Data Science, Economics, Business Administration,
                Commerce, Languages, and Law. Aligned with the National Education
                Policy (NEP), CHRIST Lavasa provides a flexible, interdisciplinary
                curriculum that emphasizes research, skill development, and
                holistic learning. Beyond academics, the campus fosters a vibrant
                community with over 30 clubs, international conferences, and
                events that enhance personal growth and global perspectives.
                Committed to nurturing responsible global citizens, CHRIST Lavasa
                combines academic rigor with comprehensive personal development.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex justify-center">
            <h2 className="text-3xl font-bold mt-5 text-black">Lavasa</h2>
          </div>

          <div className="flex flex-col-reverse sm:flex-row sm:my-10 ">
            <div className="sm:w-2/3 my-5 flex flex-col m-10 text-black">
              <p className="text-justify">
                Lavasa, India’s first planned hill city, is located in the scenic
                Western Ghats of Maharashtra, about 60 kilometers from Pune.
                Designed to blend urban living with nature, Lavasa spans lush
                green valleys and serene lakes, offering a tranquil environment
                inspired by the principles of New Urbanism, which emphasize
                walkable neighborhoods, sustainable living, and a strong community
                spirit.
              </p>

              <br />

              <p className="text-justify">
                Beyond being a residential hub, Lavasa is a vibrant destination
                known for its infrastructure, recreational facilities, and
                educational opportunities. The city hosts prestigious institutions
                like CHRIST (Deemed to be University), Pune Lavasa Campus, making
                it a center for education and innovation. With its peaceful yet
                strategic location near major urban centers like Pune and Mumbai,
                Lavasa offers the perfect balance for those seeking quality
                education in a serene setting.
              </p>
            </div>
            <img src="/Lavasa.jpeg" alt="Lavasa" className=" sm:w-1/3 w-full" />
          </div>
        </div>
      </div>

      {/* <div className="flex h-auto p-10"> 
        {sponsorList.map((image)=>{
          return <img key={image} src={image} alt="" className="w-1/4 bg-blue-100 mx-5"/>
        })}
        </div> */}
    </main>
  );
}

const sponsorList = ["/Christ Logo.png"];
