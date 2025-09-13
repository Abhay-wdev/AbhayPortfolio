"use client";

import { useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (You can connect this to backend/email service)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 py-16 px-6 flex justify-center items-center">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left - Info */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Let’s Build Something Amazing Together</h1>
          <p className="text-gray-600 mb-6">
            Have an idea, project, or just want to say hi?  
            I’d love to hear from you. Fill out the form or reach me directly through the contact options below.
          </p>

          <div className="space-y-4">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-3 text-gray-700 hover:text-purple-600 transition"
            >
              <FaPhoneAlt className="text-purple-600 text-lg" /> +91 98765 43210
            </a>

            <a
              href="mailto:youremail@example.com"
              className="flex items-center gap-3 text-gray-700 hover:text-purple-600 transition"
            >
              <FaEnvelope className="text-pink-500 text-lg" /> youremail@example.com
            </a>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition"
            >
              <FaWhatsapp className="text-green-500 text-lg" /> Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Right - Form */}
        <div className="bg-gray-50 p-6 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-800 focus:border-purple-500 focus:ring focus:ring-purple-200 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-800 focus:border-purple-500 focus:ring focus:ring-purple-200 outline-none"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-800 focus:border-purple-500 focus:ring focus:ring-purple-200 outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
