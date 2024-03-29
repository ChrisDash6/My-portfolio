"use client";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

type ProjectProps= typeof projectsData[number]
export default function Project({ title, description, tags, imageUrl }:ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const{scrollYProgress} = useScroll({
        target:ref,
        offset: ["0 1", "1.33 1"],

    });
    const scaleProgress= useTransform(scrollYProgress, [0,1], [0.6,1]);
    const opacityProgress= useTransform(scrollYProgress, [0,1], [0.6,1]);

  return <motion.div ref={ref} 
  style={{
    scale:scaleProgress,
    opacity:opacityProgress,
  }}
  className="group mb-3 sm:mb-8 last:mb-0 ">
    <section 
  className=" bt-0 bg-gradient-to-t from-black to bg-slate-400 rounded-xl max-w-[42rem]
  overflow-hidden sm:pr-8 relative sm:h-[20rem]   hover:bg-blue-300 transition sm:group-even:pl-8">

    <div className="pt-4 pb-7 px5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">

    <h3 className="text-2xl font-bold text-black ">{title}</h3>

    <p className="mt-2 leading-relaxed text-blue-100">{description}</p>

    <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
        {tags.map((tag, index) => (
          <li className=" bg-gradient-to-b from-blue-50 to bg-gray-900 font-bold px-3 py-1 text-[0.7rem] uppercase
          tracking-wider text-slate-900 rounded-full" key={index}>{tag}</li>
        ))}
    </ul>
    </div>
    <Image src={imageUrl} alt="Projects I worked on" quality={95}
    className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
    transition
    group-hover:-translate-x-3
    group-hover:scale-[1.04]
    group-hover:-translate-y-3
    group-hover:-rotate-2
    group-even:group-hover:translate-x-3
    group-even:group-hover:translate-y-3
    group-even:group-hover:rotate-2
    group-even:right-[initial]
    group-even:-left-40"/>
  </section>
  </motion.div>
}
