"use client";
import { useState } from "react";
import Image from "next/image";
import RSVPModal from "./RSVPModal";
import { Event } from "../lib/events";

interface EventsGridProps {
  events: Event[];
}

const EventsGrid = ({ events }: EventsGridProps) => {
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
      <div className="w-full py-12 bg-[#f5f5f5] flex flex-col items-center">
        <div className="flex flex-col items-center gap-6 w-full px-4 max-w-[1200px]">
          <h2 className="text-3xl font-bold mb-8 text-[#000000]">
            All Events
          </h2>
          {events.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No events found</h3>
              <p className="text-gray-500">Check back soon for new events!</p>
            </div>
          ) : (
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
          )}
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

export default EventsGrid;