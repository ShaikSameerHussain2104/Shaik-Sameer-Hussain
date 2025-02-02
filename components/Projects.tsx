"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { FaCode, FaRobot, FaFileAlt, FaFilePdf, FaShieldAlt } from "react-icons/fa"

const projects = [
  {
    title: "AI-Driven Comprehensive Personal Assistance",
    description:
      "An AI-powered platform providing personalized services across health, finance, legal, and student domains.",
    image: "/favicon.jpeg", // Ensure this file exists in the public folder
    icon: <FaRobot className="text-4xl mb-4 text-blue-500" />,
    github: "https://github.com/Sameerq7/AI-Driven-Comprehensive-Personal-Assistance-and-Development",
    demo: "https://github.com/Sameerq7/AI-Driven-Comprehensive-Personal-Assistance-and-Development",
  },
  {
    title: "Code Editor",
    description: "A compiler that supports multiple languages including C, C++, Java, and Python.",
    image: "/CodersDive_logo.jpg", // Ensure this file exists in the public folder
    icon: <FaCode className="text-4xl mb-4 text-green-500" />,
    github: "https://github.com/Sameerq7/Code-Editor",
    demo: "https://github.com/Sameerq7/Code-Editor",
  },
  {
    title: "CodeSmith with multilingual code generator",
    description: "A multilingual code generator for automated coding solutions.",
    image: "https://codesmith-with-multilingual-support.onrender.com/download.png", // External URL
    icon: <FaCode className="text-4xl mb-4 text-blue-500" />,
    github: "https://github.com/Sameerq7/DevOpsCodeSmith-with-MultiLingual-Support",
    demo: "https://codesmith-with-multilingual-support.onrender.com",
  },
  {
    title: "JARVIS-2.0",
    description: "A powerful Python-based AI assistant with voice recognition, task automation, and NLP capabilities.",
    image: "/image3.png", // Ensure this file exists in the public folder
    icon: <FaRobot className="text-4xl mb-4 text-green-500" />,
    github: "https://github.com/Sameerq7/JARVIS-2.0",
    demo: "https://github.com/Sameerq7/JARVIS-2.0",
  },
  {
    title: "Project Document Creator",
    description: "A platform to effortlessly generate professional project documentation.",
    image: "/document.png", // Ensure this file exists in the public folder
    icon: <FaFileAlt className="text-4xl mb-4 text-yellow-500" />,
    github: "https://github.com/Sameerq7/Project-Document-Creator",
    demo: "https://project-document-creator.onrender.com",
  },
  {
    title: "PDF & PPT Management Tool",
    description: "Dockerized document management system for file conversions and modifications.",
    image: "/favicon.png", // Ensure this file exists in the public folder
    icon: <FaFilePdf className="text-4xl mb-4 text-red-500" />,
    github: "https://github.com/Sameerq7/PPT_to_PDF_Converter",
    demo: "https://imanagepdf.onrender.com",
  },
]

export default function Projects() {
  const [activeProject, setActiveProject] = useState<any | null>(null)

  return (
    <section id="projects" className="py-20 px-4">
      <motion.h2
        className="text-4xl font-bold text-center mb-10 text-navy-blue"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="bg-glassmorphism p-6 rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setActiveProject(activeProject === project ? null : project)}
          >
            <div className="flex justify-center">{project.icon}</div>
            <Image
              src={project.image || "/placeholder.svg"} // Added fallback to placeholder.svg
              alt={project.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="mb-4 text-gray-300">{project.description}</p>
            <div className="flex justify-between">
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                GitHub
              </Link>
              <Link
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline"
              >
                Live Demo
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
      {activeProject && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="bg-gray-800 p-8 rounded-lg max-w-2xl w-full">
            <h3 className="text-2xl font-bold mb-4">{activeProject.title}</h3>
            <Image
              src={activeProject.image || "/placeholder.svg"} // Added fallback to placeholder.svg
              alt={activeProject.title}
              width={600}
              height={400}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="mb-4">{activeProject.description}</p>
            <div className="flex justify-between">
              <Link
                href={activeProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                GitHub
              </Link>
              <Link
                href={activeProject.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline"
              >
                Live Demo
              </Link>
            </div>
            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded" onClick={() => setActiveProject(null)}>
              Close
            </button>
          </div>
        </motion.div>
      )}
    </section>
  )
}
