import React from "react";

export default function ContactSection() {
  return (
    <section className="my-16 bg-blue-50 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form className="max-w-md mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full p-3 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-3 border border-gray-300 rounded"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
