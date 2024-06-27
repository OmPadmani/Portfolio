"use client";

import React, { createContext } from 'react'
import { Spotlight } from './ui/spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import LitUpButton from './ui/LitUpButton'
import { BsFillTerminalFill } from 'react-icons/bs'
import { BackgroundBeams } from './ui/BackgroundBeams'
import { AuroraBackground } from './ui/AuroraBackground'
import { motion } from "framer-motion";


const Hero = () => {
  return (
    
    <div className="pb-20 pt-36">
        
        {/* <AuroraBackground className="">
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
                }}
                className="relative flex flex-col gap-4 items-center justify-center px-4"> */}

        <div>
            {/* <Spotlight className = "top-20 left-[10vw] h-[50vh] w-[50vw]" fill = "grey"/> */}
            {/* <Spotlight className = "top-20 left-[60vw] h-[50vh] w-[50vw]" fill = "#0000e2"/> */}
            <Spotlight className = "top-20 left-[15vw] h-[50vh] w-[50vw]" fill = "#5111f5"/>
            <Spotlight className = "top-20 left-[80vw] h-[50vh] w-[50vw]" fill = "#5111f5"/>
            <Spotlight className = "top-20 left-[45vw] h-[50vh] w-[50vw]" fill = "#5111f5"/>

        </div>

        <BackgroundBeams />
        
        <div className="flex justify-center relative my-20 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                <h2 className="uppercase tracking-widest text-xs text-blue-100 max-w-80">
                    Portfolio By Om Padmani
                </h2>
                <TextGenerateEffect className="text-center text-[40px] md:text-5xl lg:test-6xl" words="Hi, my name is Om Padmani"/>

                <p className = "text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                    and this is my portfolio
                </p>

                <a href="/demo2.html">
                    <LitUpButton 
                        title = "OS Demo"
                        icon = {<BsFillTerminalFill size={25}/>}
                        position='right'
                    />
                </a>
            </div>
        </div>
                {/* </motion.div>
        </AuroraBackground> */}
    </div>
  )
}

export default Hero