"use client";

import Link from "next/link";
import { useRef } from "react";
import * as motion from "motion/react-client";
import { useScroll, useTransform } from "motion/react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

// Local imports
import Navigation from "@/components/Navigation";
import StarBackground from "@/components/StarBackground";
import WorkSection from "@/components/sections/WorkSection";
import MiscSection from "@/components/sections/MiscSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import EducationSection from "@/components/sections/EducationSection";
import ContributionsSection from "@/components/sections/ContributionsSection";

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  const moonY = useTransform(scrollYProgress, [0, 0.5, 1], [20, -50, -150]);
  const moonX = useTransform(scrollYProgress, [0, 0.5, 1], [20, 40, 100]);

  // Scale the moon slightly as it moves
  const moonScale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  // Subtly adjust the glow as the moon moves
  const moonGlow = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "0 0 40px rgba(255,255,255,0.7)",
      "0 0 30px rgba(255,255,255,0.5)",
      "0 0 20px rgba(255,255,255,0.3)",
    ]
  );

  return (
    <div className="relative w-full h-screen overflow-hidden bg-dark">
      {/* Background with parallax effects */}
      <StarBackground ScrollableRef={containerRef} />

      {/* Moon */}
      <motion.div
        className="fixed top-30 right-20 z-0 pointer-events-none"
        style={{
          y: moonY,
          x: moonX,
          scale: moonScale,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="w-16 h-16 rounded-full bg-gray-200"
          style={{
            boxShadow: moonGlow,
          }}
        />
      </motion.div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 w-full z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full"
        >
          <path
            fill="#6C63FF"
            fillOpacity="0.3"
            d="M0,256L48,261.3C96,267,192,277,288,261.3C384,245,480,203,576,197.3C672,192,768,224,864,234.7C960,245,1056,235,1152,224C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Navigation */}
      <Navigation />

      <div className="scroll-container">
        {/* Fixed left section */}
        <div className="left-section">
          <motion.h1
            className="text-6xl font-bold mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hey, I&apos;m <br />
            <span className="text-primary">Elia Mkumbo</span>.
          </motion.h1>

          <motion.p
            className="text-gray-300 text-lg mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I&apos;m a frontend developer and full-stack enthusiast based in Dar
            es Salaam, Tanzania. Currently working at Neurotech Africa, I&apos;m
            passionate about{" "}
            <span className="text-primary">building intuitive interfaces</span>{" "}
            and exploring new technologies. When I&apos;m not coding, you can
            find me participating in local tech meetups or working on my latest
            Rust project.
          </motion.p>

          <motion.div
            className="social-icons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="https://github.com/Era360" aria-label="Github">
              <FaGithub size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/elia-mkumbo-799336213/"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </Link>
            <Link href="https://x.com/eliah_mkumbo" aria-label="Twitter">
              <FaTwitter size={20} />
            </Link>
            <Link href="mailto:mkumboelia@gmail.com" aria-label="Email">
              <FaEnvelope size={20} />
            </Link>
          </motion.div>
        </div>

        {/* Scrollable right section */}
        <div ref={containerRef} className="right-section">
          <WorkSection />
          <ProjectsSection />
          <EducationSection />
          <MiscSection />
          <ContributionsSection />
        </div>
      </div>
    </div>
  );
}
