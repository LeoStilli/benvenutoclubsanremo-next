"use client";

import { useState } from "react";
import { Event } from "../data/events";

interface RSVPModalProps {
  event: Event | null;
  isOpen: boolean;
  onClose: () => void;
}

const RSVPModal = ({ event, isOpen, onClose }: RSVPModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!event || !formData.name.trim() || !formData.phone.trim()) {
      setError("Name and phone number are required");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          eventTitle: event.title,
          eventDate: event.date,
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          message: formData.message.trim(),
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: "", phone: "", message: "" });
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Failed to submit RSVP");
      }
    } catch (error) {
      setError("Failed to submit RSVP. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setFormData({ name: "", phone: "", message: "" });
    setError("");
    setIsSuccess(false);
    onClose();
  };

  if (!isOpen || !event) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        {isSuccess ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-[#000000]">
              RSVP Confirmed!
            </h2>
            <p className="text-gray-700 mb-6">
              Thank you for registering for {event.title}. We look forward to
              seeing you there!
            </p>
            <button
              onClick={handleClose}
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-gray-800 transition"
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#000000]">
              RSVP for {event.title}
            </h2>
            <div className="mb-4 text-gray-600">
              <p className="text-sm">{formatDate(event.date)}</p>
              <p className="text-sm">{event.location}</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="+39 123 456 7890"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message (optional)
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              {error && (
                <p className="text-red-600 text-sm mb-4">{error}</p>
              )}

              <div className="flex gap-3 justify-end">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-gray-800 transition disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Submit RSVP"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default RSVPModal;