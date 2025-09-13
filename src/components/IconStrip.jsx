"use client";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaPython,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript, SiMongodb,SiMongoose, SiMysql, SiNextdotjs,SiExpress  } from "react-icons/si";

const frontendIcons = [
  { id: 1, icon: <FaHtml5 className="text-orange-600 w-10 h-10" />, label: "HTML" },
  { id: 2, icon: <RiTailwindCssFill className="text-blue-600 w-10 h-10" />, label: "Tailwind CSS" },
  { id: 3, icon: <SiJavascript className="text-yellow-500 w-10 h-10" />, label: "JavaScript" },
  { id: 4, icon: <FaReact className="text-cyan-500 w-10 h-10" />, label: "React" },
  { id: 5, icon: <SiNextdotjs className="text-black   w-10 h-10" />, label: "Next.js" },
];

const backendIcons = [
  { id: 6, icon: <FaNodeJs className="text-green-600 w-10 h-10" />, label: "Node.js" },
  { id: 7, icon: <SiMongodb className="text-green-700 w-10 h-10" />, label: "MongoDB" },
  { id: 8, icon: <SiExpress className="text-blue-800 w-10 h-10" />, label: "Express" },
  { id: 9, icon: <SiMongoose className="text-indigo-600 w-10 h-10" />, label: "Mongoose" },
   
];

// Slide in effect
const motionProps = (index) => ({
  initial: { x: index % 2 === 0 ? -50 : 50, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  transition: {
    duration: 0.6,
    delay: index * 0.2,
    ease: "easeOut",
  },
  viewport: { once: true, amount: 0.3 },
});

// Floating wave effect
const floatingProps = (index) => ({
  animate: {
    y: [0, -12, 0], // move up, then down
  },
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
    delay: index * 0.3, // staggered like a wave 🌊
  },
});

export default function IconStrip() {
  return (
    <div className="w-full bg-white py-10 space-y-12">
      {/* Frontend Group */}
      <div>
        <h2 className="text-center text-xl font-bold mb-6 text-green-600">
          Frontend Technologies
        </h2>
        <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-5 justify-items-center">
          {frontendIcons.map(({ id, icon, label }, index) => (
            <motion.div
              key={id}
              {...motionProps(index)}
              className="flex flex-col items-center"
            >
              <motion.div
                {...floatingProps(index)}
                className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-md bg-gray-50"
              >
                {icon}
              </motion.div>
              <span className="text-xs sm:text-sm mt-2 text-gray-700">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Backend Group */}
      <div>
        <h2 className="text-center text-xl font-bold mb-6 text-blue-600">
          Backend Technologies
        </h2>
        <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-5 justify-items-center">
          {backendIcons.map(({ id, icon, label }, index) => (
            <motion.div
              key={id}
              {...motionProps(index)}
              className="flex flex-col items-center"
            >
              <motion.div
                {...floatingProps(index)}
                className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-md bg-gray-50"
              >
                {icon}
              </motion.div>
              <span className="text-xs sm:text-sm mt-2 text-gray-700">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
