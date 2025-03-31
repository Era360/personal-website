import * as motion from "motion/react-client";

export default function WorkSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="work"
      className="my-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ staggerChildren: 0.2 }}
    >
      <motion.h2 className="text-2xl font-bold mb-6" variants={fadeInUp}>
        Work
      </motion.h2>

      <motion.div className="mb-10" variants={fadeInUp}>
        <h3 className="text-xl font-semibold mb-1">Frontend Developer</h3>
        <p className="text-gray-400 text-sm mb-2">
          Neurotech Africa • Full-Time • Present
        </p>
        <p className="text-gray-300 mb-4">
          Currently developing responsive and interactive web applications using
          modern frontend technologies. Building user interfaces with React.js,
          Next.js, and TypeScript, while implementing UI designs with Tailwind
          CSS. I collaborate with cross-functional teams to create innovative
          solutions and participate in Innovation Day events, working on
          experimental projects and new technologies.
        </p>
      </motion.div>

      <motion.div className="mb-10" variants={fadeInUp}>
        <h3 className="text-xl font-semibold mb-1">Data Science Intern</h3>
        <p className="text-gray-400 text-sm mb-2">
          Neurotech Africa • Internship • Prior Role
        </p>
        <p className="text-gray-300 mb-4">
          Worked on data analysis and machine learning projects, building data
          visualization tools and reports. Assisted in developing AI-powered
          solutions and collaborated with the data science team to improve
          existing models. Gained experience with Python, FAST API, and data
          processing.
        </p>

        <p className="text-gray-300 mb-2">Key projects included:</p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
          <li>
            Data analysis tools for processing and visualizing large datasets
            (Python, Pandas, Matplotlib)
          </li>
          <li>
            Backend services for machine learning model deployment (FAST API,
            Flask)
          </li>
          <li>
            Natural language processing components for chatbot development
            (Python, NLP libraries)
          </li>
          <li>Documentation and technical writing for internal AI systems</li>
        </ul>
      </motion.div>

      <motion.div className="mb-10" variants={fadeInUp}>
        <h3 className="text-xl font-semibold mb-1">
          Self-Employed Web Developer
        </h3>
        <p className="text-gray-400 text-sm mb-2">
          Freelance • Self-Employed • Previous
        </p>
        <p className="text-gray-300 mb-4">
          Developed and maintained websites for small businesses and individual
          clients. Created responsive and user-friendly web interfaces using
          modern web technologies. Implemented SEO best practices and provided
          technical support for client websites.
        </p>
      </motion.div>
    </motion.section>
  );
}
