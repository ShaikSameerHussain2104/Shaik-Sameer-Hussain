"use client"

import { motion } from "framer-motion"

const timelineEvents = [
  { year: 2022, event: "Started learning programming" },
  { year: 2023, event: "Started doing DSA and development" },
  { year: 2023, event: "Participated in first hackathon" },
  { year: 2024, event: "Built multiple projects and participated in multiple hackathons " },
]

export default function Timeline() {
  return (
    <div className="relative">
      {timelineEvents.map((event, index) => (
        <motion.div
          key={index}
          className="mb-8 flex justify-between items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="w-24 text-right">{event.year}</div>
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <div className="w-5/6 pl-4">{event.event}</div>
        </motion.div>
      ))}
    </div>
  )
}

