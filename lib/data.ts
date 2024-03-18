import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import reactbootcamp from "@/public/reactbootcamp.jpg";
import frontend from "@/public/frontend.jpg";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    id:3,
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Bootcamp Projects",
    description:
      " I worked on various dynamic projects showcasing proficiency in React,state management with Redux, Stripe integration and Firebase",
    tags: ["Javascript","React", "Next.js", "Tailwind","Html","Redux","Typescript"],
    imageUrl: reactbootcamp,
  },
  {
    title: "Frontend developer-UI/UX designer",
    description:
      "I was the front-end developer for these projects and designed some. They haveo features like filtering, sorting and pagination.",
    tags: ["React", "Next.js", "Tailwind", "Redux","Figma"],
    imageUrl: frontend,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "Tailwind",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Three.js",
  "Gsap",
  "Framer Motion",
  "Git",
  "Prisma",
  "MongoDB",
  "Redux",
  "Figma",
  "Ahrefs",
] as const;
