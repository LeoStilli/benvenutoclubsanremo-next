"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import RSVPModal from "./RSVPModal";
import { Event } from "../lib/events";

interface EventsSectionProps {
  events: Event[];
}

const EventsSection = ({ events }: EventsSectionProps) => {
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
          {events.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No upcoming events</h3>
              <p className="text-gray-500">Check back soon for new events!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {events.map((event, index) => (
                <div
                  key={event.id}
                  className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 relative ${
                    index === 0 ? 'ring-2 ring-blue-200 ring-opacity-50' : ''
                  } ${event.status === 'cancelled' ? 'opacity-90 border-2 border-red-200' : ''}`}
                >
                  {/* Status Badges */}
                  {event.status === 'cancelled' ? (
                    <div className="absolute top-4 left-4 z-10 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                      ❌ CANCELLED
                    </div>
                  ) : index === 0 && (
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
                      className={`object-cover transition-transform duration-500 ${
                        event.status === 'cancelled'
                          ? 'grayscale group-hover:grayscale-0'
                          : 'group-hover:scale-110'
                      }`}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${
                      event.status === 'cancelled'
                        ? 'from-red-900/40 to-transparent'
                        : 'from-black/20 to-transparent'
                    }`}></div>
                    {event.status === 'cancelled' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-black/70 text-white px-4 py-2 rounded-lg text-lg font-bold transform -rotate-12">
                          CANCELLED
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`w-2 h-2 rounded-full ${
                        event.status === 'cancelled' ? 'bg-red-600' : 'bg-blue-600'
                      }`}></div>
                      <span className={`text-sm font-semibold ${
                        event.status === 'cancelled' ? 'text-red-600 line-through' : 'text-blue-600'
                      }`}>
                        {formatDate(event.date)} at {event.time}
                      </span>
                    </div>

                    <h3 className={`text-xl font-bold mb-2 transition-colors ${
                      event.status === 'cancelled'
                        ? 'text-gray-500 line-through'
                        : 'text-[#000000] group-hover:text-blue-600'
                    }`}>
                      {event.title}
                    </h3>

                    <div className="flex items-center gap-1 mb-2">
                      <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className={`text-sm ${
                        event.status === 'cancelled' ? 'text-gray-400 line-through' : 'text-gray-500'
                      }`}>{event.location}</span>
                    </div>

                    {event.cost && (
                      <div className={`text-sm mb-2 font-medium ${
                        event.status === 'cancelled' ? 'text-gray-400 line-through' : 'text-green-600'
                      }`}>
                        💰 {event.cost}
                      </div>
                    )}

                    <div className={`text-sm mb-3 ${
                      event.status === 'cancelled' ? 'text-gray-400' : 'text-blue-600'
                    }`}>
                      🎯 {event.coordinators}
                    </div>

                    <p className={`mb-6 line-clamp-2 leading-relaxed ${
                      event.status === 'cancelled' ? 'text-gray-500' : 'text-gray-600'
                    }`}>
                      {event.description}
                    </p>

                    {event.status === 'cancelled' ? (
                      <button
                        disabled
                        className="w-full px-6 py-3 bg-gray-400 text-white font-semibold rounded-xl cursor-not-allowed opacity-60"
                      >
                        Event Cancelled
                      </button>
                    ) : (
                      <button
                        onClick={() => handleRSVP(event)}
                        className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200 shadow-md hover:shadow-lg"
                      >
                        Reserve Your Spot
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

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

      <RSVPModal
        event={selectedEvent}
        isOpen={selectedEvent !== null}
        onClose={() => setSelectedEvent(null)}
      />
    </>
  );
};

export default EventsSection;