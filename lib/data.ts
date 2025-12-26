import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import inprogress from "@/public/inprogress.png";
import Ecommerce from "@/public/Ecommerce.png"
import personalportfolio from "@/public/personalportfolio.png";
import ReactMovieApp from "@/public/ReactMovieApp.png"


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
    title: "Graduated College - University of North Carolina at Charlotte",
    location: "Charlotte, NC",
    description:
      "I graduated in 2020. Landed my first job as a Leadership Development Program (VLDP) at Verizon.",
    icon: React.createElement(LuGraduationCap),
    date: "2016 - 2020",
  },
  {
    title: "Verizon Leadership Development Program",
    location: "Basking Ridge, NJ",
    description:
      "I completed three rotations on the customer service side of Verizon, gaining experience across POS, customer service centers, and IVR systems. During this time, I also began learning React to strengthen my technical skill set and transition into software development.",
    icon: React.createElement(FaReact),
    date: "2020 - 2023",
  },
  {
    title: "Engr III Cslt-App Dev",
    location: "Basking Ridge, NJ",
    description:
      "Worked with React (JSX) and Redux to integrate new systems into the ACSS customer service application used by over 30,000 representatives daily. Gained hands-on experience modernizing the platform and contributing to the integration of Micro Frontends (MFEs).",
    icon: React.createElement(FaReact),
    date: "2023 - 2025",
  },
] as const;

export const projectsData = [
  {
    title: "Practice Personal Portfolio",
    description:
      "Personal Portfolio to know about me 😊",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Git", "Framer-motion", "React Email", "Resend"],
    imageUrl: personalportfolio,
  },
  {
    title: "React Movie App - Practice",
    description:
      "Practice project to render movies by fetching API endpoints and render, using react router and useContext",
    tags: ["React", "JavaScript", "CSS", "HTML", "Vite", "React Router"],
    imageUrl: ReactMovieApp,
  },
  {
    title: "Ecommerce Application - Practice",
    description:
      "Practice project for a Ecommerce webpage, experiementing checkout using Stripe, and exploring Zustand for state management",
    tags: ["React", "Next.js", "Typescript","Tailwind", "Git", "Stripe" , "Zustand"],
    imageUrl: Ecommerce,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript (learning)",
  "React (JSX)",
  "Next.js (learning)",
  "Node.js",
  "Git",
  "Tailwind (learning)",
  "MongoDB (familiar)",
  "Redux",
  "GraphQL (familiar)",
  "Framer Motion (learning)",
  "CI/CD",
  "Jira",
  "Figma"
] as const;
