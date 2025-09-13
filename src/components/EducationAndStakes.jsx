// components/EducationAndStakes.tsx
import { FaLayerGroup } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";
import { SiFigma, SiFramer, SiNotion, SiAdobefonts } from "react-icons/si";

export default function EducationAndStakes() {
  return (
    <section className="bg-white text-gray-800 py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Education Section */}
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
            <h3 className="text-lg font-semibold">UI/UX Design Certification</h3>
            <p className="text-sm text-gray-500 mb-3">
              Interaction Design Foundation, Online
            </p>
            <hr className="border-gray-200 mb-3" />
            <p className="text-sm text-gray-700">
              Gained hands-on experience in UX research, prototyping,
              wireframing, and usability testing, focusing on designing
              seamless, user-friendly digital experiences.
            </p>
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

        {/* Stakes Section */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <FaLayerGroup className="text-xl text-gray-500" />
            <h2 className="text-2xl font-bold">Stakes</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Figma */}
            <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm">
              <SiFigma className="text-2xl text-pink-500" />
              <div>
                <h4 className="font-semibold">Figma</h4>
                <p className="text-xs text-gray-500">Design Tool</p>
              </div>
            </div>

            {/* Framer */}
            <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm">
              <SiFramer className="text-2xl text-purple-600" />
              <div>
                <h4 className="font-semibold">Framer</h4>
                <p className="text-xs text-gray-500">No Code Development</p>
              </div>
            </div>

            {/* Lemon Squeezy */}
            <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm">
              <div className="w-6 h-6 rounded bg-purple-500" />
              <div>
                <h4 className="font-semibold">Lemon Squeezy</h4>
                <p className="text-xs text-gray-500">Payment</p>
              </div>
            </div>

            {/* Notion */}
            <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm">
              <SiNotion className="text-2xl text-black" />
              <div>
                <h4 className="font-semibold">Notion</h4>
                <p className="text-xs text-gray-500">Notion</p>
              </div>
            </div>

            {/* Illustrators */}
            <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm">
              <SiAdobefonts className="text-2xl text-orange-500" />
              <div>
                <h4 className="font-semibold">Illustrators</h4>
                <p className="text-xs text-gray-500">Illustrators</p>
              </div>
            </div>

            {/* SS Icons */}
            <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm">
              <div className="w-6 h-6 rounded bg-blue-500" />
              <div>
                <h4 className="font-semibold">SS Icons</h4>
                <p className="text-xs text-gray-500">Icon Library</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
