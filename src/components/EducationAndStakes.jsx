// components/EducationAndStakes.tsx
import { FaLayerGroup } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";
import { FaHtml5, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiNextdotjs, SiMongodb, SiExpress, SiMongoose } from "react-icons/si";

export default function EducationAndStakes() {
  return (
    <section className="bg-white text-gray-800 py-16">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Stacks Section */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <FaLayerGroup className="text-xl text-gray-500" />
            <h2 className="text-2xl font-bold">Tech Stacks</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* HTML */}
            <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm">
              <FaHtml5 className="text-2xl text-orange-500" />
              <div>
                <h4 className="font-semibold">HTML</h4>
                <p className="text-xs text-gray-500">Frontend</p>
              </div>
            </div>

            {/* Tailwind CSS */}
            <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm">
              <SiTailwindcss className="text-2xl text-sky-500" />
              <div>
                <h4 className="font-semibold">Tailwind CSS</h4>
                <p className="text-xs text-gray-500">Frontend</p>
              </div>
            </div>

            {/* JavaScript */}
            <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm">
              <SiJavascript className="text-2xl text-yellow-400" />
              <div>
                <h4 className="font-semibold">JavaScript</h4>
                <p className="text-xs text-gray-500">Frontend</p>
              </div>
            </div>

            {/* React */}
            <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm">
              <FaReact className="text-2xl text-sky-400" />
              <div>
                <h4 className="font-semibold">React</h4>
                <p className="text-xs text-gray-500">Frontend</p>
              </div>
            </div>

            {/* Next.js */}
            <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm">
              <SiNextdotjs className="text-2xl text-black" />
              <div>
                <h4 className="font-semibold">Next.js</h4>
                <p className="text-xs text-gray-500">Frontend</p>
              </div>
            </div>

            {/* Node.js */}
            <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm">
              <FaNodeJs className="text-2xl text-green-600" />
              <div>
                <h4 className="font-semibold">Node.js</h4>
                <p className="text-xs text-gray-500">Backend</p>
              </div>
            </div>

            {/* MongoDB */}
            <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm">
              <SiMongodb className="text-2xl text-green-500" />
              <div>
                <h4 className="font-semibold">MongoDB</h4>
                <p className="text-xs text-gray-500">Database</p>
              </div>
            </div>

            {/* Express */}
            <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm">
              <SiExpress className="text-2xl text-gray-600" />
              <div>
                <h4 className="font-semibold">Express</h4>
                <p className="text-xs text-gray-500">Backend</p>
              </div>
            </div>

            {/* Mongoose */}
            <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm">
              <SiMongoose className="text-2xl text-purple-600" />
              <div>
                <h4 className="font-semibold">Mongoose</h4>
                <p className="text-xs text-gray-500">ODM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section (unchanged) */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <MdOutlineSchool className="text-xl text-gray-500" />
            <h2 className="text-2xl font-bold">Education</h2>
          </div>

          {/* Card 1 */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-4 relative shadow-sm">
            <div className="absolute top-4 right-4">
              <span className="bg-gray-200 text-sm px-3 py-1 rounded-lg">
                2018 - 2019
              </span>
            </div>
            <h3 className="text-lg font-semibold">Bachelor of Computer Applications (BCA)</h3>
            <p className="text-sm text-gray-500 mb-3">
              Maharaja College, University of Rajasthan
            </p>
            <hr className="border-gray-200 mb-3" />
           <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
  <li>Studied programming languages: C, C++, Java, Python</li>
  <li>Learned web & app development: HTML, CSS, JavaScript, React, Node.js, Express</li>
  <li>Worked with databases: MySQL, MongoDB</li>
  <li>Built projects: Attendance system, Portfolio website, E-commerce prototype</li>
  <li>Improved problem-solving with DSA and coding challenges</li>
  <li>Developed teamwork and presentation skills</li>
</ul>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 relative shadow-sm">
            <div className="absolute top-4 right-4">
              <span className="bg-gray-200 text-sm px-3 py-1 rounded-lg">
                2015 - 2017
              </span>
            </div>
            <h3 className="text-lg font-semibold">
              Bachelor of Design in Interaction Design
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              National University of Singapore, Singapore
            </p>
            <hr className="border-gray-200 mb-3" />
            <p className="text-sm text-gray-700">
              Completed a comprehensive program focused on designing
              user-centered digital products, integrating aesthetics and
              functionality through practical interaction design principles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
