"use client";

import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import Image from "next/image";
import Newsletter from "../../../components/Newsletter";

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
          <form className="min-w-1/2 w-full max-w-xl p-8 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label
                className="text-black text-sm font-semibold"
                htmlFor="contact-name"
              >
                Full Name
              </label>
              <input
                id="contact-name"
                type="text-black"
                required
                placeholder="Enter your full name..."
                className="px-4 py-2 border border-gray-200 text-black rounded focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                className="text-black text-sm font-semibold"
                htmlFor="contact-email"
              >
                Email Address
              </label>
              <input
                id="contact-email"
                type="email-black"
                required
                placeholder="Enter your email address..."
                className="px-4 py-2 border border-gray-200 text-black rounded focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                className="text-black text-sm font-semibold"
                htmlFor="contact-message"
              >
                Message
              </label>
              <textarea
                id="contact-message-black"
                required
                placeholder="Enter your message..."
                rows={5}
                className="px-4 py-2 border border-gray-200 text-black rounded focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="mt-2 px-6 py-2 bg-blue-700 text-white font-semibold rounded hover:bg-gray-800 transition"
            >
              Submit Form
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
