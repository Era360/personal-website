import * as motion from "motion/react-client";
import Link from "next/link";

export default function MiscSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="misc"
      className="mb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ staggerChildren: 0.2 }}
    >
      <motion.h2 className="text-2xl font-bold mb-6" variants={fadeInUp}>
        Misc
      </motion.h2>

      <motion.div className="mb-10" variants={fadeInUp}>
        <h3 className="text-xl font-semibold mb-4">Contact</h3>
        <p className="text-gray-300 mb-2">
          Feel free to reach out to me via email or connect with me on LinkedIn.
          <br />
          You can contact me at:
        </p>
        <p className="mb-2">
          Email:{" "}
          <Link
            href="mailto:mkumboelia@gmail.com"
            className="text-primary hover:underline"
          >
            mkumboelia@gmail.com
          </Link>
        </p>
        <p>
          LinkedIn:{" "}
          <Link
            href="https://www.linkedin.com/in/elia-mkumbo-799336213/"
            className="text-primary hover:underline"
          >
            linkedin.com/in/elia-mkumbo-799336213
          </Link>
        </p>
      </motion.div>

      <motion.div className="mb-10" variants={fadeInUp}>
        <h3 className="text-xl font-semibold mb-4">Tech I love</h3>
        <p className="text-gray-300 mb-4">
          I enjoy working with various technologies and continuously learning
          new ones. Here&apos;s a breakdown of the tech I use most frequently:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <p className="font-semibold mb-2">
              My preferred tech stack for frontend projects:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-1">
              <li>React.js</li>
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Redux</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">Backend & Data tools:</p>
            <ul className="list-disc pl-6 text-gray-300 space-y-1">
              <li>Python</li>
              <li>FAST API</li>
              <li>Flask</li>
              <li>MongoDB</li>
              <li>SQL databases</li>
            </ul>
          </div>
        </div>

        <p className="font-semibold mb-2">
          Other technologies I&apos;m experienced with or currently learning:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ul className="list-disc pl-6 text-gray-300 space-y-1">
            <li>Rust (currently learning)</li>
            <li>Game Development</li>
            <li>Machine Learning Libraries</li>
            <li>NLP Tools</li>
            <li>Data Visualization</li>
          </ul>
          <ul className="list-disc pl-6 text-gray-300 space-y-1">
            <li>Git & GitHub</li>
            <li>Firebase</li>
            <li>REST APIs</li>
            <li>Docker</li>
            <li>AWS (basics)</li>
          </ul>
        </div>
      </motion.div>

      <motion.div className="mb-10" variants={fadeInUp}>
        <h3 className="text-xl font-semibold mb-4">Hobbies & Interests</h3>
        <p className="text-gray-300 mb-2">
          When I&apos;m not coding, you might find me:
        </p>
        <ul className="list-disc pl-6 text-gray-300 space-y-1">
          <li>Gaming (PUBG, Call of Duty, Red Dead Redemption 2)</li>
          <li>Playing or watching basketball</li>
          <li>Swimming</li>
          <li>Playing chess</li>
          <li>Watching movies</li>
          <li>Attending local tech meetups and hackathons</li>
          <li>
            Writing technical articles on AI, NLP, and chatbot development
          </li>
        </ul>
      </motion.div>

      <motion.div className="mb-10" variants={fadeInUp}>
        <h3 className="text-xl font-semibold mb-4">Languages</h3>
        <ul className="list-disc pl-6 text-gray-300 space-y-1">
          <li>English (Professional)</li>
          <li>Swahili (Native)</li>
          <li>Spanish (Learning)</li>
        </ul>
      </motion.div>
    </motion.section>
  );
}
