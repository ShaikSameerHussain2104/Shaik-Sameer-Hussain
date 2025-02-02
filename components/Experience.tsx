"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const experiences = [
  {
    company: "Outlier.ai",
    role: "Code Reviewer & Prompt Engineer",
    period: "October – November 2024",
    description:
      "Reviewed and optimized code for AI applications. Engineered prompts for large language models to improve performance and accuracy.",
    caseStudy:
      "Developed a novel prompt engineering technique that increased the accuracy of a sentiment analysis model by 15%, leading to improved customer feedback analysis for a major e-commerce client.",
  },
  {
    company: "Keshavsoft",
    role: "Web Development Intern",
    period: "August – September 2024",
    description: "Assisted in developing and maintaining web applications using modern JavaScript frameworks.",
    caseStudy:
      "Implemented a responsive dashboard using React and D3.js, which reduced data visualization load times by 40% and improved user engagement metrics by 25%.",
  },
]

export default function Experience() {
  const [activeExperience, setActiveExperience] = useState(null)

  return (
    <section id="experience" className="py-20 px-4">
      <motion.h2
        className="text-4xl font-bold text-center mb-10 text-navy-blue"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Work Experience
      </motion.h2>
      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            className="mb-8 bg-glassmorphism p-6 rounded-lg cursor-pointer"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setActiveExperience(activeExperience === exp ? null : exp)}
          >
            <h3 className="text-2xl font-bold">{exp.role}</h3>
            <h4 className="text-xl text-blue-400">{exp.company}</h4>
            <p className="text-gray-400">{exp.period}</p>
            <p className="mt-2">{exp.description}</p>
          </motion.div>
        ))}
      </div>
      {activeExperience && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="bg-gray-800 p-8 rounded-lg max-w-2xl w-full">
            <h3 className="text-2xl font-bold mb-2">{activeExperience.role}</h3>
            <h4 className="text-xl text-blue-400 mb-2">{activeExperience.company}</h4>
            <p className="text-gray-400 mb-4">{activeExperience.period}</p>
            <p className="mb-4">{activeExperience.description}</p>
            <h5 className="text-lg font-semibold mb-2">Case Study:</h5>
            <p>{activeExperience.caseStudy}</p>
            <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setActiveExperience(null)}>
              Close
            </button>
          </div>
        </motion.div>
      )}
    </section>
  )
}

