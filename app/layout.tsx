// import "./globals.css";
// import type React from "react";
// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";
// import DynamicBackground from "@/components/DynamicBackground";
// import Image from "next/image";  // Import the Image component
// import Head from "next/head";

// export const metadata = {
//   title: "Shaik Sameer Hussain",
//   description: "AI, DevOps, Web Development, and Competitive Programming Expert",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className="scroll-smooth">
//       <Head>
//         <link
//           rel="icon"
//           href="https://live.staticflickr.com/65535/54301733371_67afcb5230_b.jpg"
//         />
//       </Head>
//       <body className="bg-black text-white min-h-screen flex flex-col">
//         <DynamicBackground />
//         <Navigation />
//         <main className="flex-grow">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }


/// First Music running
// "use client";
// import "./globals.css";
// import type React from "react";
// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";
// import DynamicBackground from "@/components/DynamicBackground";
// import { useEffect, useRef } from "react";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const audioRef = useRef<HTMLAudioElement | null>(null);

//   useEffect(() => {
//     const enableAudio = () => {
//       if (audioRef.current) {
//         audioRef.current.muted = false;
//         audioRef.current.volume = 0.5;
//         audioRef.current.play().catch((err) => {
//           console.error("Audio playback error:", err);
//         });
//       }
//       document.removeEventListener("click", enableAudio);
//       document.removeEventListener("touchstart", enableAudio);
//     };

//     document.addEventListener("click", enableAudio, { once: true });
//     document.addEventListener("touchstart", enableAudio, { once: true });

//     return () => {
//       document.removeEventListener("click", enableAudio);
//       document.removeEventListener("touchstart", enableAudio);
//     };
//   }, []);

//   return (
//     <html lang="en" className="scroll-smooth">
//       <body className="bg-black text-white min-h-screen flex flex-col">
//         <audio ref={audioRef} src="/audio/welcome.wav" autoPlay muted />
//         <DynamicBackground />
//         <Navigation />
//         <main className="flex-grow">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }


// layout.tsx
// "use client";

// import "./globals.css";
// import type React from "react";
// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";
// import DynamicBackground from "@/components/DynamicBackground";
// import { useEffect, useRef } from "react";
// import Head from "next/head";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const audioRef = useRef<HTMLAudioElement | null>(null);

//   // Function to play the audio
//   const playAudio = () => {
//     if (audioRef.current) {
//       audioRef.current.muted = false;
//       audioRef.current.volume = 1;
//       audioRef.current.play().catch((err) => {
//         console.error("Audio playback error:", err);
//       });
//     }
//   };

//   useEffect(() => {
//     // Attach event listeners to handle interaction for audio play
//     const enableAudio = () => {
//       playAudio();
//       document.removeEventListener("click", enableAudio);
//       document.removeEventListener("touchstart", enableAudio);
//     };

//     document.addEventListener("click", enableAudio, { once: true });
//     document.addEventListener("touchstart", enableAudio, { once: true });

//     return () => {
//       document.removeEventListener("click", enableAudio);
//       document.removeEventListener("touchstart", enableAudio);
//     };
//   }, []);

//   return (
//     <html lang="en" className="scroll-smooth">
//       <Head>
//         {/* Meta Data */}
//         <meta name="description" content="AI, DevOps, Web Development, and Competitive Programming Expert" />
//         <meta name="title" content="Shaik Sameer Hussain" />
        
//         {/* Favicon */}
//         <link
//           rel="icon"
//           href="https://live.staticflickr.com/65535/54301733371_67afcb5230_b.jpg"
//         />
//       </Head>
//       <body className="bg-black text-white min-h-screen flex flex-col">
//         {/* Audio element to play the sound */}
//         <audio ref={audioRef} src="/audio/welcome.wav" autoPlay muted />
//         <DynamicBackground />
//         <Navigation />
//         <main className="flex-grow">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }



//THIRD MUSIC RUNNING

"use client";

import "./globals.css";
import type React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DynamicBackground from "@/components/DynamicBackground";
import { useEffect, useRef } from "react";
import Head from "next/head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Function to play the audio
  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.muted = false; // Unmute audio
      audioRef.current.volume = 1; // Set the audio volume
      audioRef.current.play().catch((err) => {
        console.error("Audio playback error:", err);
      });
    }
  };

  useEffect(() => {
    // Debugging: log when the script loads
    console.log("Audio play attempt");

    // Attach event listeners to handle interaction for audio play
    const enableAudio = () => {
      console.log("User interaction detected, playing audio...");
      playAudio();
      document.removeEventListener("click", enableAudio);
      document.removeEventListener("touchstart", enableAudio);
    };

    // Event listeners for mobile (touchstart) and desktop (click)
    document.addEventListener("click", enableAudio, { once: true });
    document.addEventListener("touchstart", enableAudio, { once: true });

    return () => {
      document.removeEventListener("click", enableAudio);
      document.removeEventListener("touchstart", enableAudio);
    };
  }, []);

  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        {/* Meta Data */}
        <meta name="description" content="AI, DevOps, Web Development, and Competitive Programming Expert" />
        <meta name="title" content="Shaik Sameer Hussain" />
        
        {/* Favicon */}
        <link
          rel="icon"
          href="https://live.staticflickr.com/65535/54301733371_67afcb5230_b.jpg"
        />
      </Head>
      <body className="bg-black text-white min-h-screen flex flex-col">
        {/* Audio element to play the sound */}
        <audio ref={audioRef} src="/audio/welcome.wav" autoPlay muted />
        <DynamicBackground />
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
