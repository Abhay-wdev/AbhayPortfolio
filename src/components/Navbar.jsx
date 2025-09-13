"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import TopNavbar from "./TopNavbar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTop, setShowTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Service", href: "/service" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Pages", href: "/pages" },
  ];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > lastScrollY + 10) {
            // scrolling down → hide TopNavbar
            setShowTop(false);
          } else if (window.scrollY < lastScrollY - 10) {
            // scrolling up → show TopNavbar
            setShowTop(true);
          }
          setLastScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className="fixed w-full z-50">
      {/* Top Navbar (hide/show on scroll) */}
      <div
        className={`transition-transform duration-500 ease-in-out ${
          showTop ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <TopNavbar />
      </div>

      {/* Main Navbar */}
      <div
        className={`bg-white shadow-md transition-all duration-900 ease-in-out ${
          showTop ? "relative" : "fixed top-0 left-0 w-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                G
              </div>
              <span className="text-xl font-bold text-gray-800">GLINT</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`uppercase font-medium transition-colors ${
                    pathname === link.href
                      ? "text-green-600 border-b-2 border-green-600"
                      : "text-gray-700 hover:text-green-600"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-green-600 focus:outline-none"
              >
                <HiOutlineMenuAlt3 className="text-2xl" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 transition-all duration-500 ease-in-out">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block uppercase font-medium transition-colors ${
                  pathname === link.href
                    ? "text-green-600 border-l-4 border-green-600 pl-2"
                    : "text-gray-700 hover:text-green-600"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
