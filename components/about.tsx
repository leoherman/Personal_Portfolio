"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After earning my degree in {" "}
        <span className="font-medium">Computer Science</span>, I committed to growing my passion for software development. I began refining my skills through online courses, focusing on the core fundamentals of{" "}
        <span className="font-medium">Front-end web development</span>.{" "}
        <span className="italic">I enjoy bringing ideas to life</span> through clean, functional applications and{" "}
        <span className="underline">love</span> the process of solving challenging technical problems. My primary stack includes{" "}
        <span className="font-medium">
          React, JavaScript, Node.js
        </span>
        , and I have hands-on experience with TypeScript, GraphQL, and SQL. I am constantly exploring new technologies and best practices to improve both my workflow and the user experience of the products I build.{" "}
        I am currently seeking a <span className="font-medium">full-time software developer role</span> where I can contribute, learn, and continue expanding my technical expertise.
      </p>

      <p>
        <span className="italic">Outside of coding</span>, I enjoy playing video games, watching movies, and traveling with my family. I also enjoy{" "}
        <span className="font-medium">continuous learning</span>. and am currently studying a new language.
      </p>
    </motion.section>
  );
}
