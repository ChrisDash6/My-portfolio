"use client";

import Image from 'next/image'
import dash from "../public/dasht.jpg"
import { motion } from 'framer-motion'
import Link from 'next/link';
import {BsArrowRight, BsLinkedin} from 'react-icons/bs'
import {HiDownload} from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/app/context/active-section-context';

export default function Intro() {
  const{ref}=useSectionInView('Home',0.5);
  const{setActiveSection, SetTimeOfLastClick}=useActiveSectionContext();
  return (
    <section ref={ref} id="home" className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
        <div className="flex items-center justify-center">
            <div>
                <motion.div
                initial={{opacity: 0,scale:0}}
                animate={{opacity: 1,scale: 1}}
                transition={{
                    type:"tween",
                    duration:0.3,
                }}>
                <div className=' bg-gradient-to-t from-green-900 to bg-green-200 rounded-full px-2 py-2 shadow-xl shadow-color-green
                '>
                <Image src={dash} alt="Chris Dash" 
                width="200" 
                height="200"
                quality="95"
                priority={true}
                className='"h-28 w-28 rounded-full object-cover "'/>
                </div>
                </motion.div>
            </div>
        </div>
        <motion.h1 className='mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-xl'
        initial={{opacity: 0,y:100}} 
        animate={{opacity: 1, y: 0}}>
        <span className="font-bold text-slate-700">Hello, Your problem solver Chris Dash6.</span>
        <span className="font-bold text-black">{" "}a frontend web developer, UI/UX designer and SEO specialist.</span>  
        <span className="font-bold text-slate-700">{" "}I excel in {" "}designing, building, customizing, and optimizing websites . With a focus on</span>{" "}
        <span className="font-bold text-black"> React (Next.js){" "}, Figma {' '} and {" "} Ahrefs.</span>
        </motion.h1>

        <motion.div className="flex flex-col items-center justify-center gap-4 px-4 
         sm:flex-row"
         initial={{opacity: 0,y:100}} 
         animate={{opacity: 1, y: 0}}
         transition={{delay:0.1}}>

          <Link href="#contact" className='group bg-gradient-to-t from-slate-900 to bg-slate-00 px-7 py-3 flex items-center
          gap-2 rounded-full outline-none focus:scale-[1.10] hover:scale-[1.10] hover:bg-blue-200 active:scale-110
          transition'
          onClick={()=>{
            setActiveSection ("Contact");
            SetTimeOfLastClick(Date.now());
          }}>Contact me here <BsArrowRight className='opacity-100 group-hover:translate-x-2 transition'/> </Link>

          <a className='group bg-gradient-to-b from-blue-200 to bg-blue-00 text-black px-7 py-3 flex items-center
          gap-2 rounded-full outline-none focus:scale-[1.10] hover:scale-[1.10] hover:bg-gray-700 active:scale-110
          transition cursor-pointer' href="/CV.pdf" download>
            Download My CV <HiDownload  className='opacity-100 group-hover:translate-y-1 ,
             transition'/></a>

          <a className='group bg-gradient-to-b from-blue-200 to bg-blue-00 text-black p-4 flex items-center
          gap-2 rounded-full text-[1.25rem] outline-none focus:scale-[1.10] hover:scale-[1.10] hover:bg-gray-700 active:scale-110
          transition cursor-pointer' href='https://www.linkedin.com/in/manirakiza-christian-7642502b4/' target='_blank'>
            <BsLinkedin  className='opacity-100 group-hover:translate-x-0 transition'/></a>

          <a className='group bg-gradient-to-b from-blue-200 to bg-blue-00 text-black p-4 flex items-center
          gap-2 rounded-full text-[1.45rem] outline-none focus:scale-[1.10] hover:scale-[1.10] hover:bg-gray-700 active:scale-110
          transition cursor-pointer' href='https://github.com/ChrisDash6' target='_blank'>
            <FaGithub  className='opacity-100 group-hover:translate-x-0 transition'/></a>

        </motion.div>
    </section>
  )
}
