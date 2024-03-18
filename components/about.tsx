"use client";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const{ref}=useSectionInView('About');
  return (
    <motion.section 
    ref={ref}
    className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    initial={{opacity: 0,scale:0}} 
    animate={{opacity: 1,scale: 1}}
    transition={{type:"tween",duration:0.3,delay:0.175}}
    id="about">
      <SectionHeading>About me</SectionHeading> 
      <p className="mb-3 text-blue-100">
        I am a versatile Frontend Web Developer, UI/UX Designer, and SEO
        Specialist with a passion for crafting captivating digital experiences.{" "}
          {" "}
        My journey into the world of web development began with a leap into a
        rigorous bootcamp program where I honed my skills and mastered the art
        of creating exceptional websites.
        My favorite part of programming is the
        problem-solving aspect. I love the
        feeling of finally figuring out a solution to a problem.{" "}
        <span className="font-bold text-black">
        My core stack is React , Next.js , Node.js , Prisma and MongoDB . I am also familiar with
          TypeScript ,Redux and Git version control for frontend development.
           Figma , Procreate and Sketch for Designing mockups.
          SEMrush , Ahrefs for SEO. </span>
        {' '}I am always looking to learn new technologies.
        My approach to web development is not merely about writing lines of code
        or arranging pixels on a screen; it's about understanding the needs of
        users and businesses alike. With a keen eye for detail and a deep
        understanding of user psychology, I strive to craft seamless user
        interfaces and intuitive user experiences that resonate with audiences
        and drive meaningful engagement. In addition to my technical skills, I
        bring a strategic mindset to the table, leveraging SEO best practices to
        optimize websites for maximum visibility and impact. By staying abreast
        of the latest industry trends and algorithms, I ensure that every
        website I touch not only looks exceptional but also performs
        exceptionally well in search engine rankings.{" "}

        When I'm not coding , I enjoy dramaturgy, making art, and playing with my dog. I also enjoy{" "}
        learning new things . I am currently
        learning about{" "}
        Full Stack development  and
        python for machine learning and data analysis .
      </p>
    </motion.section>
  );
}
