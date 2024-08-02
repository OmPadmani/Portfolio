"use client";

import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import AzureCert from "@/components/certification";
import { EvervaultCard, Icon } from "@/components/ui/Evervault";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { TracingBeam } from "@/components/ui/TracingBeam";
import { ExpandableCard1 } from "@/components/ui/projectTemplate";
import { FaHome } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { IoOpenOutline } from "react-icons/io5";
import { PiCertificateDuotone } from "react-icons/pi";
import { SiAboutdotme } from "react-icons/si";

export default function Home() {
  return (
    

    <main className="relative bg-black text-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">

        <div className="max-w-7xl w-full">
          
          <FloatingNav navItems={[{name:"Home",link:"#Home",icon:<FaHome />},{name:"About",link:"#about",icon:<SiAboutdotme  />},{name:"Certifications",link:"#Certificate",icon:<PiCertificateDuotone  />},{name:"Projects",link:"/",icon:<GrProjects />}]}/>
          <Hero />
          <Grid />
          
          &nbsp;
          <ExpandableCard1>

          </ExpandableCard1>
          {/* <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col md:flex-row items-center relative justify-center gap-6 md:gap-20"> */}
          <div id="Certificate" className="max-w-full flex flex-col lg:flex-row items-center justify-center relative mb-20 mt-56 gap-5 md:gap-15">
          {/* <div id="Certificate" className="max-w-full flex items-center justify-center relative mb-20 mt-56 gap-5"> */}
            <AzureCert img="/az900badge.png" title="AZ-900 Certification Acquired" link="https://learn.microsoft.com/api/credentials/share/en-us/OmPadmani-9382/24B7C047E63CCCC7?sharingId=A220CD1963B149E5"/>
            <AzureCert img="/ai900badge.png" title="AI-900 Certification Acquired" link="https://learn.microsoft.com/api/credentials/share/en-us/OmPadmani-9382/46ADAAFC63F899B4?sharingId=A220CD1963B149E5"/>
            <AzureCert img="/ai102badge.png" title="AI-102 Certification Acquired" link="https://learn.microsoft.com/api/credentials/share/en-us/OmPadmani-9382/E2927F3746DA032F?sharingId=A220CD1963B149E5"/>
          </div>

        </div>

    </main>
    
  );
}



