"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
    const{ref}=useSectionInView('Contact');
    
  return (
    <motion.section 
    ref={ref}
    id="contact" 
    className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    initial={{opacity: 0,scale:0}} 
    whileInView={{opacity: 1,scale: 1}}
    transition={{type:"tween",duration:0.2}}
    viewport={{once: true}}>
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-blue-100 font bold">
        Get in touch with me directly at
        <a
          href="mailto:christdash6@gmailcom"
          className="bg-gradient-to-t from-green-900 to bg-slate-300 justify-center  py-2 flex items-center
          gap-2 rounded-full  text-black font-bold focus:scale-[1.10] hover:scale-[1.10] hover:bg-green-300 active:scale-110
          transition"
        >
          christdash6@gmail.com
        </a>{" "}
        or through this form
      </p>

      <form className="mt-10 flex flex-col"
      action={async(formData) => {
          const{data,error}= await sendEmail(formData);
          if (error) {
            toast.error(error);
            return
          }
          toast.success ("Email sent successfully");
        }}>
        <input
          className="h-14 rounded-lg border border-green-900 p-4 text-black"
          type="email"
          placeholder="Your email"
          name="senderEmail"
          required
          maxLength={500}
        />
        <textarea 
        className="h-52 my-3 rounded-lg border border-green-900 p-4 text-black" 
        placeholder="Your message"
        name="message"
        required
        maxLength={5000} />
       <SubmitBtn/>
      </form>
    </motion.section>
  );
}
