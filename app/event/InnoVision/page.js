"use client";
import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <section className="text-gray-600 body-font bg-white relative">
      <div className="absolute inset-0 bg-[url(/innovison.png)] bg-cover bg-center z-0"></div>

      <div className="relative container mx-auto px-5 py-24 z-10">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-bold title-font text-white mb-4">
            InnoVision: The Next Big Idea
          </h1>
          <p className="text-lg leading-relaxed xl:w-2/3 lg:w-3/4 mx-auto text-white ">
            Welcome to InnoVision—an exhilarating Ideathon where Junior Collage
            students (11th and 12th grade) transform their visionary ideas into
            tangible solutions. This is your platform to innovate, create, and
            make a difference! Teams of up to 3 students, with the guidance of a
            dedicated mentor, will embark on a journey to develop cutting-edge
            solutions that tackle real-world challenges.
          </p>
        </div>

        <div className="flex flex-col space-y-8 md:flex-row md:space-x-8 md:space-y-0">
          <div className="md:w-3/4">
            <div className="p-6 rounded-lg mb-10 bg-blue-100">
              <h2 className="text-gray-900 text-2xl title-font font-medium mb-3">
                Vision Spark (Round 1): Idea Abstract Submission
              </h2>
              <h3 className="text-xl mb-2 text-black">Unleash Your Imagination!</h3>
              <p className="leading-relaxed text-base">
                The journey begins with the Idea Abstract Submission. In this
                round, we encourage you to think outside the box and submit a
                concise yet powerful abstract that outlines your innovative
                concept. This is your opportunity to plant the seed of your
                idea-capturing its core essence, potential impact, and what makes
                it stand out. Your abstract should be compelling enough to ignite
                curiosity and inspire the judges to want to know more. Remember,
                this is where your vision starts to take shape, so think big,
                think bold, and let your creativity shine!
              </p>
            </div>
            <div className="p-6 rounded-lg mb-10 bg-gray-100">
              <h2 className="text-gray-900 text-2xl title-font font-medium mb-3">
                Pitch in Motion (Round 2): Concept Video Submission
              </h2>
              <h3 className="text-xl mb-2 text-black">Lights, Camera, Action!</h3>
              <p className="leading-relaxed text-base">
                Moving into the second round, it’s time to breathe life into your
                idea with a Concept Video Submission. This is your stage to
                visually narrate your concept, transforming words into a dynamic
                presentation that resonates. Create a short, engaging video that
                clearly explains your idea, how it works, and its potential
                impact. Share this video on YouTube, making it accessible and easy
                to share. Use visuals, animations, or demonstrations to show the
                practicality and feasibility of your idea. The key here is to make
                your concept not only understandable but also memorable and
                exciting. Bring your idea to life in a way that captivates and
                convinces!
              </p>
            </div>
            <div className="p-6 rounded-lg mb-10 bg-blue-100">
              <h2 className="text-gray-900 text-2xl title-font font-medium mb-3">
                Blueprint Submission (Round 3): Detailed Proposal
              </h2>
              <h3 className="text-xl mb-2 text-black">Time to Get Into the Details!</h3>
              <p className="leading-relaxed text-base">
                Now that you’ve captured attention, it’s time to delve deeper in
                the Blueprint Submission. In this critical round, you’ll submit a
                comprehensive and detailed proposal that outlines every aspect of
                your project. Your proposal should include a clear plan, design
                details, steps for implementation, and a timeline for execution.
                Think of this as your road map to success, demonstrating that your
                idea is not just a concept but a viable project that can be
                brought to life. Include diagrams, charts, and any other
                supporting materials that showcase your thought process and
                preparation. This is your chance to prove that your idea has the
                depth, practicality, and potential to make a real difference.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-gray-100">
              <h2 className="text-gray-900 text-2xl title-font font-medium mb-3">
                Finale (Final Round): Pitch Presentation
              </h2>
              <h3 className="text-xl mb-2 text-black">The Grand Stage Awaits!</h3>
              <p className="leading-relaxed text-base">
                Congratulations-you’ve made it to the final round! In the Pitch
                Presentation, you’ll have the chance to present your fully
                developed idea to a panel of judges. This is where all your hard
                work culminates. Your presentation should be powerful and
                persuasive, highlighting what makes your idea unique and how it
                effectively addresses real-world problems. Use this opportunity to
                showcase the journey from your initial concept to the detailed
                plan, demonstrating your commitment and passion. Engage the judges
                with a clear narrative, solid evidence, and a compelling case for
                why your idea deserves to win. This is your moment to shine-make
                it count!
              </p>
            </div>
          </div>
          <div className="md:w-1/4">
            <img
              src="/InnovisionRoadmap.png"
              alt="Roadmap"
              className="w-full h-auto rounded-lg shadow-lg md:sticky md:top-16"
            />
          </div>
        </div>

        <div className="text-center mt-16 bg-blue-300 p-8 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Win a Prize Pool of Rs 2 Lakh!
          </h2>
          <p className="leading-relaxed text-lg text-gray-700 mb-8">
            The competition is fierce, and the rewards are substantial. It’s
            your chance to push the boundaries of creativity, technology, and
            sustainability.
          </p>
          <Link
            href="/register"
            className="inline-flex text-white bg-blue-600 border-0 py-3 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg"
          >
            <div className="flex flex-col">
            <p>Join Us and Turn Your Ideas Into Impactful Solutions!</p>
            <p>Registration Fee: Rs. 900</p>
            <p>Early Bird : Rs. 600 (September 5th , 2024)</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default page;