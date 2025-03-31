import * as motion from "motion/react-client";

export default function ProjectsSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="projects"
      className="mb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ staggerChildren: 0.2 }}
    >
      <motion.h2 className="text-2xl font-bold mb-6" variants={fadeInUp}>
        Projects
      </motion.h2>

      <motion.div className="mb-10" variants={fadeInUp}>
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold">Ghala</h3>
          <a href="#" className="text-primary text-sm hover:underline">
            Visit Project
          </a>
        </div>
        <p className="text-gray-300 mb-4">
          A sales management platform designed to help businesses track
          inventory and sales. Ghala provides an intuitive interface for
          managing products, tracking inventory levels, and analyzing sales
          data. This solution helps small to medium-sized businesses streamline
          their operations and make data-driven decisions to improve
          profitability.
        </p>
        <div className="mb-4">
          <span className="project-pill bg-purple-700">React</span>
          <span className="project-pill bg-blue-700">TypeScript</span>
          <span className="project-pill bg-pink-700">Tailwind CSS</span>
          <span className="project-pill bg-green-700">RESTful API</span>
        </div>
        <motion.div
          className="h-48 bg-gray-800 rounded-lg flex items-center justify-center mb-2 overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-gray-400">Ghala Dashboard</p>
        </motion.div>
      </motion.div>

      <motion.div className="mb-10" variants={fadeInUp}>
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold">Sarufi</h3>
          <a href="#" className="text-primary text-sm hover:underline">
            Visit Project
          </a>
        </div>
        <p className="text-gray-300 mb-4">
          Sarufi is a no-code chatbot builder platform that enables users to
          create, train, and deploy chatbots without writing code. It features
          natural language processing capabilities and supports multi-channel
          deployment. Designed for businesses and developers who want to quickly
          implement conversational interfaces for customer service, lead
          generation, and automation.
        </p>
        <div className="mb-4">
          <span className="project-pill bg-green-700">Python</span>
          <span className="project-pill bg-blue-700">FAST API</span>
          <span className="project-pill bg-indigo-700">Next.js</span>
          <span className="project-pill bg-yellow-700">NLP</span>
        </div>
        <motion.div
          className="h-48 bg-gray-800 rounded-lg flex items-center justify-center mb-2 overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-gray-400">Sarufi Interface</p>
        </motion.div>
      </motion.div>

      <motion.div className="mb-10" variants={fadeInUp}>
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold">Terminal GitHub Desktop</h3>
          <a href="#" className="text-primary text-sm hover:underline">
            View on GitHub
          </a>
        </div>
        <p className="text-gray-300 mb-4">
          A terminal-based GitHub desktop alternative built in Rust. This
          open-source project aims to provide a lightweight, fast interface for
          Git operations directly in the terminal. Features include repository
          browsing, commit history visualization, and GitHub API integration.
          This project is part of my journey to improve my Rust skills while
          creating something useful for developers.
        </p>
        <div className="mb-4">
          <span className="project-pill bg-red-700">Rust</span>
          <span className="project-pill bg-gray-700">git2</span>
          <span className="project-pill bg-blue-700">ratatui</span>
          <span className="project-pill bg-purple-700">GitHub API</span>
        </div>
        <motion.div
          className="h-48 bg-gray-800 rounded-lg flex items-center justify-center mb-2 overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-gray-400">Terminal Interface</p>
        </motion.div>
      </motion.div>

      <motion.div className="mb-10" variants={fadeInUp}>
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold">Rust Ping Pong Game</h3>
          <a href="#" className="text-primary text-sm hover:underline">
            View on GitHub
          </a>
        </div>
        <p className="text-gray-300 mb-4">
          A simple yet engaging ping pong game built with the Rust programming
          language. This project was developed to explore game development
          concepts in Rust and create an entertaining game with smooth graphics,
          scorekeeping, and various difficulty levels. It served as a learning
          project to improve my Rust skills and understand game mechanics.
        </p>
        <div className="mb-4">
          <span className="project-pill bg-red-700">Rust</span>
          <span className="project-pill bg-green-700">Game Development</span>
        </div>
        <motion.div
          className="h-48 bg-gray-800 rounded-lg flex items-center justify-center mb-2 overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-gray-400">Game Demo</p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
