// "use client"

// import { useState, useEffect, useRef } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { Menu, X, Command } from "lucide-react"
// import Link from "next/link"

// const navItems = [
//   { name: "About", href: "#about" },
//   { name: "Skills", href: "#skills" },
//   { name: "Projects", href: "#projects" },
//   { name: "Achievements", href: "#achievements" },
//   { name: "Experience", href: "#experience" },
//   { name: "Contact", href: "#contact" },
// ]

// export default function Navigation() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const [showCommandBar, setShowCommandBar] = useState(false)
//   const [commandInput, setCommandInput] = useState("")
//   const commandInputRef = useRef<HTMLInputElement>(null)

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20)
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
//     e.preventDefault()
//     const target = document.querySelector(href)
//     if (target) {
//       target.scrollIntoView({ behavior: "smooth" })
//     }
//     setIsOpen(false)
//   }

//   const toggleCommandBar = () => {
//     setShowCommandBar(!showCommandBar)
//     if (!showCommandBar) {
//       setTimeout(() => commandInputRef.current?.focus(), 100)
//     }
//   }

//   const handleCommandSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     const targetSection = navItems.find((item) => item.name.toLowerCase() === commandInput.toLowerCase())
//     if (targetSection) {
//       const target = document.querySelector(targetSection.href)
//       if (target) {
//         target.scrollIntoView({ behavior: "smooth" })
//       }
//     }
//     setCommandInput("")
//     setShowCommandBar(false)
//   }

//   return (
//     <>
//       <nav
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black bg-opacity-80 backdrop-blur-lg" : ""}`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               className="flex items-center"
//             >
//               <Link href="#" className="text-white text-xl font-bold">
//                 Shaik Sameer Hussain
//               </Link>
//             </motion.div>
//             <div className="hidden md:block">
//               <div className="ml-10 flex items-baseline space-x-4">
//                 {navItems.map((item, index) => (
//                   <motion.div
//                     key={item.name}
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                   >
//                     <Link
//                       href={item.href}
//                       className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out"
//                       onClick={(e) => handleClick(e, item.href)}
//                     >
//                       {item.name}
//                     </Link>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//             <div className="flex items-center">
//               <button
//                 onClick={toggleCommandBar}
//                 className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//               >
//                 <Command className="h-6 w-6" />
//               </button>
//               <div className="md:hidden ml-2">
//                 <button
//                   onClick={() => setIsOpen(!isOpen)}
//                   className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//                 >
//                   {isOpen ? (
//                     <X className="block h-6 w-6" aria-hidden="true" />
//                   ) : (
//                     <Menu className="block h-6 w-6" aria-hidden="true" />
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         <AnimatePresence>
//           {isOpen && (
//             <motion.div
//               initial={{ opacity: 0, x: -300 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -300 }}
//               transition={{ duration: 0.3 }}
//               className="md:hidden bg-black bg-opacity-90 backdrop-blur-lg fixed top-16 left-0 bottom-0 w-64 overflow-y-auto"
//             >
//               <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//                 {navItems.map((item) => (
//                   <Link
//                     key={item.name}
//                     href={item.href}
//                     className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                     onClick={(e) => handleClick(e, item.href)}
//                   >
//                     {item.name}
//                   </Link>
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>

//       <AnimatePresence>
//         {showCommandBar && (
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -50 }}
//             className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 w-96 bg-gray-800 rounded-lg shadow-lg"
//           >
//             <form onSubmit={handleCommandSubmit} className="flex items-center p-2">
//               <Command className="h-5 w-5 text-gray-400 mr-2" />
//               <input
//                 ref={commandInputRef}
//                 type="text"
//                 value={commandInput}
//                 onChange={(e) => setCommandInput(e.target.value)}
//                 placeholder="Type a command (e.g., 'projects')"
//                 className="flex-1 bg-transparent border-none focus:outline-none text-white"
//               />
//             </form>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }





