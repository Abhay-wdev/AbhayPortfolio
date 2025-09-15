// components/ContactSection.tsx
import { FaPhoneAlt, FaPaperPlane } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="bg-white text-gray-800 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side */}
        <div>
          <h2 className="text-4xl font-bold">
            <span className="text-green-600">Let's</span>{" "}
            <span className="text-yellow-500">Talk</span>
          </h2>

          <div className="flex items-center mt-6 space-x-3">
            <FaPhoneAlt className="text-green-600 text-2xl" />
            <span className="text-xl font-semibold">+91 9549132776</span>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold">Location</h3>
            <p className="text-gray-600 text-sm">
               Sanganer, Pratap Nagar <br />
              Jaipur, Rajasthan 302033
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold">Official Email</h3>
            <p className="text-gray-600 text-sm">abhaychorsiya.dev@gmail.com</p>
          </div>

          
        </div>

        {/* Right Side - Contact Form */}
        <form className="bg-gray-50 p-6 rounded-2xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-transparent border-b border-gray-300 focus:border-green-600 outline-none py-2"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full bg-transparent border-b border-gray-300 focus:border-green-600 outline-none py-2"
            />
          </div>

          <input
            type="email"
            placeholder="Email*"
            className="w-full mt-6 bg-transparent border-b border-gray-300 focus:border-green-600 outline-none py-2"
          />

          <textarea
            placeholder="Tell Us About Project *"
            className="w-full mt-6 bg-transparent border-b border-gray-300 focus:border-green-600 outline-none py-2 resize-none h-28"
          ></textarea>

          <button
            type="submit"
            className="flex items-center gap-2 mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition"
          >
            <FaPaperPlane /> Get In Touch
          </button>
        </form>
      </div>
    </section>
  );
}
