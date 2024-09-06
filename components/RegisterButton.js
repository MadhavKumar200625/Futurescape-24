'use client'
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const RegisterButton = () => {
  const pathName = usePathname()
  
  return (
    <>
    {(pathName != "/registration/InnoVision") && <div className="fixed right-4 bottom-1/4 transform translate-y-3/4 z-50">
      <Link
        href="/registration"
        className="bg-blue-500 text-white p-10 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none w-16 h-16 flex items-center justify-center"
      >
        Register
      </Link>
    </div>}
    </>
  );
};

export default RegisterButton;
