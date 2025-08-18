"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setFeedback("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
        setFeedback(data.error || "Failed to send message.");
      }
    } catch (err) {
      setStatus("error");
      setFeedback("Something went wrong.");
    }
  };

  return (
    <form className="min-w-1/2 w-full max-w-xl p-8 flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1">
        <label className="text-black text-sm font-semibold" htmlFor="contact-name">Full Name</label>
        <input
          id="contact-name"
          type="text"
          required
          placeholder="Enter your full name..."
          className="px-4 py-2 border border-gray-200 text-black rounded focus:outline-none"
          value={name}
          onChange={e => setName(e.target.value)}
          disabled={status === "loading"}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-black text-sm font-semibold" htmlFor="contact-email">Email Address</label>
        <input
          id="contact-email"
          type="email"
          required
          placeholder="Enter your email address..."
          className="px-4 py-2 border border-gray-200 text-black rounded focus:outline-none"
          value={email}
          onChange={e => setEmail(e.target.value)}
          disabled={status === "loading"}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-black text-sm font-semibold" htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          required
          placeholder="Enter your message..."
          rows={5}
          className="px-4 py-2 border border-gray-200 text-black rounded focus:outline-none"
          value={message}
          onChange={e => setMessage(e.target.value)}
          disabled={status === "loading"}
        />
      </div>
      <button
        type="submit"
        className="mt-2 px-6 py-2 bg-blue-700 text-white font-semibold rounded hover:bg-gray-800 transition"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending..." : "Submit Form"}
      </button>
      {feedback && (
        <div className={`mt-2 text-sm ${status === "success" ? "text-green-600" : "text-red-600"}`}>{feedback}</div>
      )}
    </form>
  );
};

export default ContactForm;
