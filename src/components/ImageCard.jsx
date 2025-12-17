"use client";

import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram, Download, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { CgMail } from "react-icons/cg";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";
export default function ProfileCard() {
  return (
    <div className="max-w-sm mx-auto bg-gray-500 text-gray-900 rounded-3xl shadow-lg overflow-hidden p-6 flex flex-col items-center">
      {/* Profile Image */}
      <div className="relative w-full h-90 rounded-2xl overflow-hidden shadow-md">
        <Image
          src="/images/abhay-webdevloper-img.png"
          alt="Abhay Web Developer"
          fill
          className="object-cover"
        />
      </div>

      {/* Availability */}
      <div className="mt-4 flex items-center gap-2 px-4 py-1 rounded-lg bg-gray-100 border border-gray-300">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        <span className="text-sm font-medium">Available for work</span>
      </div>

      {/* Name */}
      <h2 className="mt-3 text-gray-50 text-xl font-semibold">Abhay Chorsiya</h2>

      {/* Social Icons */}
      <div className="mt-4 flex gap-3">
        <a
          href="#"
          className="p-2 rounded-lg bg-gray-100 border border-gray-200 hover:bg-gray-200 transition"
          title="Github"
        >
          <FaGithub className="h-5 w-5 text-gray-700" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=919549132776&text&type=phone_number&app_absent=0"
          target="_blank"
          className="p-2 rounded-lg bg-gray-100 border border-gray-200 hover:bg-gray-200 transition"
          title="Whatsapp"
        >
          <FaWhatsapp className="h-5 w-5 text-gray-700" />
        </a>
        <a
          href="https://www.linkedin.com/in/abhay-wdev/"
          target="_blank"
          className="p-2 rounded-lg bg-gray-100 border border-gray-200 hover:bg-gray-200 transition"
          title="LinkedIn"
        >
          <Linkedin className="h-5 w-5 text-gray-700" />
        </a>
      <a
  href="mailto:abhaychorsiya.dev@gmail.com"
  className="p-2 rounded-lg bg-gray-100 border border-gray-200 hover:bg-gray-200 transition"
  title="Gmail"
>
  <CgMail className="h-5 w-5 text-gray-700" />
</a>

      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex justify-center w-full gap-3">
        <Link href={'https://drive.google.com/file/d/1CZPMKD-nFdJffoKsB_fJITE2D2PceNXg/view?usp=sharing'} target="_blank">
        <button className="flex-1 flex items-center justify-center gap-1 py-2 px-2 rounded-xl bg-gray-100 border border-gray-300 text-gray-700 hover:bg-gray-200 transition">
          <Download className="h-4 w-4" />
          <span className="text-sm">Download CV</span>
        </button>
        </Link>
        <Link href={'/contact-me'}   >
        <button className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-green-500 text-white hover:bg-green-600 transition">
          <Send className="h-4 w-4" />
          <span className="text-sm font-medium">Contact Me</span>
        </button>
        </Link>
      </div>
    </div>
  );
}
