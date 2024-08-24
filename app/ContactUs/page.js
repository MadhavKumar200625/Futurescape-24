import React from 'react';
import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto">
        {/* Iframe at the top */}
        <div className="mb-10">
          <iframe
src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15142.34418418474!2d73.5073071!3d18.4116818!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc29f3cf04ba56f%3A0xf7d9bdab2c80763c!2sCHRIST%20(Deemed%20to%20be%20University)%2C%20Pune%20Lavasa%20Campus%20-%20&#39;The%20Hub%20of%20Analytics&#39;!5e0!3m2!1sen!2sin!4v1724211546503!5m2!1sen!2sin"            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>


        <div className='h-14 flex justify-center py-16 items-center bg-white shadow-lg mb-10'>
        <p className='text-2xl text-black flex items-center'><MdEmail className='mr-1' />futurescape24@christuniversity.in</p>

        </div>

        {/* Cards for Innovision, Hackverse, and Conclave */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Innovision Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Innovision</h3>
            <div className="text-gray-600">
              <p className='font-bold'><strong><IoPerson/></strong> Dr. Libin Chacko Samuel</p>
              <p className='flex text-sm justfy items-center'><MdEmail className='mr-1' /> libin.chacko@christuniversity.in</p>
              <p className='flex text-sm justfy items-center'><FaPhoneAlt/> +91 9731905319</p>
              <p className="mt-4 font-bold"><strong><IoPerson/></strong> Dr. Tiny S Palathara</p>
              <p className='flex text-sm justfy items-center'><MdEmail className='mr-1' /> tiny.palathara@christuniversity.in</p>
              <p className='flex text-sm justfy items-center'><FaPhoneAlt/> +91 9176519881</p>
            </div>
          </div>

          {/* Hackverse Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Hackverse</h3>
            <div className="text-gray-600">
              <p className='font-bold'><strong><IoPerson/></strong> Prof. Thomas K T</p>
              <p className='flex text-sm justfy items-center'><MdEmail className='mr-1' /> thomas.kt@christuniversity.in</p>
              <p className='flex text-sm justfy items-center'><FaPhoneAlt/> +91 9895936273</p>
              <p className="mt-4 font-bold"><strong><IoPerson/></strong> Prof. Alwin Joseph</p>
              <p className='flex text-sm justfy items-center'><MdEmail className='mr-1' /> alwin.joseph@christuniversity.in</p>
              <p className='flex text-sm justfy items-center'><FaPhoneAlt/> +91 9447755834</p>
            </div>
          </div>

          {/* Conclave Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Conclave</h3>
            <div className="text-gray-600">
              <p className='font-bold'><strong><IoPerson/></strong> Dr. Lija Jacob</p>
              <p className='flex text-sm justfy items-center'><MdEmail className='mr-1' /> lija.jacob@christuniversity.in</p>
              <p className='flex text-sm justfy items-center'><FaPhoneAlt/> +91 9447473770</p>
              <p className="mt-4 font-bold"><strong><IoPerson/></strong> Prof. Salve Margaret Joseph</p>
              <p className='flex text-sm justfy items-center'><MdEmail className='mr-1' /> margaret.joseph@christuniversity.in</p>
              <p className='flex text-sm justfy items-center'><FaPhoneAlt/> +91 9890640361</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;