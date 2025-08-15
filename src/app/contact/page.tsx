"use client";

import Navbar from "../../../components/Navbar";
import Image from "next/image";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen bg-white z-1 relative">
        <Image src="/Contact.png" alt="" fill style={{ objectFit: "cover" }} />
        <div className="w-full h-full bg-black absolute top-0 opacity-35" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center flex flex-col items-center gap-4 max-w-[900px]">
            <h1 className="text-white text-6xl font-bold">Contact Us</h1>
            <p className="text-white text-2xl mt-2">
              Join our free monthly newsletter subscription. Have questions or
              want to learn more about our upcoming events? Feel free to reach
              out - we'd love to hear from you!
            </p>
          </div>
          <div className="absolute bottom-6 text-center text-white">
            <p className="text-sm">Scroll for more.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
