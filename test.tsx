import "./globals.css";
import type React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DynamicBackground from "@/components/DynamicBackground";
import Image from "next/image";  // Import the Image component
import Head from "next/head";

export const metadata = {
  title: "Shaik Sameer Hussain",
  description: "AI, DevOps, Web Development, and Competitive Programming Expert",
};
//src="https://live.staticflickr.com/65535/54302168675_efd163f70c_h.jpg"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        <link
        
          rel="icon"
          href="https://live.staticflickr.com/65535/54301733371_67afcb5230_b.jpg"
        />
      </Head>
      
      <body className="bg-black text-white min-h-screen flex flex-col">
        <DynamicBackground />
        <Navigation />
        {/* Optimizing the image */}
        <Image
          src="https://live.staticflickr.com/65535/54301733371_67afcb5230_b.jpg"
          alt="Favicon Image"
          width={64}  // Adjust the size as needed
          height={64} // Adjust the size as needed
          priority // This tells Next.js to prioritize this image for faster loading
        />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