//working WAY but not for the mobile view

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X, Command } from "lucide-react";
// import Link from "next/link";

// const navItems = [
//   { name: "About", href: "#about" },
//   { name: "Skills", href: "#skills" },
//   { name: "Projects", href: "#projects" },
//   { name: "Achievements", href: "#achievements" },
//   { name: "Experience", href: "#experience" },
//   { name: "Contact", href: "#contact" },
// ];

// export default function Navigation() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [showCommandBar, setShowCommandBar] = useState(false);
//   const [commandInput, setCommandInput] = useState("");
//   const [hoveredItem, setHoveredItem] = useState<string | null>(null);  // Corrected type here

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
//     e.preventDefault();
//     const target = document.querySelector(href);
//     if (target) {
//       target.scrollIntoView({ behavior: "smooth" });
//     }
//     setIsOpen(false);
//   };

//   const toggleCommandBar = () => {
//     setShowCommandBar(!showCommandBar);
//   };

//   return (
//     <>
//       <nav
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black bg-opacity-80 backdrop-blur-lg" : ""}`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               className="flex items-center"
//             >
//               <Link href="#" className="text-white text-xl font-bold">
//                 Shaik Sameer Hussain
//               </Link>
//             </motion.div>
//             <div className="hidden md:block">
//               <div className="ml-10 flex items-baseline space-x-4">
//                 {navItems.map((item, index) => (
//                   <motion.div
//                     key={item.name}
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                     onHoverStart={() => setHoveredItem(item.name)}
//                     onHoverEnd={() => setHoveredItem(null)}
//                   >
//                     <Link
//                       href={item.href}
//                       className="text-gray-300 hover:text-[#6546ba] px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out relative"
//                       onClick={(e) => handleClick(e, item.href)}
//                     >
//                       <span className="nav-link-text">
//                         {item.name.split("").map((letter, index) => (
//                           <motion.span
//                             key={index}
//                             initial={{ rotate: 0 }}
//                             animate={
//                               hoveredItem === item.name
//                                 ? { rotate: 360, transition: { duration: 0.6, delay: index * 0.1 } }
//                                 : {}
//                             }
//                             className="inline-block"
//                           >
//                             {letter}
//                           </motion.span>
//                         ))}
//                       </span>
//                     </Link>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//             <div className="flex items-center">
//               <button
//                 onClick={toggleCommandBar}
//                 className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//               >
//                 <Command className="h-6 w-6" />
//               </button>
//               <div className="md:hidden ml-2">
//                 <button
//                   onClick={() => setIsOpen(!isOpen)}
//                   className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//                 >
//                   {isOpen ? (
//                     <X className="block h-6 w-6" aria-hidden="true" />
//                   ) : (
//                     <Menu className="block h-6 w-6" aria-hidden="true" />
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         <AnimatePresence>
//           {isOpen && (
//             <motion.div
//               initial={{ opacity: 0, x: -300 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -300 }}
//               transition={{ duration: 0.3 }}
//               className="md:hidden bg-black bg-opacity-90 backdrop-blur-lg fixed top-16 left-0 bottom-0 w-64 overflow-y-auto"
//             >
//               <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//                 {navItems.map((item) => (
//                   <Link
//                     key={item.name}
//                     href={item.href}
//                     className="text-gray-300 hover:text-[#6546ba] block px-3 py-2 rounded-md text-base font-medium"
//                     onClick={(e) => handleClick(e, item.href)}
//                   >
//                     {item.name}
//                   </Link>
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>

//       <AnimatePresence>
//         {showCommandBar && (
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -50 }}
//             className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 w-96 bg-gray-800 rounded-lg shadow-lg"
//           >
//             <form onSubmit={(e) => e.preventDefault()} className="flex items-center p-2">
//               <Command className="h-5 w-5 text-gray-400 mr-2" />
//               <input
//                 type="text"
//                 value={commandInput}
//                 onChange={(e) => setCommandInput(e.target.value)}
//                 placeholder="Type a command (e.g., 'projects')"
//                 className="flex-1 bg-transparent border-none focus:outline-none text-white"
//               />
//             </form>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }



