"use client";

import Navbar from "../../../components/Navbar";
import Image from "next/image";
import events from "../../hooks/useEvents";
import Link from "next/link";
import Footer from "../../../components/Footer";
import { useEffect } from "react";

const EventsPage = () => {
  useEffect(() => {
    if (window.location.hash) {
      const el = document.getElementById(window.location.hash.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="w-full h-screen bg-white z-1 relative">
        <Image src="/Event.jpg" alt="" fill style={{ objectFit: "cover" }} />
        <div className="w-full h-full bg-black absolute top-0 opacity-35" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center flex flex-col items-center gap-4 max-w-[800px]">
            <h1 className="text-white text-6xl font-bold">Events</h1>
            <p className="text-white text-2xl mt-2">
              See and find out about our upcoming events!
            </p>
          </div>
          <div className="absolute bottom-6 text-center text-white">
            <p className="text-sm">Scroll for more.</p>
          </div>
        </div>
      </div>
      <div className="w-full bg-slate-900 items-center py-20 px-8 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 xl:gap-75 w-fit max-w-[1500px]">
          <div className="grid grid-col items-center w-full text-center md:text-left">
            <h2 className="text-3xl font-bold mb-2 text-white">
              Want event news and updates?
            </h2>
            <h2 className="text-3xl font-semibold text-white mb-2">
              Sign up for our newsletter.
            </h2>
          </div>
          <form
            className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded border border-gray-600 focus:outline-none bg-gray-900 text-white w-full md:w-auto"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-700 text-white font-semibold rounded hover:bg-gray-800 transition cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="w-full bg-[#f5f5f5] flex flex-col items-center w-full py-12 px:1 sm:px-5 md:px-10 xl:px-30">
        <div className="flex flex-col items-center gap-6 w-full max-w-[1500px]">
          <h2 className="text-3xl font-bold mb-8 text-[#000000]">
            Upcoming Events
          </h2>
          <div className="flex flex-col gap-8 w-full">
            {events.map((event) => (
              <div
                key={event.title}
                id={event.title.toLowerCase().replace(/\s+/g, "-")}
                className="bg-white rounded shadow p-10 flex flex-col items-center md:items-start gap-6 cursor-pointer"
                onClick={() => console.log(`Clicked on ${event.title}`)}
              >
                <div className="w-full h-[200px] md:h-[500px] relative mb-4 md:mb-0">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className={"rounded object-cover " + event.imageClassName}
                  />
                </div>
                <div className="flex-1 flex flex-col items-center md:items-start">
                  <h3 className="text-xl font-semibold mb-2 text-[#000000]">
                    {event.title}
                  </h3>
                  <p className="text-gray-700 mb-2">{event.description}</p>
                  <Link
                    href={`/events#${event.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    <button className="mt-2 px-6 py-2 bg-blue-600 text-white font-semibold rounded cursor-pointer hover:bg-gray-800 transition ">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventsPage;
