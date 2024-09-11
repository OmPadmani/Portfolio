import React from 'react'
import LitUpButton from './ui/LitUpButton';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className='w-full pb-10 pt-96 mt-96 flex flex-col items-center justify-center' id="foot">
        <div className='w-full absolute left-0 min-h-96 -bottom-72'>
            <img 
                src="/footer-grid.svg"
                className='w-full h-full opacity-50'
            />
        </div>

        <div className='flex flex-col items-center mt-40'>
                <h1 className="heading lg:max-w-[45vw] ">
                    Thanks for <span className='text-purple'>exploring</span> my work<span className='text-purple'>!</span>
                    
                </h1>
                {/* <h2 className="uppercase tracking-widest text-xs text-blue-100 max-w-90 mt-5">
                    Made by Om Padmani using Aceternity UI Components
                </h2> */}
        </div>
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col md:flex-row items-center relative justify-center gap-6 md:gap-20">

                    {/* <a href="/demo2.html">
                        <LitUpButton 
                            title = "OS Demo"
                            icon = {<BsFillTerminalFill size={25}/>}
                            position='right'
                            otherClasses="mt-10"
                        />
                    </a> */}
                    
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
                
                <div className='flex flex-col items-center mt-5'>
                    <h2 className="uppercase tracking-widest text-xs text-blue-100 max-w-90 mt-5">
                        Made by <span className='text-purple'>Om Padmani</span> using Aceternity UI Components
                    </h2>
                </div>
        
    </footer>
  )
}

export default Footer