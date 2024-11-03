'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const router = useRouter();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleScrollToSection = () => {
    router.push('/#events-section');
  };

  return (
    <nav className="bg-blue-900 p-2 shadow-md">
      <div className="container mx-auto  flex flex-col md:flex-row justify-between items-center">
       
        <div className="text-xl font-bold mb-2 md:mb-0 md:mr-4 md:order-1 md:text-2xl">
          <Link href="/">
            <img src="/FuturescapeLogo.png" alt="futurescape logo" className='h-20' />
          </Link>
        </div>

        
       
        <div className="md:flex flex-col hidden  md:flex-row md:space-x-4 items-center md:order-2">
          <Link href="/" className="text-white  font-light text-lg md:text-xl mt-2 md:mt-0">
            Home
          </Link>

          <div className="relative flex items-center mt-2 md:mt-0">
            <button
              onClick={handleScrollToSection}
              className="text-white  font-light focus:outline-none flex items-center text-lg md:text-xl"
            >
              Events
            </button>
            <svg
              onClick={toggleDropdown}
              className="w-4 h-4 ml-1 text-lg cursor-pointer md:text-xl text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
            {dropdownOpen && (
              <div className="absolute mt-44 ml-16 py-2 w-48 bg-white rounded-lg shadow-xl z-50 text-lg md:text-xl">
                <Link href="/event/InnoVision" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={toggleDropdown}>
                InnoVision
                </Link>
                <Link href="/Hackthon2k24/index.html" target="blank" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={toggleDropdown}>
                  Hackverse
                </Link>
                <Link href="/event/Conclave" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={toggleDropdown}>
                Conclave
                </Link>
              </div>
            )}
          </div>

          <Link href="/Team" className="text-white  font-light text-lg mt-2 md:mt-0 md:text-xl">
            Team
          </Link>
          <Link href="/Gallery" className="text-white  font-light text-lg mt-2 md:mt-0 md:text-xl">
            Gallery
          </Link>
          <Link href="/ContactUs" className="text-white  font-light text-lg mt-2 md:mt-0 md:text-xl">
            Contact Us
          </Link>
        </div>

        
        <div className="text-xl md:block hidden font-bold mt-2 md:mt-0 md:ml-4 md:order-3 md:text-2xl">
          <Link href="/">
            <img src="/Christ Logo.png" alt="Christ Logo" className='h-14'/>
          </Link>
        </div>
      </div>
     
    </nav>
  );
};

export default Navbar;






