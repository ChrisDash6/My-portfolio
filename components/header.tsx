"use client";

import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/app/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white- border-opacity-10 bg-gradient-to-b from-slate-800 to-slate-00 bg-opacity-40 shadow-lg shadow-black/[0.09] backdrop-blur-[0.1rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: 200, x: "-50%", opacity: 0 }}
        animate={{ y: 1, x: "-50%", opacity: 90 }}
      ></motion.div>

      <nav className="fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-100 sm:w-[inital] sm:flex-nowrap sm:gap-5 ">
          {links.map((link) => (
            <motion.li className="h-3/4 flex items-center justify-center relative" key={link.hash}
              whileHover={{ scale: 1.2, textShadow: "0 0 6px #fff" }}
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 1, opacity: 90 }}
            >
              <Link href={link.hash} passHref>
                <a className={clsx("flex w-full items-center justify-center px-3 py-3 hover:text-blue-300",
                  { 'text-blue-300': activeSection === link.name })}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}>
                  {link.name}
                  {link.name === activeSection && (
                    <motion.span className="bg-gradient-to-t from-slate-900 to bg-slate-100 my-1 rounded-full absolute inset-0 -z-10"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}>
                    </motion.span>
                  )}
                </a>
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
