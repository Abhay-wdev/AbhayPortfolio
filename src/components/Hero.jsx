"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import IconStrip from "./IconStrip";
import { motion } from "framer-motion";

// Parent animation for stagger
const leftContentVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Child animation for each element
const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative bg-white text-gray-900 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-0 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content with stagger animation */}
        <motion.div
          className="space-y-6 text-center lg:text-left"
          initial="hidden"
          animate="visible"
          variants={leftContentVariants}
        >
          <motion.h1
            variants={childVariants}
            className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight"
          >
            <span className="text-green-600">IMAGINATION</span>{" "}
            <span className="block">IS MORE</span>{" "}
            <span className="block">IMPORTANT THAN</span>{" "}
            <span className="block">KNOWLEDGE</span>
          </motion.h1>

          <motion.p
            variants={childVariants}
            className="text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed text-sm sm:text-base"
          >
            Together we the people achieve more than any single person could
            ever do alone.
          </motion.p>

          <motion.button
            variants={childVariants}
            className="mx-auto lg:mx-0 flex items-center gap-3 bg-green-600 text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-green-700 transition-all duration-300"
          >
            GETTING STARTED
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Right Image with slide-up animation */}
        <motion.div
          className="relative flex justify-center lg:justify-end"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src="/images/abhay-webdevloper-image.webp"
            alt="Hero Image"
            width={500}
            height={600}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
            priority
          />
        </motion.div>
      </div>

      {/* ✅ Icon Strip now sits naturally below Hero, not absolute */}
      <div className="mt-1">
        <IconStrip />
      </div>
    </section>
  );
}
