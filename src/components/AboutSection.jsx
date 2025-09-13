"use client";

import { Briefcase } from "lucide-react";
import ImageCard from "../components/ImageCard";
import ProjectsSection from "./ProjectsSection";
import EducationAndStakes from "./EducationAndStakes";

export default function AboutSection() {
  return (
    <div className="flex flex-col lg:flex-row justify-center gap-6 px-6 py-12">
      {/* Left Column - Sticky Image */}
      <div className="border w-full lg:w-80 h-fit lg:sticky top-24 self-start">
        <ImageCard />
      </div>

      {/* Right Column - Content */}
      <section className="bg-white text-gray-900 flex-1 mt-8 lg:mt-0">
        {/* Intro */}
        <div className="max-w-3xl">
          <p className="text-blue-600 text-sm mb-3">👋 Say Hello</p>
          <h1 className="text-3xl sm:text-4xl font-bold leading-snug">
            I’m John Anderson, <br />
            <span className="text-green-600">Graphics Designer</span> <br />
            Based in Los Angeles, CA.
          </h1>
          <p className="mt-4 text-gray-600 leading-relaxed">
            I specialize in creating clean, user-friendly digital experiences by blending creativity
            with functionality. With a strong background in interactive design, I focus on crafting
            designs that not only look great but also provide smooth and engaging user interactions,
            helping ideas come to life seamlessly.
          </p>
        </div>

        {/* Stats */}
        <div className="max-w-3xl mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl font-bold text-gray-900">30+</p>
            <p className="text-gray-600 text-sm">Completed Projects</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-900">8+</p>
            <p className="text-gray-600 text-sm">Years of Experience</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-900">36+</p>
            <p className="text-gray-600 text-sm">Happy Clients</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-900">10+</p>
            <p className="text-gray-600 text-sm">Awards Received</p>
          </div>
        </div>

        {/* Experience */}
        <div className="max-w-3xl mt-14">
          <h2 className="flex items-center gap-2 text-lg font-semibold mb-6">
            <Briefcase className="h-5 w-5 text-gray-700" />
            Experience
          </h2>

          <div className="space-y-4">
            {/* Job 1 */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 flex flex-col sm:flex-row justify-between shadow-sm">
              <div>
                <h3 className="font-semibold text-gray-900">
                  Framer & UI/UX Designer
                </h3>
                <p className="text-gray-600 text-sm">Circum Tech</p>
                <p className="text-gray-600 text-sm mt-2">
                  Designing interactive prototypes with Framer, focusing on seamless
                  user experiences and scalable solutions through user feedback and collaboration.
                </p>
              </div>
              <span className="text-sm text-gray-500 mt-3 sm:mt-0 sm:ml-6">
                2023 – Present
              </span>
            </div>

            {/* Job 2 */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 flex flex-col sm:flex-row justify-between shadow-sm">
              <div>
                <h3 className="font-semibold text-gray-900">UI/UX Designer</h3>
                <p className="text-gray-600 text-sm">CoreOS</p>
                <p className="text-gray-600 text-sm mt-2">
                  Created intuitive web and mobile designs, conducted user research,
                  and collaborated with developers to ensure consistent and functional design delivery.
                </p>
              </div>
              <span className="text-sm text-gray-500 mt-3 sm:mt-0 sm:ml-6">
                2021 – 2023
              </span>
            </div>

            {/* Job 3 */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 flex flex-col sm:flex-row justify-between shadow-sm">
              <div>
                <h3 className="font-semibold text-gray-900">Graphics Designer</h3>
                <p className="text-gray-600 text-sm">Pixel Square</p>
                <p className="text-gray-600 text-sm mt-2">
                  Designed marketing assets, UI components, and brand visuals,
                  enhancing digital campaigns and overall visual identity through creative collaboration.
                </p>
              </div>
              <span className="text-sm text-gray-500 mt-3 sm:mt-0 sm:ml-6">
                2020 – 2021
              </span>
            </div>
          </div>
        </div>

        <ProjectsSection />
        <EducationAndStakes/>
      </section>
    </div>
  );
}
