"use client";

import { useState } from "react";
import Navbar from "../../../components/Navbar";
import Image from "next/image";
import Footer from "../../../components/Footer";
import Newsletter from "../../../components/Newsletter";
import RSVPModal from "../../components/RSVPModal";
import { events, Event } from "../../data/events";

const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleRSVP = (event: Event) => {
    setSelectedEvent(event);
  };

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

      <div className="w-full py-12 bg-[#f5f5f5] flex flex-col items-center">
        <div className="flex flex-col items-center gap-6 w-full px-4 max-w-[1200px]">
          <h2 className="text-3xl font-bold mb-8 text-[#000000]">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {events.map((event) => (
              <div
                key={event.id}
                className={`bg-white rounded shadow p-6 flex flex-col relative ${
                  event.status === 'cancelled' ? 'opacity-90 border-2 border-red-200' : ''
                }`}
              >
                {/* Status Badge for cancelled events */}
                {event.status === 'cancelled' && (
                  <div className="absolute top-4 right-4 z-10 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                    ❌ CANCELLED
                  </div>
                )}

                <div className="w-full h-[200px] relative mb-4 overflow-hidden rounded">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className={`object-cover ${
                      event.status === 'cancelled' ? 'grayscale' : ''
                    }`}
                  />
                  {event.status === 'cancelled' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/70 text-white px-4 py-2 rounded-lg text-lg font-bold transform -rotate-12">
                        CANCELLED
                      </div>
                    </div>
                  )}
                </div>

                <h3 className={`text-xl font-semibold mb-2 ${
                  event.status === 'cancelled'
                    ? 'text-gray-500 line-through'
                    : 'text-[#000000]'
                }`}>
                  {event.title}
                </h3>

                <p className={`text-sm mb-1 ${
                  event.status === 'cancelled'
                    ? 'text-red-600 line-through'
                    : 'text-gray-600'
                }`}>
                  {formatDate(event.date)} at {event.time}
                </p>

                <p className={`text-sm mb-1 ${
                  event.status === 'cancelled'
                    ? 'text-gray-400 line-through'
                    : 'text-gray-600'
                }`}>
                  📍 {event.location}
                </p>

                {event.cost && (
                  <p className={`text-sm mb-1 font-medium ${
                    event.status === 'cancelled'
                      ? 'text-gray-400 line-through'
                      : 'text-green-600'
                  }`}>
                    💰 {event.cost}
                  </p>
                )}

                <p className={`text-sm mb-3 ${
                  event.status === 'cancelled'
                    ? 'text-gray-400'
                    : 'text-blue-600'
                }`}>
                  🎯 Event coordinator(s): {event.coordinators}
                </p>

                <p className={`mb-4 flex-grow ${
                  event.status === 'cancelled'
                    ? 'text-gray-500'
                    : 'text-gray-700'
                }`}>
                  {event.description}
                </p>

                {event.status === 'cancelled' ? (
                  <button
                    disabled
                    className="px-6 py-2 bg-gray-400 text-white font-semibold rounded cursor-not-allowed opacity-60 self-start"
                  >
                    Event Cancelled
                  </button>
                ) : (
                  <button
                    onClick={() => handleRSVP(event)}
                    className="px-6 py-2 bg-blue-600 text-white font-semibold rounded cursor-pointer hover:bg-gray-800 transition self-start"
                  >
                    RSVP
                  </button>
                )}
              </div>
            ))}
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

export default EventsPage;