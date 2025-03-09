"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 pt-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 flex justify-center md:justify-end"
        >
          <Image
            
            src="/favicon2.ico"
            alt="Shaik Sameer Hussain"
            width={300}
            height={300}
            priority
            className="rounded-full border-4 border-blue-500"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Shaik Sameer Hussain
          </h1>
          <div className="text-xl md:text-2xl mb-8">
            <TypeAnimation
              sequence={[
                "AI Developer",
                1000,
                "DevOps Engineer",
                1000,
                "Web Developer",
                1000,
                "Competitive Programmer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
              className="text-navy-blue"
            />
          </div>
          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            Explore My Work
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

