"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "HelloBot",
    category: "SaaS & Startup",
    pages: "8 Pages",
    image: "/hellobot.png",
  },
  {
    title: "Flexisoft",
    category: "SaaS & Startup",
    pages: "6 Pages",
    image: "/flexisoft.png",
  },
  {
    title: "Excludia",
    category: "Digital Agency",
    pages: "8 Pages",
    image: "/excludia.png",
  },
  {
    title: "CryptoraHub",
    category: "Crypto & Web3",
    pages: "7 Pages",
    image: "/cryptorahub.png",
  },
  {
    title: "TaskFlow",
    category: "Productivity",
    pages: "5 Pages",
    image: "/taskflow.png",
  },
  {
    title: "EduNext",
    category: "Education",
    pages: "9 Pages",
    image: "/edunext.png",
  },
];

export default function ProjectsSection() {
  // State to control how many projects are shown
  const [visibleCount, setVisibleCount] = useState(4);

  // Handle load more
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 2); // show 2 more each click
  };

  return (
    <section className="bg-white text-gray-900 px-6 py-12">
      {/* Heading */}
      <div className="max-w-6xl mx-auto mb-8">
        <h2 className="flex items-center gap-2 text-xl font-bold">
          🚀 Projects
        </h2>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.slice(0, visibleCount).map((project, index) => (
          <div
            key={index}
            className="bg-gray-50 border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
          >
            {/* Image */}
            <div className="relative w-full h-52 sm:h-60">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex justify-between items-start p-4">
              <div>
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <p className="text-gray-600 text-sm mt-1">
                  {project.category} • {project.pages}
                </p>
              </div>
              <ArrowUpRight className="h-5 w-5 text-gray-500 hover:text-gray-800 transition cursor-pointer" />
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      {visibleCount < projects.length && (
        <div className="max-w-6xl mx-auto flex justify-center mt-8">
          <button
            onClick={handleLoadMore}
            className="px-5 py-2 rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium transition"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
}
