import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage("Thank you for subscribing!");
        setEmail("");
      } else {
        setStatus("error");
        if (data.error && data.error.includes("already a list member")) {
          setMessage("You are already subscribed.");
        } else {
          setMessage(data.error || "Subscription failed.");
        }
      }
    } catch (err) {
      setStatus("error");
      setMessage("Something went wrong.");
    }
  };

  return (
    <div className="w-full bg-slate-900 py-20 px-8 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 xl:gap-75 w-fit max-w-[1500px]">
        <div className="grid grid-col items-center w-full text-center md:text-left">
          <h2 className="text-3xl font-bold mb-2 text-white">
            Want event news and updates?
          </h2>
          <h2 className="text-3xl font-semibold text-white mb-2">
            Sign up for our newsletter.
          </h2>
          {message && (
            <div
              className={`mt-4 text-sm ${
                status === "success" ? "text-green-400" : "text-red-400"
              }`}
            >
              {message}
            </div>
          )}
        </div>
        <form
          className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded border border-gray-600 focus:outline-none bg-gray-900 text-white w-full md:w-auto"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading"}
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-700 text-white font-semibold rounded hover:bg-gray-800 transition cursor-pointer"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
