import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Achievements from "@/components/Achievements"
import Experience from "@/components/Experience"
import Contact from "@/components/Contact"
import DynamicBackground from "@/components/DynamicBackground"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-black">
      <DynamicBackground />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Experience />
      <Contact />
    </main>
  )
}

