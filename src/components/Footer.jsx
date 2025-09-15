"use client";

import Link from "next/link";
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaInstagram, 
  FaWhatsapp, 
  FaPhoneAlt 
} from "react-icons/fa";

export default function Footer() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
   
    { name: "Resume", href: "/resume" },
     { name: "Contact", href: "/contact-me" },
  ];

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/Abhay-wdev" },
    { icon: <FaLinkedin />, href: "www.linkedin.com/in/abhay-wdev" },
    { icon: <FaWhatsapp />, href: "https://wa.me/919549132776" }, // Replace with your WhatsApp
  ];

  return (
    <footer className="relative bg-gray-900 text-gray-300 pt-12 pb-6 px-6">
      {/* Gradient Border Top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Brand / Logo */}
        <div>
          <h2 className="text-3xl font-extrabold text-white tracking-wide">
            Abhay Chorsiya
          </h2>
          <p className="mt-3 text-sm text-gray-400 italic">
            Building digital experiences with passion 🚀
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="hover:text-purple-400 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
          <div className="flex justify-center md:justify-start space-x-5 mb-4">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                className="text-xl hover:text-purple-400 transform hover:scale-110 transition duration-300"
              >
                {social.icon}
              </Link>
            ))}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start space-y-2 text-sm text-gray-400">
            <a
              href="tel:+919876543210" // Replace with your number
              className="flex items-center gap-2 hover:text-purple-400 transition"
            >
              <FaPhoneAlt className="text-purple-400" /> +91 9549132776
            </a>
            <a
              href="https://wa.me/919549132776" // WhatsApp direct link
              target="_blank"
              className="flex items-center gap-2 hover:text-purple-400 transition"
            >
              <FaWhatsapp className="text-green-500" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} <span className="text-white">Abhay Chorsiya</span>. All rights reserved.
      </div>
    </footer>
  );
}
