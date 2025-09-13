"use client";
import { useState, useEffect, useRef } from "react";

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const isPausedRef = useRef(false); // keeps latest pause state
  const intervalRef = useRef(null);

  const projects = [
    {
      title: "Architecture Project",
      tagline: "We do big things with big ideas.",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "Restaurant Project",
      tagline: "WE SERVE FOOD BUT WITH A PURPOSE.",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "General Business",
      tagline: "Building brands that matter.",
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1171&q=80",
    },
  ];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    resetAutoScroll();
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
    resetAutoScroll();
  };

  const startAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isPausedRef.current) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
      }
    }, 5000);
  };

  const resetAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    startAutoScroll();
  };

  useEffect(() => {
    startAutoScroll();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // keep ref in sync with state
  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  return (
    <div className="min-h-screen bg-white text-gray-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            LATEST WORKING PROJECT
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our recent web design projects across various industries
          </p>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden rounded-xl shadow-lg">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div key={index} className="w-full flex-shrink-0 relative">
                <div className="relative h-96 md:h-[500px] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                  {/* Text + Button Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-white">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-2">
                        {project.title}
                      </h2>
                      <p className="text-lg md:text-xl">{project.tagline}</p>
                    </div>
                    <a
                      href="#"
                      className="group inline-flex items-center gap-2 bg-green-600 text-white text-sm md:text-base font-semibold px-5 py-2 rounded-md shadow-md hover:bg-green-700 transition-all duration-300"
                      onMouseEnter={() => setIsPaused(true)}
                      onMouseLeave={() => setIsPaused(false)}
                    >
                      Live Demo
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/40 text-white rounded-full p-3 transition-all duration-300 z-10"
            aria-label="Previous project"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/40 text-white rounded-full p-3 transition-all duration-300 z-10"
            aria-label="Next project"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  resetAutoScroll();
                }}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-green-600" : "bg-gray-300"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">
            Want to see more projects? Contact us today.
          </p>
          <button className="bg-green-600 text-white font-medium py-3 px-8 rounded-lg hover:bg-green-700 transition-colors duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </div>
  );
}
