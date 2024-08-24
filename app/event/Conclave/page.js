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
            Conclave
          </h1>
          <p className="text-lg leading-relaxed xl:w-2/3 lg:w-3/4 mx-auto text-white ">
                    A forum for educators from schools and colleges, focused on
                    discussions around sustainable practices, education
                    innovation, and the future of learning.
          </p>

          <p className="text-white font-bold mt-20 text-5xl">Loading soon.......</p>
        </div>

        
      </div>
    </section>
  );
};

export default page;