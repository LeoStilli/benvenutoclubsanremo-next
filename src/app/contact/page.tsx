"use client";

import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import Image from "next/image";

import Newsletter from "../../../components/Newsletter";
import ContactForm from "./ContactForm";

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
            <p className="text-white md:text-2xl mt-2">
              {" "}
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
      <Newsletter />
      <div className="w-full bg-linear-to-t bg-white flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-[1500px] grid lg:grid-cols-2 gap-8 lg:px-8 items-center">
          <h2 className="text-3xl font-bold mb-6 text-black text-center lg:text-right">
            Let's Get In Touch.
          </h2>
          <ContactForm />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
