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
                className="bg-white rounded shadow p-6 flex flex-col"
              >
                <div className="w-full h-[200px] relative mb-4">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="rounded object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#000000]">
                  {event.title}
                </h3>
                <p className="text-gray-600 text-sm mb-1">
                  {formatDate(event.date)} at {event.time}
                </p>
                <p className="text-gray-600 text-sm mb-1">
                  📍 {event.location}
                </p>
                {event.cost && (
                  <p className="text-green-600 text-sm mb-1 font-medium">
                    💰 {event.cost}
                  </p>
                )}
                <p className="text-blue-600 text-sm mb-3">
                  🎯 Event coordinator(s): {event.coordinators}
                </p>
                <p className="text-gray-700 mb-4 flex-grow">
                  {event.description}
                </p>
                <button
                  onClick={() => handleRSVP(event)}
                  className="px-6 py-2 bg-blue-600 text-white font-semibold rounded cursor-pointer hover:bg-gray-800 transition self-start"
                >
                  RSVP
                </button>
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