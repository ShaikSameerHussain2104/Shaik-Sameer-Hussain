"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import Timeline from "./Timeline"
import AIChat from "./AIChat"

export default function About() {
  const [showChat, setShowChat] = useState(false)

  return (
    <section id="about" className="py-20 px-4">
      <motion.h2
        className="text-4xl font-bold text-center mb-10 text-navy-blue"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      <div className="max-w-4xl mx-auto bg-glassmorphism p-8 rounded-lg">
        <motion.h3
          className="text-2xl font-semibold mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Shaik Sameer Hussain
        </motion.h3>
        <motion.p
          className="mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          B.Tech in Computer Science, CMR Technical Campus
        </motion.p>
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <TypeAnimation
            sequence={[
              "Python Developer",
              1000,
              "C++ Programmer",
              1000,
              "Java Programmer",
              1000,
              "Web Developer",
              1000,
              "AI/ML Enthusiast",
              1000,
              "DevOps Specialist",
              1000,
              "Database Management",
              1000,
            ]}
            wrapper="div"
            cursor={true}
            repeat={Number.POSITIVE_INFINITY}
            style={{ fontSize: "1.2em", fontWeight: "bold" }}
          />
        </motion.div>
        <Timeline />
        <motion.button
          className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowChat(!showChat)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Chat with AI Assistant
        </motion.button>
        {showChat && <AIChat />}
      </div>
    </section>
  )
}

