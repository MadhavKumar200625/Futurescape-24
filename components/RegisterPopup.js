'use client'
import { useEffect, useState } from "react";
import Link from "next/link";

export default function RegistrationPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000); 

    return () => clearTimeout(timer);
  }, []);

  const closePopup = ()=>{
    setShowPopup(false)
  }

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg text-center relative">
          <button
            className="absolute top-2 right-4 text-gray-500 hover:text-gray-800 text-lg"
            onClick={closePopup}
          >
            &times;
          </button>
            <h2 className="text-2xl text-black font-bold mb-4">Join FutureScape 24!</h2>
            <p className="mb-4 text-black">
              Don&#39;t miss out on this incredible opportunity. Register now to be a part of FutureScape 24.
            </p>
            <Link href="/registration" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
           
                Register Now
             
            </Link>
            
          </div>
        </div>
      )}
    </>
  );
}