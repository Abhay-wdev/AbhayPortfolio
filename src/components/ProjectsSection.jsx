"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation"; // ✅ Correct import for App Router
import Image from "next/image";
import Link from "next/link";

const projects = [
  { title: "Dermatologist", category: "Medical", pages: "37 Pages",img:"/images/drankit.png", weburl:"https://drankit0-0-1.vercel.app" },
  { title: "Hotel industry", category: "hospitality and tourism sector", pages: "7 Pages",img:"/images/hotel.png", weburl:"https://blink-inn-hotal.vercel.app" },
  { title: "Orthopedic", category: "Medical", pages: "16 Pages",img:"/images/dr-jagdish.png", weburl:"https://drjagdishsinghcharan.vercel.app/" },
  { title: "Website", category: "Seocial Media & Web devlopment", pages: "48 Pages",img:"/images/seocial.png", weburl:"https://seocial-media-solutions-mu.vercel.app" },
  { title: "Task Managment", category: "Productivity", pages: "1",img:"/images/coming-soon.jpg", weburl:"#" },
   
];

export default function ProjectsSection() {
  const [visibleCount, setVisibleCount] = useState(4);

  // Handle load more
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 2);
  };

  // ✅ Get current URL path
  const pathname = usePathname();
  

  return (
    <section className="bg-white text-gray-900">
      {/* Heading */}
      <div className="max-w-6xl mx-auto my-8">
        <h2 className="flex items-center gap-2 text-xl font-bold">
         {pathname === '/projects' 
  ? null 
  : '• Projects'}

        </h2>
      </div>

      {/* Grid */}
      <div className="max-w-6xl  min-w-[260px]  sm:min-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.slice(0, visibleCount).map((project, index) => (
          <div
            key={index}
            className="bg-gray-50 border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
          >
            {/* Image Placeholder */}
            <div className="relative w-full h-52 sm:h-60 bg-gray-200">
              <Link href={project.weburl} target="_blank">
              <Image
    src={project.img}
    alt={project.title || "Project image"}
    fill // ✅ Makes the image cover the container
    className="object-cover hover:scale-110 transition-transform ease-in-out duration-300 cursor-pointer" // ✅ Correct Tailwind class
  />
  </Link>
            </div>

            {/* Content */}
            <div className="flex justify-between items-start p-4">
              <div>
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <p className="text-gray-600 text-sm mt-1">
                  {project.category} • {project.pages}
                </p>
              </div>
              <Link href={project.weburl} target="_blank">
              <ArrowUpRight className="h-10 hover:bg-green-300 w-10 rounded-full border text-gray-500 hover:text-gray-800 transition cursor-pointer" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
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
