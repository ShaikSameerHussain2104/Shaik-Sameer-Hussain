// import Hero from "@/components/Hero"
// import About from "@/components/About"
// import Skills from "@/components/Skills"
// import Projects from "@/components/Projects"
// import Achievements from "@/components/Achievements"
// import Experience from "@/components/Experience"
// import Contact from "@/components/Contact"
// import DynamicBackground from "@/components/DynamicBackground"

// export default function Home() {
//   return (
//     <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-black">
//       <DynamicBackground />
//       <Hero />
//       <About />
//       <Skills />
//       <Projects />
//       <Achievements />
//       <Experience />
//       <Contact />
//     </main>
//   )
// }

"use client";

import { useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import DynamicBackground from "@/components/DynamicBackground";

export default function Home() {
  useEffect(() => {
    const notifyVisit = async () => {
      try {
        const response = await fetch("/api/contact/visit", {
          method: "GET",
          credentials: "include", // Ensure cookies/sessions are included if needed
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        console.log("Visit notification sent!");
      } catch (error) {
        console.error("Failed to send visit notification:", error);
      }
    };

    notifyVisit();
  }, []);

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
  );
}
