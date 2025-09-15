'use client'
import AboutSection from "@/components/AboutSection";
import Blogs from "@/components/Blogs";
import Hero from "@/components/Hero";
  
  
import Contact from "@/components/Contact";
 

export default function Home() {
  return (
    <div className="min-h-[500vh] ">
    <Hero/>
    {/* <ProjectCarousel/> */}
   
    <AboutSection/>
     {/* <Blogs/> */}
    <Contact/>
   

    </div>
  )
}