//TRIAL 1

// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X, Command } from "lucide-react";
// import Link from "next/link";

// const navItems = [
//   { name: "About", href: "#about" },
//   { name: "Skills", href: "#skills" },
//   { name: "Projects", href: "#projects" },
//   { name: "Achievements", href: "#achievements" },
//   { name: "Experience", href: "#experience" },
//   { name: "Contact", href: "#contact" },
// ];

// export default function Navigation() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [showCommandBar, setShowCommandBar] = useState(false);
//   const [commandInput, setCommandInput] = useState("");
//   const [hoveredItem, setHoveredItem] = useState<string | null>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
//     e.preventDefault();
//     const target = document.querySelector(href);
//     if (target) {
//       target.scrollIntoView({ behavior: "smooth" });
//     }
//     setIsOpen(false);
//   };

//   const toggleCommandBar = () => {
//     setShowCommandBar(!showCommandBar);
//   };

//   return (
//     <>
//       <nav
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black bg-opacity-80 backdrop-blur-lg" : ""}`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               className="flex items-center"
//             >
//               <Link href="#" className="text-white text-xl font-bold">
//                 Shaik Sameer Hussain
//               </Link>
//             </motion.div>
//             <div className="hidden md:block">
//               <div className="ml-10 flex items-baseline space-x-4">
//                 {navItems.map((item, index) => (
//                   <motion.div
//                     key={item.name}
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                     onMouseEnter={() => setHoveredItem(item.name)}
//                     onMouseLeave={() => setHoveredItem(null)}
//                   >
//                     <Link
//                       href={item.href}
//                       className="text-gray-300 hover:text-[#6546ba] px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out relative"
//                       onClick={(e) => handleClick(e, item.href)}
//                     >
//                       <span className="nav-link-text">
//                         {item.name.split("").map((letter, index) => (
//                           <motion.span
//                             key={index}
//                             initial={{ rotate: 0 }}
//                             animate={
//                               hoveredItem === item.name
//                                 ? { rotate: 360, transition: { duration: 0.6, delay: index * 0.1 } }
//                                 : {}
//                             }
//                             className="inline-block"
//                           >
//                             {letter}
//                           </motion.span>
//                         ))}
//                       </span>
//                     </Link>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//             <div className="flex items-center">
//               <button
//                 onClick={toggleCommandBar}
//                 className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//               >
//                 <Command className="h-6 w-6" />
//               </button>
//               <div className="md:hidden ml-2">
//                 <button
//                   onClick={() => setIsOpen(!isOpen)}
//                   className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//                 >
//                   {isOpen ? (
//                     <X className="block h-6 w-6" aria-hidden="true" />
//                   ) : (
//                     <Menu className="block h-6 w-6" aria-hidden="true" />
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         <AnimatePresence>
//           {isOpen && (
//             <motion.div
//               initial={{ opacity: 0, x: -300 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -300 }}
//               transition={{ duration: 0.3 }}
//               className="md:hidden bg-black bg-opacity-90 backdrop-blur-lg fixed top-16 left-0 bottom-0 w-64 overflow-y-auto"
//             >
//               <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//                 {navItems.map((item) => (
//                   <Link
//                     key={item.name}
//                     href={item.href}
//                     className="text-gray-300 hover:text-[#6546ba] block px-3 py-2 rounded-md text-base font-medium"
//                     onClick={(e) => handleClick(e, item.href)}
//                   >
//                     {item.name}
//                   </Link>
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>

