import * as motion from "motion/react-client";
import Link from "next/link";

export default function ContributionsSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="contributions"
      className="mb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ staggerChildren: 0.2 }}
    >
      <motion.h2 className="text-2xl font-bold mb-6" variants={fadeInUp}>
        Current Learning & Projects
      </motion.h2>

      <motion.div className="mb-10" variants={fadeInUp}>
        <h3 className="text-xl font-semibold mb-4">Learning Journey</h3>
        <p className="text-gray-300 mb-4">
          I&apos;m constantly expanding my skills. Currently, I&apos;m focusing
          on:
        </p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
          <li>
            <span className="font-semibold">Rust Programming:</span> Learning
            Rust to build high-performance applications and improve systems
            programming skills
          </li>
          <li>
            <span className="font-semibold">Game Development:</span> Exploring
            game development concepts to build interactive experiences
          </li>
        </ul>
      </motion.div>

      <motion.div className="mb-10" variants={fadeInUp}>
        <h3 className="text-xl font-semibold mb-4">
          Ongoing Project: Terminal GitHub Desktop
        </h3>
        <p className="text-gray-300 mb-4">
          I&apos;m currently building a terminal-based GitHub desktop
          alternative in Rust. This open-source project aims to provide a
          lightweight, fast interface for Git operations directly in the
          terminal.
        </p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
          <li>Using Rust for performance and memory safety</li>
          <li>Implementing git2 for Git operations</li>
          <li>Building terminal UI with ratatui</li>
          <li>
            Planning features like repository browsing, commit history
            visualization, and GitHub API integration
          </li>
        </ul>
        <p className="text-gray-300">
          This project helps me improve my Rust skills while creating a tool
          that I and other developers can use daily. Follow my progress on
          <Link
            href="https://github.com/Era360"
            aria-label="GitHub"
            className="text-primary"
          >
            {" "}
            GitHub!
          </Link>
        </p>
      </motion.div>

      <motion.div className="mb-10" variants={fadeInUp}>
        <h3 className="text-xl font-semibold mb-4">Technical Articles</h3>
        <p className="text-gray-300 mb-4">
          I enjoy sharing knowledge through technical writing. Some of my
          article topics include:
        </p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
          <li>
            <Link href="https://blog.neurotech.africa/unveiling-the-magic-behind-instant-bible-verses/">
              BibleGPT: Unveiling the Magic Behind Instant Bible Verses
            </Link>
          </li>
          <li>
            <Link href="https://blog.neurotech.africa/filter-swahili-sms-by-categories-using-machine-learning/">
              Filter Swahili SMS by categories using machine learning.
            </Link>
          </li>
          <li>
            <Link href="https://blog.neurotech.africa/4-popular-natural-language-processing-techniques/">
              4 Popular Natural Language Processing Techniques
            </Link>
          </li>
        </ul>
      </motion.div>
    </motion.section>
  );
}
