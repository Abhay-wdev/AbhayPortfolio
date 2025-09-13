"use client";

import { Briefcase } from "lucide-react";
import ImageCard from "../components/ImageCard";
import ProjectsSection from "./ProjectsSection";
import EducationAndStakes from "./EducationAndStakes";

export default function AboutSection() {
  return (
    <div className="flex flex-col   justify-center lg:flex-row gap-6 px-6 py-12">
      {/* Left Column - Sticky Image */}
       
      <div className="    w-full lg:w-80 h-fit lg:sticky top-24 self-start">
        <ImageCard />
      </div>

      {/* Right Column - Content */}
      <section className="bg-white   max-w-4xl text-gray-900 flex-1 mt-8 lg:mt-0">
        {/* Intro */}
        <div >
          <p className="text-blue-600 text-sm mb-3">👋 Say Hello</p>
          <h1 className="text-3xl sm:text-4xl font-bold leading-snug">
            I’m Abhay Chorsiya, <br />
            <span className="text-green-600">Full-stack Developer</span> <br />
            Based in Jaipur, Raj.
          </h1>
          <p className="mt-4 text-gray-600 leading-relaxed">
           I’m a specializing in building clean, user-friendly digital experiences. By blending creativity with functionality, I craft solutions that not only look great but also work seamlessly. With expertise in frontend design (React, Next.js, Tailwind CSS) and backend development (Node.js, Express, MongoDB), I focus on creating smooth, interactive, and scalable applications that bring ideas to life from concept to deployment.
          </p>
        </div>

        

        {/* Experience */}
        <div className="  mt-14">
          <h2 className="flex items-center gap-2 text-lg font-semibold mb-6">
            <Briefcase className="h-5 w-5 text-gray-700" />
            Experience
          </h2>

          <div className="space-y-4">
            {/* Job 1 */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 flex flex-col sm:flex-row justify-between shadow-sm">
              <div>
                <h3 className="font-semibold text-gray-900">
                   Web Devloper
                </h3>
                <p className="text-gray-600 text-sm">SEOcial Media Solutions</p>
                <ul className="text-gray-600  ml-4 list-disc text-sm mt-2">
                  <li>Built responsive web pages with React, Next.js, Tailwind CSS, and JavaScript</li>
                  <li>Developed backend APIs using Node.js, Express, and MongoDB.</li>
                  <li>Collaborated with the team via Git and ensured performance and mobile responsiveness.</li>
                </ul>
              </div>
              <span className="text-sm text-nowrap text-gray-500 mt-3 sm:mt-0 sm:ml-6">
                Jun 2025 – Sep 2025
              </span>
            </div>

            {/* Job 2 */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 flex flex-col sm:flex-row justify-between shadow-sm">
              <div>
                <h3 className="font-semibold text-gray-900">Trainee-Full-Stack Developer</h3>
                <p className="text-gray-600 text-sm">AU Ignite</p>
                <p className="text-gray-600 text-sm mt-2">
                 As Interns gain hands-on experience in coding, testing, and debugging, thereby contributing to the
overall success of web development projects.

                </p>
              </div>
              <span className="text-sm text-nowrap text-gray-500 mt-3 sm:mt-0 sm:ml-6">
               Apr 2025 – May 2025
              </span>
            </div>
 
          </div>
           <ProjectsSection />
        <EducationAndStakes/>
      
        </div>

       
      </section>
      
    </div>
  );
}
