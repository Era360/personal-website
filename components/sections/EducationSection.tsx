import * as motion from "motion/react-client";

export default function EducationSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="education"
      className="mb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ staggerChildren: 0.2 }}
    >
      <motion.h2 className="text-2xl font-bold mb-6" variants={fadeInUp}>
        Education
      </motion.h2>

      <motion.div className="mb-10" variants={fadeInUp}>
        <h3 className="text-xl font-semibold mb-1">
          The Institute of Finance Management
        </h3>
        <p className="text-gray-300 mb-2">
          Diploma in Computer Science. Studied computer science fundamentals,
          programming languages, data structures, algorithms, and software
          development methodologies. Participated in coding competitions and
          technical projects to enhance practical skills.
        </p>
        <a href="#" className="text-primary text-sm hover:underline">
          Diploma
        </a>
      </motion.div>

      <motion.div className="mb-10" variants={fadeInUp}>
        <h3 className="text-xl font-semibold mb-4">Professional Development</h3>
        <p className="text-gray-300 mb-2">
          Continuously improving my skills through online courses, workshops,
          and participating in hackathons. Notable areas of focus include
          frontend development, machine learning, and Rust programming.
        </p>
      </motion.div>
    </motion.section>
  );
}
