"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaTrophy, FaCogs, FaMedal, FaFlagCheckered, FaAward } from "react-icons/fa"

// Define the type for Achievement
interface Achievement {
  title: string
  description: string
  story: string
  icon: JSX.Element
  progress: number
}

const achievements: Achievement[] = [
  {
    title: "CodeChef Two-Star Coder",
    description: "350+ problems solved on CodeChef platform.",
    story:
      "Started competitive programming in 2021 and consistently solved problems to achieve the Two-Star Coder status.",
    icon: <FaTrophy className="text-3xl text-yellow-500" />,
    progress: 80,
  },
  {
    title: "LeetCode Rating: 1500+",
    description: "Demonstrated strong problem-solving skills on LeetCode platform.",
    story:
      "Dedicated countless hours to solving complex algorithmic problems, improving my rating from 800 to over 1500 in just 6 months.",
    icon: <FaCogs className="text-3xl text-blue-500" />,
    progress: 90,
  },
  {
    title: "Smart India Hackathon Winner",
    description: "Won at the college level in the Smart India Hackathon.",
    story:
      "Led a team of 6 to develop an innovative solution for teaching constitution in a simpler manner, beating 20 other teams at college level.",
    icon: <FaMedal className="text-3xl text-green-500" />,
    progress: 100,
  },
  {
    title: "Top 10 Finish in Hackers Meetup CTF",
    description: "Secured a top 10 position in the Capture The Flag competition.",
    story:
      "Solved a series of challenging cybersecurity puzzles, web exploitation etc.",
    icon: <FaFlagCheckered className="text-3xl text-red-500" />,
    progress: 75,
  },
  {
    title: "Multiple Hackathon Prizes",
    description: "Won prizes in HackTheRevolution and HackTheVerse.",
    story:
      "Developed innovative projects under tight deadlines, including a Virtual AI assistant which automates task and perform actions with just simple voice commands.",
    icon: <FaAward className="text-3xl text-purple-500" />,
    progress: 85,
  },
  {
    title: "College-Level Project Expo Winner",
    description: "First place in the college project exhibition.",
    story:
      "Developed a Virtual AI assistant which automates task and perform actions with just simple voice commands, impressing the judges and winning the first place.",
    icon: <FaTrophy className="text-3xl text-yellow-500" />,
    progress: 100,
  },
]

export default function Achievements() {
  // Define state with Achievement or null
  const [activeAchievement, setActiveAchievement] = useState<Achievement | null>(null)

  return (
    <section id="achievements" className="py-20 px-4 bg-gray-900">
      <motion.h2
        className="text-4xl font-bold text-center mb-10 text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Achievements & Recognitions
      </motion.h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            className="bg-gray-800 p-6 rounded-lg shadow-xl cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setActiveAchievement(activeAchievement === achievement ? null : achievement)}
          >
            <div className="flex justify-center mb-4">{achievement.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">{achievement.title}</h3>
            <p className="text-sm text-gray-400">{achievement.description}</p>
            <div className="mt-4 w-full bg-gray-600 h-2 rounded-full">
              <div
                className="bg-blue-500 h-full rounded-full"
                style={{ width: `${achievement.progress}%` }}
              ></div>
            </div>
          </motion.div>
        ))}
      </div>

      {activeAchievement && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="bg-gray-800 p-8 rounded-lg max-w-md w-full">
            <h3 className="text-2xl font-semibold text-white mb-4">{activeAchievement.title}</h3>
            <div className="flex justify-center mb-4">{activeAchievement.icon}</div>
            <p className="text-white mb-4">{activeAchievement.description}</p>
            <p className="text-gray-400 mb-4">{activeAchievement.story}</p>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => setActiveAchievement(null)}
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </section>
  )
}
