import "./globals.css"
import type React from "react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import DynamicBackground from "@/components/DynamicBackground"
import Head from "next/head"

export const metadata = {
  title: "Shaik Sameer Hussain",
  description: "AI, DevOps, Web Development, and Competitive Programming Expert",
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        <link
          rel="icon"
          type="image/jpg"
          sizes="32x32"
          href="https://live.staticflickr.com/65535/54301733371_67afcb5230_b.jpg"
        />
      </Head>
      <body className="bg-black text-white min-h-screen flex flex-col">
        <DynamicBackground />
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

