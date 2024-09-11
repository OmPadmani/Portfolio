"use client";

import React, { createContext } from 'react'
import { Spotlight } from './ui/spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import LitUpButton from './ui/LitUpButton'
import { BsFillTerminalFill } from 'react-icons/bs'
import { BackgroundBeams } from './ui/BackgroundBeams'
import { AuroraBackground } from './ui/AuroraBackground'
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { LampContainer } from './ui/lamp';
import { HiOutlineMail } from 'react-icons/hi';


const Hero = () => {
  return (
    
    <div id="Home" className="pb-20 pt-36">
        
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
            {/* <LampContainer>
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                    }}
                    className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                >
                </motion.h1>
            </LampContainer> */}
        </div>

        <BackgroundBeams />
        
        <div className="flex justify-center relative my-20 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                <h2 className="uppercase tracking-widest text-xs text-blue-100 max-w-80">
                    Welcome Everyone
                </h2>
                <TextGenerateEffect className="text-center text-[40px] md:text-5xl lg:test-6xl" words="Hi, my name is Om Padmani"/>

                <p className = "text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                    and this is my portfolio
                </p>

                {/* <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex items-center relative justify-center gap-20"> */}
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col md:flex-row items-center relative justify-center gap-6 md:gap-20">
                    
                    <a href="https://www.linkedin.com/in/ompadmani/">
                        <LitUpButton 
                            title = "LinkedIn"
                            icon = {<FaLinkedin  size={25}/>}
                            position='right'
                            otherClasses="mt-10"
                        />
                    </a>

                    <a href="https://www.github.com/OmPadmani?tab=repositories/">
                        <LitUpButton 
                            title = "GitHub"
                            icon = {<FaGithub  size={25}/>}
                            position='right'
                            otherClasses="mt-10"
                        />
                    </a>
                    
                    <a href="mailto:ompadmani@gmail.com">
                        <LitUpButton 
                            title = "Email Me"
                            icon = {<HiOutlineMail size={25}/>}
                            position='right'
                            otherClasses="mt-10"
                            handleClick = {() => {
                                        navigator.clipboard.writeText("ompadmani@gmail.com");
                                        }}
                        />
                    </a>
                </div>

            </div>
        </div>
                {/* </motion.div>
        </AuroraBackground> */}
    </div>
  )
}

export default Hero