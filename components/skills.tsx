"use client";
import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index:number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: index * 0.1,
        },
    })
};
        

export default function Skills() {
    const{ref}=useSectionInView('Skills');
  return (
    <section 
    id="skills"
    ref={ref} 
    className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'>
        <SectionHeading>My skills</SectionHeading>
        <ul className='flex flex-wrap justify-center gap-2 text-lg text-blue-100'>
            {
                skillsData.map((skill, index) => (
                    <motion.li className='bg-gradient-to-b from-blue-50 to bg-gray-900 font-bold uppercase
                    tracking-wider text-slate-900 rounded-full px-4 py-2' 
                    key={index}
                    variants={fadeInAnimationVariants}
                    initial="initial" 
                    whileInView="animate" 
                    viewport={{ once: true }}
                    custom={index}>
                        {skill}
                    </motion.li>
                ))
            }
        </ul>
    </section>
  )
}
