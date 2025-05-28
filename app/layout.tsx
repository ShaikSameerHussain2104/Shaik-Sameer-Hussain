"use client";

import "./globals.css";
import type React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DynamicBackground from "@/components/DynamicBackground";
import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { useIsMobile } from "@/hooks/use-mobile";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isAudioPlayed, setIsAudioPlayed] = useState(false);
  const isMobile = useIsMobile();

  const playAudio = () => {
    if (!isAudioPlayed && audioRef.current) {
      audioRef.current.muted = false;
      audioRef.current.volume = 1;
      audioRef.current.play().catch(console.error);
      setIsAudioPlayed(true);
    }
  };

  useEffect(() => {
    if (!isAudioPlayed) {
      const listener = () => playAudio();
      (isMobile ? document.body : document).addEventListener("click", listener, { once: true });
      return () => {
        (isMobile ? document.body : document).removeEventListener("click", listener);
      };
    }
  }, [isAudioPlayed, isMobile]);

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="description" content="AI, DevOps, Web Development, and Competitive Programming Expert" />
        <meta name="title" content="Shaik Sameer Hussain" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-black text-white min-h-screen flex flex-col">
        <audio ref={audioRef} src="/audio/welcome.wav" autoPlay muted />

        <DynamicBackground />
        <Navigation />

        <main className="flex-grow">
          {children}

          {/* ✅ Insert native ad in the middle (customize as needed) */}
          
        </main>

        <Footer />

        
      </body>
    </html>
  );
}
