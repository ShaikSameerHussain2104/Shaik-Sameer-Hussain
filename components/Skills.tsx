"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaPython, FaJava, FaReact, FaDocker, FaNodeJs, FaJenkins, FaGitlab } from "react-icons/fa"
import {
  SiCplusplus,
  SiJavascript,
  SiFlask,
  SiTensorflow,
  SiGithubactions,
  SiPostman,
  SiGithub,
  SiRender,
  SiNetlify,
  SiFirebase,
  SiOpenai,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
} from "react-icons/si"
import { GrMysql } from "react-icons/gr"
import { TbBrandNextjs } from "react-icons/tb"

type SkillCategory = {
  [key: string]: { name: string; icon: JSX.Element }[]
}

const skillCategories: SkillCategory = {
  Languages: [
    { name: "Python", icon: <FaPython /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "Java", icon: <FaJava /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "SQL", icon: <GrMysql /> },
  ],
  "Web Development": [
    { name: "React.js", icon: <FaReact /> },
    { name: "Next.js", icon: <TbBrandNextjs /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Flask", icon: <SiFlask /> },
  ],
  "AI & Machine Learning": [
    { name: "TensorFlow", icon: <SiTensorflow /> },
    { name: "PyTorch", icon: <SiPytorch /> },
    { name: "Scikit-learn", icon: <SiScikitlearn /> },
    { name: "Pandas", icon: <SiPandas /> },
    { name: "NumPy", icon: <SiNumpy /> },
    { name: "OpenAI", icon: <SiOpenai /> },
  ],
  "DevOps & Cloud": [
    { name: "Docker", icon: <FaDocker /> },
    { name: "GitHub Actions", icon: <SiGithubactions /> },
    { name: "Jenkins", icon: <FaJenkins /> },
    { name: "GitLab", icon: <FaGitlab /> },
  ],
  "Tools & Platforms": [
    { name: "Postman", icon: <SiPostman /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "Render", icon: <SiRender /> },
    { name: "Netlify", icon: <SiNetlify /> },
    { name: "Firebase", icon: <SiFirebase /> },
  ],
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("Languages")
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section id="skills" className="py-20 px-4">
      <motion.h2
        className="text-4xl font-bold text-center mb-10 text-navy-blue"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills & Tech Stack
      </motion.h2>
      <div className="max-w-4xl mx-auto bg-glassmorphism p-8 rounded-lg">
        <div className="flex flex-wrap justify-center mb-8">
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              className={`m-2 px-4 py-2 rounded ${
                activeCategory === category ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-300"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skillCategories[activeCategory].map((skill, index) => (
            <motion.div
              key={skill.name}
              className="relative p-4 bg-gray-800 rounded-lg cursor-pointer flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <h3 className="text-lg font-semibold text-center">{skill.name}</h3>
              {hoveredSkill === skill.name && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-90 rounded-lg">
                  <p className="text-sm text-center p-2">{getSkillDescription(skill.name)}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function getSkillDescription(skill: string): string {
  const descriptions: { [key: string]: string } = {
    Python: "Versatile programming language used for AI, web development, and data analysis.",
    "C++": "High-performance language for system/application development and competitive programming.",
    Java: "Object-oriented language for building large-scale enterprise applications.",
    JavaScript: "Essential language for front-end and back-end web development.",
    SQL: "Query language for managing and manipulating relational databases.",
    "React.js": "Popular JavaScript library for building user interfaces and single-page applications.",
    "Next.js": "React framework for production-grade applications with server-side rendering.",
    "Node.js": "JavaScript runtime for building scalable network applications.",
    Flask: "Lightweight Python web framework for building web applications.",
    TensorFlow: "Open-source library for machine learning and artificial intelligence.",
    PyTorch: "Open-source machine learning library for applications such as computer vision and NLP.",
    "Scikit-learn": "Machine learning library for classical ML algorithms and data mining.",
    Pandas: "Data manipulation and analysis library for Python.",
    NumPy: "Fundamental package for scientific computing with Python.",
    OpenAI: "AI research laboratory consisting of advanced language models and APIs.",
    Docker: "Platform for developing, shipping, and running applications in containers.",
    "GitHub Actions": "CI/CD platform integrated with GitHub repositories.",
    Postman: "API development and testing tool.",
    GitHub: "Version control and collaboration platform for software development.",
    Render: "Cloud platform for hosting and scaling web applications.",
    Netlify: "Platform for automating modern web projects and hosting static websites.",
    Firebase: "Google's mobile and web application development platform.",
    Jenkins: "Open-source automation server for building, deploying, and automating software projects.",
    GitLab:
      "Web-based DevOps lifecycle tool providing a Git repository manager with wiki, issue tracking, and CI/CD pipeline features.",
  }
  return (
    descriptions[skill] ||
    `${skill} is a key technology in my toolkit, enabling me to build robust and efficient solutions.`
  )
}
