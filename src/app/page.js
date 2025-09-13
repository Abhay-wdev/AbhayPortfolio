'use client'
import AboutSection from "@/components/AboutSection";
import Blogs from "@/components/Blogs";
import Hero from "@/components/Hero";
import ImageCard from "@/components/ImageCard";
import ProjectCarousel from "@/components/ProjectCarousel";
  
import Contact from "@/components/Contact";
 

export default function Home() {
  return (
    <div className="min-h-[500vh] ">
    <Hero/>
    <ProjectCarousel/>
    <Blogs/>
    <AboutSection/>
    <Contact/>
   

    </div>
  )
}