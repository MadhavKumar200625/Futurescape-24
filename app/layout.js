import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RegisterButton from "@/components/RegisterButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Futurescape",
  description: "FutureScape 24 is a global initiative that aims to push the boundaries of innovation, creativity, and problem-solving among students and educators around the world. This program is more than just a series of events; it’s a drive for change, bringing together the ideas of both young minds and experienced educators to tackle the complex challenges of today’s world. By focusing on key areas like sustainability, technology, entrepreneurship, and education, FutureScape 24 helps participants create solutions that are both innovative and practical. The program encourages a culture of innovation, where participants are motivated to think critically, explore new ideas, and challenge what’s possible. Through a mix of competitive events, collaborative discussions, and hands-on experiences, FutureScape 24 offers a unique platform for participants to deeply engage with current issues, learn from each other, and develop solutions that can make a real difference in their communities and beyond.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-full h-full">
      <body className={inter.className}>
        <Navbar></Navbar>
        
        {children}

        <RegisterButton></RegisterButton>
        
        <Footer></Footer>
        </body>
    </html>
  );
}
