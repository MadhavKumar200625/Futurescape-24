"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  const handleScrollToSection = () => {
    router.push("/#events-section");
  };
  return (
    <footer className="bg-blue-900 text-gray-400 body-font pt-7">
      <div className="flex flex-col justify-center sm:flex-row md:space-x-4 items-center md:order-2">


        <Link
          href="/"
          className="text-white  font-light text-lg md:text-xl mt-2 md:mt-0"
        >
          Home
        </Link>

        <Link
          href="/event/InnoVision"
          className="text-white  font-light text-lg mt-2 md:mt-0 md:text-xl"
        >
          InnoVision
        </Link>
        <Link
          href="/event/Hackverse"
          className="text-white  font-light text-lg mt-2 md:mt-0 md:text-xl"
        >
          Hackverse
        </Link>
        <Link
          href="/event/Conclave"
          className="text-white  font-light text-lg mt-2 md:mt-0 md:text-xl"
        >
          Conclave
        </Link>

        <Link
          href="/Team"
          className="text-white  font-light text-lg mt-2 md:mt-0 md:text-xl"
        >
          Team
        </Link>
        <Link
          href="/Gallery"
          className="text-white  font-light text-lg mt-2 md:mt-0 md:text-xl"
        >
          Gallery
        </Link>
        <Link
          href="/ContactUs"
          className="text-white  font-light text-lg mt-2 md:mt-0 md:text-xl"
        >
          Contact Us
        </Link>
      </div>

  
      <hr className="w-3/4 mt-5 mx-auto" />

      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <img className="ml-3 text-xl h-16" src="/FuturescapeLogo.png" />
        </a>
        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-700 sm:py-2 sm:mt-0 mt-4">
          © 2024 FutureScape
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-400 hover:text-white"
            href="https://www.facebook.com/lavasa.christuniversity" target="_blank"
          >
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-400 hover:text-white">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-400 hover:text-white" href="https://www.instagram.com/science.christlavasa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-400 hover:text-white"
          href="https://www.linkedin.com/school/christ-university-lavasa-pune-maharashtra/posts/?feedView=all" target="_blank"
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