//       <AnimatePresence>
//         {showCommandBar && (
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -50 }}
//             className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 w-96 bg-gray-800 rounded-lg shadow-lg"
//           >
//             <form onSubmit={(e) => e.preventDefault()} className="flex items-center p-2">
//               <Command className="h-5 w-5 text-gray-400 mr-2" />
//               <input
//                 type="text"
//                 value={commandInput}
//                 onChange={(e) => setCommandInput(e.target.value)}
//                 placeholder="Type a command (e.g., 'projects')"
//                 className="flex-1 bg-transparent border-none focus:outline-none text-white"
//               />
//             </form>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }


//TRIAL 2

// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X, Command, Search } from "lucide-react";
// import Link from "next/link";

// const navItems = [
//   { name: "About", href: "#about" },
//   { name: "Skills", href: "#skills" },
//   { name: "Projects", href: "#projects" },
//   { name: "Achievements", href: "#achievements" },
//   { name: "Experience", href: "#experience" },
//   { name: "Contact", href: "#contact" },
// ];

// export default function Navigation() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [showCommandBar, setShowCommandBar] = useState(false);
//   const [commandInput, setCommandInput] = useState("");
//   const [filteredItems, setFilteredItems] = useState(navItems);
//   const [hoveredItem, setHoveredItem] = useState<string | null>(null);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     setFilteredItems(
//       commandInput.trim()
//         ? navItems.filter((item) =>
//             item.name.toLowerCase().includes(commandInput.toLowerCase())
//           )
//         : navItems
//     );
//   }, [commandInput]);

//   const handleClick = (
//     e: React.MouseEvent<HTMLAnchorElement>,
//     href: string
//   ) => {
//     e.preventDefault();
//     document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
//     setIsOpen(false);
//     setShowCommandBar(false);
//   };

//   const handleSearchSelect = (href: string) => {
//     document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
//     setShowCommandBar(false);
//     setCommandInput("");
//   };

//   return (
//     <>
//       <nav
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           scrolled ? "bg-black bg-opacity-80 backdrop-blur-lg" : ""
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               className="flex items-center"
//             >
//               <Link href="#" className="text-white text-xl font-bold">
//                 Shaik Sameer Hussain
//               </Link>
//             </motion.div>
//             <div className="hidden md:block">
//               <div className="ml-10 flex items-baseline space-x-4">
//                 {navItems.map((item, index) => (
//                   <motion.div
//                     key={item.name}
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                     onMouseEnter={() => setHoveredItem(item.name)}
//                     onMouseLeave={() => setHoveredItem(null)}
//                   >
//                     <Link
//                       href={item.href}
//                       className="text-gray-300 hover:text-[#6546ba] px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out relative"
//                       onClick={(e) => handleClick(e, item.href)}
//                     >
//                       <span className="nav-link-text">
//                         {item.name.split("").map((letter, idx) => (
//                           <motion.span
//                             key={idx}
//                             initial={{ rotate: 0 }}
//                             animate={
//                               hoveredItem === item.name
//                                 ? { rotate: 360, transition: { duration: 0.6, delay: idx * 0.1 } }
//                                 : {}
//                             }
//                             className="inline-block"
//                           >
//                             {letter}
//                           </motion.span>
//                         ))}
//                       </span>
//                     </Link>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//             <div className="flex items-center">
//               <button
//                 onClick={() => setShowCommandBar(!showCommandBar)}
//                 className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
//               >
//                 <Command className="h-6 w-6" />
//               </button>
//               <div className="md:hidden ml-2">
//                 <button
//                   onClick={() => setIsOpen(!isOpen)}
//                   className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
//                 >
//                   {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         <AnimatePresence>
//           {isOpen && (
//             <motion.div
//               initial={{ opacity: 0, x: -300 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -300 }}
//               transition={{ duration: 0.3 }}
//               className="md:hidden bg-black bg-opacity-90 backdrop-blur-lg fixed top-16 left-0 bottom-0 w-64 overflow-y-auto"
//             >
//               <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//                 {navItems.map((item) => (
//                   <Link
//                     key={item.name}
//                     href={item.href}
//                     className="text-gray-300 hover:text-[#6546ba] block px-3 py-2 rounded-md text-base font-medium"
//                     onClick={(e) => handleClick(e, item.href)}
//                   >
//                     {item.name}
//                   </Link>
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>

