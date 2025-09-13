"use client"

import { 
  MessageCircle, 
  ChevronLeft, 
  ChevronRight, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram 
} from "lucide-react"

export default function TopNavbar() {
  const handleBack = () => {
    window.history.back()
  }

  const handleForward = () => {
    window.history.forward()
  }

  return (
    <nav className="hidden md:flex bg-white   text-gray-900 px-6 py-3 items-center justify-between border-b border-gray-200 shadow-sm">
      {/* Left Section */}
      <div className="flex-2 flex items-center gap-2 bg-green-100 px-4 py-2 rounded-md hover:bg-green-200 transition cursor-pointer">
        <MessageCircle className="h-5 w-5 text-green-700" />
        <span className="text-sm font-medium truncate max-w-[400px]">
          FOX NEWS ANCHOR BRET BAIER adcfhgfnghnghmnghmgh...
        </span>
      </div>

      {/* Middle Section - Arrow buttons */}
      <div className="flex flex-1 items-center justify-center gap-2">
        <button 
          className="text-gray-600 hover:bg-gray-100 rounded-md h-9 w-9 flex items-center justify-center transition"
          onClick={handleBack}
          title="Go back"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button 
          className="text-gray-600 hover:bg-gray-100 rounded-md h-9 w-9 flex items-center justify-center transition"
          onClick={handleForward}
          title="Go forward"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Right Section - Social icons + Contact */}
      <div className="flex  flex-2 items-center justify-end gap-3">
        <div className="flex items-center gap-2">
          <button 
            className="text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-md h-9 w-9 flex items-center justify-center transition"
            title="Facebook"
          >
            <Facebook className="h-4 w-4" />
          </button>
          <button 
            className="text-gray-600 hover:text-sky-500 hover:bg-gray-100 rounded-md h-9 w-9 flex items-center justify-center transition"
            title="Twitter"
          >
            <Twitter className="h-4 w-4" />
          </button>
          <button 
            className="text-gray-600 hover:text-blue-700 hover:bg-gray-100 rounded-md h-9 w-9 flex items-center justify-center transition"
            title="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </button>
          <button 
            className="text-gray-600 hover:text-pink-500 hover:bg-gray-100 rounded-md h-9 w-9 flex items-center justify-center transition"
            title="Instagram"
          >
            <Instagram className="h-4 w-4" />
          </button>
        </div>
        <button 
          className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded-md transition"
        >
          Contact Me
        </button>
      </div>
    </nav>
  )
}
