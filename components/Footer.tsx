import Link from "next/link"
import { GitlabIcon as GitHub, Linkedin, Twitter, Facebook, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Shaik Sameer Hussain</h3>
            <p className="text-gray-400">AI, DevOps, Web Development, and Competitive Programming Expert</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="hover:text-blue-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-blue-400 transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-blue-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/h-shaiksameer/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <GitHub className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/shaik-sameer-hussain-b88323250/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.facebook.com/shaiksameer.hussain.12"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </Link>
              <Link
                href="https://x.com/ShaikSa67284618"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.instagram.com/h_shaiksameer"
                target="_blank"
      
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Shaik Sameer Hussain. All rights reserved.</p>
        </div>
        
      </div>
    </footer>
  )
}