//       <AnimatePresence>
//         {showCommandBar && (
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -50 }}
//             className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 w-96 bg-gray-800 rounded-lg shadow-lg p-4"
//           >
//             <div className="flex items-center border-b border-gray-600 pb-2">
//               <Search className="h-5 w-5 text-gray-400 mr-2" />
//               <input
//                 type="text"
//                 value={commandInput}
//                 onChange={(e) => setCommandInput(e.target.value)}
//                 placeholder="Search sections (e.g., 'projects')"
//                 className="flex-1 bg-transparent border-none focus:outline-none text-white placeholder-gray-500"
//               />
//             </div>
//             <div className="mt-2">
//               {filteredItems.length > 0 ? (
//                 filteredItems.map((item) => (
//                   <button
//                     key={item.name}
//                     className="w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition"
//                     onClick={() => handleSearchSelect(item.href)}
//                   >
//                     {item.name}
//                   </button>
//                 ))
//               ) : (
//                 <p className="text-gray-500 text-center py-2">No matches found.</p>
//               )}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }


//TRIAL 3

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Command, Search } from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showCommandBar, setShowCommandBar] = useState(false);
  const [commandInput, setCommandInput] = useState("");
  const [filteredItems, setFilteredItems] = useState(navItems);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setFilteredItems(
      commandInput.trim()
        ? navItems.filter((item) =>
            item.name.toLowerCase().includes(commandInput.toLowerCase())
          )
        : navItems
    );
  }, [commandInput]);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
    setShowCommandBar(false);
  };

  const handleSearchSelect = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setShowCommandBar(false);
    setCommandInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && filteredItems.length > 0) {
      handleSearchSelect(filteredItems[0].href); // Automatically select the first filtered item
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black bg-opacity-80 backdrop-blur-lg" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <Link href="#" className="text-white text-xl font-bold">
                Shaik Sameer Hussain
              </Link>
            </motion.div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-[#6546ba] px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out relative"
                      onClick={(e) => handleClick(e, item.href)}
                    >
                      <span className="nav-link-text">
                        {item.name.split("").map((letter, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ rotate: 0 }}
                            animate={
                              hoveredItem === item.name
                                ? { rotate: 360, transition: { duration: 0.6, delay: idx * 0.1 } }
                                : {}
                            }
                            className="inline-block"
                          >
                            {letter}
                          </motion.span>
                        ))}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => setShowCommandBar(!showCommandBar)}
                className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                <Command className="h-6 w-6" />
              </button>
              <div className="md:hidden ml-2">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black bg-opacity-90 backdrop-blur-lg fixed top-16 left-0 bottom-0 w-64 overflow-y-auto"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-[#6546ba] block px-3 py-2 rounded-md text-base font-medium"
                    onClick={(e) => handleClick(e, item.href)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AnimatePresence>
        {showCommandBar && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 w-96 bg-gray-800 rounded-lg shadow-lg p-4"
          >
            <div className="flex items-center border-b border-gray-600 pb-2">
              <Search className="h-5 w-5 text-gray-400 mr-2" />
              <input
                type="text"
                value={commandInput}
                onChange={(e) => setCommandInput(e.target.value)}
                onKeyDown={handleKeyDown} // Added keydown event listener
                placeholder="Search sections (e.g., 'projects')"
                className="flex-1 bg-transparent border-none focus:outline-none text-white placeholder-gray-500"
              />
            </div>
            <div className="mt-2">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <button
                    key={item.name}
                    className="w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition"
                    onClick={() => handleSearchSelect(item.href)}
                  >
                    {item.name}
                  </button>
                ))
              ) : (
                <p className="text-gray-500 text-center py-2">No matches found.</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
