"use client";

import { useState, useEffect } from "react";
import * as motion from "motion/react-client";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition =
        document.querySelector(".right-section")?.scrollTop || 0;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    const rightSection = document.querySelector(".right-section");
    if (rightSection) {
      rightSection.addEventListener("scroll", handleScroll);
    }

    return () => {
      const rightSection = document.querySelector(".right-section");
      if (rightSection) {
        rightSection.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const rightSection = document.querySelector(".right-section");
      if (rightSection) {
        rightSection.scrollTo({
          top: section.offsetTop - 20,
          behavior: "smooth",
        });
      }
    }
  };

  const navItems = [
    { id: "work", label: "Work" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "misc", label: "Misc" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <motion.div
        className="bg-gray-900/70 backdrop-blur-md px-6 py-2 rounded-full flex items-center space-x-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`text-sm font-medium py-1 px-1 relative ${
              activeSection === item.id
                ? "text-primary"
                : "text-gray-300 hover:text-white"
            }`}
          >
            {item.label}
            {activeSection === item.id && (
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 w-full bg-primary"
                layoutId="underline"
              />
            )}
          </button>
        ))}
      </motion.div>
    </nav>
  );
}
