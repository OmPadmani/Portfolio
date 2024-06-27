// "use client";

import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { TracingBeam } from "@/components/ui/TracingBeam";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    

    <main className="relative bg-black text-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">

        <div className="max-w-7xl w-full">
        {/* <TracingBeam className="px-0 relative flex justify-center items-center flex-col max-w-7xl w-[100vw]"> */}
          
          <FloatingNav navItems={[{name:"Home",link:"/",icon:<FaHome />},{name:"Work Experience",link:"/",icon:<FaHome />}]}/>
          <Hero />
          <Grid />

        {/* </TracingBeam> */}
        </div>

    </main>
    
  );
}



