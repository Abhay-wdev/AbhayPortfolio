import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function projects(){
    return(
        <div className="pt-20 sm:pt-30">
        <div className="  py-6 flex justify-center">
  <span className="list-disc list-inside text-white text-lg">
   <span className=" bg-green-500 px-4 py-1 rounded-2xl">• projects </span>
  </span>
  
</div>
<div className="flex justify-center ">
 <ProjectsSection/>
       </div>
       
        
        </div>
    )
}