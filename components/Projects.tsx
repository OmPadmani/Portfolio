'use client';

import React from 'react'
import { ExpandableCardDemo } from './ui/projectTemplate'
import LitUpButton from './ui/LitUpButton';
import { BsFillTerminalFill } from 'react-icons/bs';
import Link from 'next/link';

const Projects = () => {
  return (
    <div id="projects" className="mt-56">
        <div className={`w-full font-sans text-lg lg:text-5xl font-bold z-10 px-2 text-center`}>
            My <span className='text-purple'>Projects</span>
        </div>

        <div className="max-w-full flex flex-col items-center justify-center relative gap-8">

            <div className="w-full flex border border-black/[0.2] dark:border-white/[0.2] flex-col mx-auto p-4 relative h-[30rem] rounded-3xl top-8" style={{backgroundColor: 'rgb(18,16,14)', background: 'linear-gradient(90deg, rgba(18,16,14,1) 0%, rgba(17, 25, 40, 0.75) 100%)'}}>
                <div className="group-hover/bento:translate-x-2 group-hover/bento:translate-y-2 transition duration-200">

                    <div className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10 px-2`}>
                        Operating System
                    </div>

                    <div className="font-sans font-extralight md:text-s lg:text-xl text-sm text-[#C1C2D3] z-10 px-4 py-5">
                        I collaborated with a group to design and develop an operating system for a class project. The operating system consisted of a file system, paging, multiple terminals with round robin scheduling, IDT, keyboard handler, assembly linkage, system calls, and user level program execution.
                        I have an emulation for it setup at the link below if you would like to try it out!
                    </div>

                </div>

                <div className='flex items-center justify-center'>
                    <a href="/demo.html">
                            <LitUpButton 
                                title = "OS Demo"
                                icon = {<BsFillTerminalFill size={25}/>}
                                position='right'
                                otherClasses="mt-10"
                            />
                    </a>
                </div>
            </div>

            <div className="w-full flex items-center justify-center border border-black/[0.2] dark:border-white/[0.2] flex-col mx-auto p-4 relative h-[30rem] rounded-3xl top-8" style={{backgroundColor: 'rgb(18,16,14)', background: 'linear-gradient(90deg, rgba(18,16,14,1) 0%, rgba(17, 25, 40, 0.75) 100%)'}}>
                {/* <h2>
                    <Link href="/rag">Back to home</Link>
                </h2> */}

                
                <div className='flex items-center justify-center'>
                    <Link href="/rag">
                            <LitUpButton 
                                title = "RAG Chatbot"
                                icon = {<BsFillTerminalFill size={25}/>}
                                position='right'
                                otherClasses="mt-10"
                            />
                    </Link>
                </div>

            </div>
            
            <div className="w-full flex items-center justify-center border border-black/[0.2] dark:border-white/[0.2] flex-col mx-auto p-4 relative h-[30rem] rounded-3xl top-8" style={{backgroundColor: 'rgb(18,16,14)', background: 'linear-gradient(90deg, rgba(18,16,14,1) 0%, rgba(17, 25, 40, 0.75) 100%)'}}>

            </div>
        </div>
    </div>
    // <div id="leadership" className="flex flex-col items-center ">
    //     <h1 className=" m-8 heading">Meet Our
    //         <span className="text-purple"> Team</span>
    //     </h1>
    //     <ExpandableCardDemo/>
    // </div>
  )
}

export default Projects