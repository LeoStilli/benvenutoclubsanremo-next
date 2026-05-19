"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import Footer from "../../components/Footer";
import Newsletter from "../../components/Newsletter";
import RSVPModal from "../components/RSVPModal";
import { events, Event } from "../data/events";

const Home = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getUpcomingEvents = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return events
      .filter((event) => new Date(event.date) >= today)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(0, 3);
  };

  const handleRSVP = (event: Event) => {
    setSelectedEvent(event);
  };
  return (
    <>
      <Navbar />
      <div className="w-full h-screen bg-white z-1 relative">
        <Image src="/Sanremo.jpg" alt="" fill style={{ objectFit: "cover" }} />
        <div className="w-full h-full bg-black absolute top-0 opacity-35" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center flex flex-col items-center gap-4 max-w-[800px]">
            <h1 className="text-white text-6xl font-bold">
              Benvenuto Club Sanremo
            </h1>
            <p className="text-white md:text-2xl mt-2">
              Join our English speaking community for cultural and social
              gatherings!
            </p>
          </div>
          <div className="absolute bottom-6 text-center text-white">
            <p className="text-sm">Scroll for more.</p>
          </div>
        </div>
      </div>
      <div className="w-full py-12 bg-[#f5f5f5] flex flex-col items-center">
        <div className="flex flex-col items-center gap-6 w-full px-10 max-w-[1500px]">
          <h2 className="text-3xl font-bold mb-8 text-[#000000]">About Us</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full px-1">
            <Image
              src="/LogoSanremo.png"
              alt="Event 1"
              width={400}
              height={600}
              className="rounded shadow"
            />
            <div className="flex-1 text-left">
              <h3 className="text-2xl font-semibold mb-2 text-[#000000]">
                Our Community
              </h3>
              <p className="text-lg text-gray-700">
                Founded in 2005, the BCS began with a simple yet powerful idea:
                to bring together English speakers in the Sanremo area through
                friendship, culture, and shared experiences. Today, our thriving
                community of over 250 members enjoys a lively calendar of
                events—from guided museum visits and town explorations to
                stimulating discussions, social lunches, cocktails, and outdoor
                activities like hiking, padel, and tennis. Whether you are
                looking to connect, learn, or simply enjoy good company, our
                monthly newsletter showcases a diverse range of events designed
                to spark curiosity and foster a true sense of belonging. At BCS,
                it is more than a club—it is a community.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Events Section with Creative Design */}
      <div className="w-full py-16 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-100 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-blue-200 rounded-full opacity-20"></div>

        <div className="flex flex-col items-center gap-8 w-full px-4 max-w-[1200px] mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-4">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
              What's Coming Up
            </div>
            <h2 className="text-4xl font-bold text-[#000000] mb-2">
              Join Our Next Events
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl">
              Don't miss out on these amazing opportunities to connect with fellow members
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {getUpcomingEvents().map((event, index) => (
              <div
                key={event.id}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 relative ${
                  index === 0 ? 'ring-2 ring-blue-200 ring-opacity-50' : ''
                }`}
              >
                {/* Featured Badge for first event */}
                {index === 0 && (
                  <div className="absolute top-4 left-4 z-10 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    NEXT UP
                  </div>
                )}

                {/* Image with overlay effect */}
                <div className="w-full h-[200px] relative overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-blue-600 text-sm font-semibold">
                      {formatDate(event.date)}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-[#000000] group-hover:text-blue-600 transition-colors">
                    {event.title}
                  </h3>

                  <div className="flex items-center gap-1 mb-3">
                    <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-500 text-sm">{event.location}</span>
                  </div>

                  <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed">
                    {event.description}
                  </p>

                  <button
                    onClick={() => handleRSVP(event)}
                    className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200 shadow-md hover:shadow-lg"
                  >
                    Reserve Your Spot
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-8">
            <Link href="/events">
              <button className="group px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl">
                <span className="flex items-center gap-2">
                  View All Events
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Newsletter />
      <Footer />
      <RSVPModal
        event={selectedEvent}
        isOpen={selectedEvent !== null}
        onClose={() => setSelectedEvent(null)}
      />
    </>
  );
};

export default Home;
