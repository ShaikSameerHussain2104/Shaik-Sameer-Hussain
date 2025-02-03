// "use client";

// import { useState } from "react";

// export default function AIChat() {
//   const [messages, setMessages] = useState<{ text: string; sender: "user" | "ai" }[]>([]);
//   const [input, setInput] = useState("");

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!input.trim()) return;
//     setMessages((prev) => [...prev, { text: input, sender: "user" }, { text: `You said: ${input}`, sender: "ai" }]);
//     setInput("");
//   };

  // return (
  //   <div className="mt-4 p-4 bg-gray-800 rounded-lg">
  //     <div className="h-48 overflow-y-auto mb-4">
  //       {messages.map((message, index) => (
  //         <div key={index} className={`mb-2 ${message.sender === "user" ? "text-right" : "text-left"}`}>
  //           <span className={`inline-block p-2 rounded ${message.sender === "user" ? "bg-blue-500" : "bg-green-500"}`}>
  //             {message.text}
  //           </span>
  //         </div>
  //       ))}
  //     </div>
  //     <form onSubmit={handleSubmit} className="flex">
  //       <input
  //         type="text"
  //         value={input}
  //         onChange={(e) => setInput(e.target.value)}
  //         className="flex-grow p-2 rounded-l text-black"
  //         placeholder="Ask me anything..."
  //       />
  //       <button type="submit" className="bg-blue-500 text-white p-2 rounded-r">
  //         Send
  //       </button>
  //     </form>
  //   </div>
  // );
// }


//TRIAL -1

// "use client";

// import { useState, useEffect, useRef } from "react";

// export default function AIChat() {
//   const [messages, setMessages] = useState<{ text: string; sender: "user" | "ai" }[]>([]);
//   const [input, setInput] = useState("");

//   // Ref to scroll to the latest message
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   const bossData = {
//     about: "Sameer Hussain is an outstanding web developer and AI enthusiast, excelling in both development and competitive programming. He is currently pursuing a B.Tech degree at CMR Technical Campus with an impressive GPA of 9.4/10.",
//     skills: "Sameer is highly proficient in a variety of technologies including React, Node.js, Flask, MySQL, Python, Java, C++, and more. His ability to learn and apply new technologies quickly is truly commendable.",
//     projects: "Sameer has developed remarkable projects like 'JARVIS-2.0', a Python-based voice assistant, and 'DevOps CodeSmith', a tool for generating multi-language code. These projects highlight his deep technical knowledge and innovative thinking.",
//     achievements: "Sameer is a CodeChef 2-star coder and has achieved a 1500+ rating on LeetCode, showcasing his strong problem-solving skills. He was also part of a winning team in the Smart India Hackathon at the college level.",
//     experience: "Sameer has gained valuable industry experience as an intern at Keshavsoft, where he contributed to various projects. He also worked as a code reviewer at Outlier.ai, where his attention to detail and deep knowledge stood out.",
//     contact: "Sameer can be contacted through LinkedIn (https://www.linkedin.com/in/shaik-sameer-hussain-b88323250/) or GitHub (https://github.com/Sameerq7/). His professional network is a testament to his collaborative and driven nature.",
//     appreciation: "Sameer consistently demonstrates an excellent work ethic, creativity, and dedication to his craft. His contributions are invaluable to any team, and his potential for future growth is limitless.",
//     additional: "Sameer’s passion for AI and machine learning is evident in his numerous contributions to open-source projects and his continuous pursuit of knowledge. His ambition and drive make him a standout individual."
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     // Normalize input and match with appropriate responses
//     const normalizedInput = input.toLowerCase();
//     let aiResponse = "Sorry, I don't have information on that.";

//     if (normalizedInput.includes("about")) {
//       aiResponse = `Sameer’s background is impressive. ${bossData.about}`;
//     } else if (normalizedInput.includes("skills")) {
//       aiResponse = `Sameer is a highly skilled developer. ${bossData.skills}`;
//     } else if (normalizedInput.includes("projects")) {
//       aiResponse = `Sameer has worked on amazing projects like ${bossData.projects}.`;
//     } else if (normalizedInput.includes("achievements")) {
//       aiResponse = `Sameer’s accomplishments are remarkable, including ${bossData.achievements}.`;
//     } else if (normalizedInput.includes("experience")) {
//       aiResponse = `Sameer has gained solid experience through roles at ${bossData.experience}.`;
//     } else if (normalizedInput.includes("contact")) {
//       aiResponse = `You can reach Sameer through LinkedIn or GitHub: ${bossData.contact}`;
//     } else if (normalizedInput.includes("appreciation")) {
//       aiResponse = `Sameer is truly appreciated for his ${bossData.appreciation}`;
//     } else if (normalizedInput.includes("additional") || normalizedInput.includes("passion")) {
//       aiResponse = `In addition to his skills, Sameer has a deep passion for ${bossData.additional}`;
//     }

//     // Send both user input and AI response to state
//     setMessages((prev) => [...prev, { text: input, sender: "user" }, { text: aiResponse, sender: "ai" }]);
//     setInput("");
//   };

//   // Scroll to the bottom of the messages container whenever the messages array changes
//   useEffect(() => {
//     if (messagesEndRef.current) {
//       messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [messages]);

//   return (
//     <div className="mt-4 p-4 bg-gray-800 rounded-lg">
//       <div className="h-48 overflow-y-auto mb-4">
//         {messages.map((message, index) => (
//           <div key={index} className={`mb-2 ${message.sender === "user" ? "text-right" : "text-left"}`}>
//             <span className={`inline-block p-2 rounded ${message.sender === "user" ? "bg-blue-500" : "bg-green-500"}`}>
//               {message.text}
//             </span>
//           </div>
//         ))}
//         {/* This div will be scrolled into view when a new message is added */}
//         <div ref={messagesEndRef} />
//       </div>
//       <form onSubmit={handleSubmit} className="flex">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           className="flex-grow p-2 rounded-l text-black"
//           placeholder="Ask about Sameer..."
//         />
//         <button type="submit" className="bg-blue-500 text-white p-2 rounded-r">
//           Send
//         </button>
//       </form>
//     </div>
//   );
// }


//TRIAL-3
"use client";

import { useState, useEffect, useRef } from "react";

export default function AIChat() {
  const [messages, setMessages] = useState<{ text: string; sender: "user" | "ai" }[]>([]);
  const [input, setInput] = useState("");

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const bossData = {
    about: "Sameer Hussain is an outstanding web developer and AI enthusiast, excelling in both development and competitive programming. He is currently pursuing a B.Tech degree at CMR Technical Campus with an impressive GPA of 9.4/10.",
    skills: "Sameer is highly proficient in a variety of technologies including React, Node.js, Flask, MySQL, Python, Java, C++, and more. His ability to learn and apply new technologies quickly is truly commendable.",
    projects: "Sameer has developed remarkable projects like 'JARVIS-2.0', a Python-based voice assistant, and 'DevOps CodeSmith', a tool for generating multi-language code. These projects highlight his deep technical knowledge and innovative thinking.",
    achievements: "Sameer is a CodeChef 2-star coder and has achieved a 1500+ rating on LeetCode, showcasing his strong problem-solving skills. He was also part of a winning team in the Smart India Hackathon at the college level.",
    experience: "Sameer has gained valuable industry experience as an intern at Keshavsoft, where he contributed to various projects. He also worked as a code reviewer at Outlier.ai, where his attention to detail and deep knowledge stood out.",
    contact: "Sameer can be contacted through LinkedIn (https://www.linkedin.com/in/shaik-sameer-hussain-b88323250/) or GitHub (https://github.com/Sameerq7/). His professional network is a testament to his collaborative and driven nature.",
    appreciation: "Sameer consistently demonstrates an excellent work ethic, creativity, and dedication to his craft. His contributions are invaluable to any team, and his potential for future growth is limitless.",
    additional: "Sameer’s passion for AI and machine learning is evident in his numerous contributions to open-source projects and his continuous pursuit of knowledge. His ambition and drive make him a standout individual."
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    const normalizedInput = input.toLowerCase();
    let aiResponse = "Sorry, I don't have information on that.";

    if (normalizedInput.includes("hi") || normalizedInput.includes("hello")) {
      aiResponse = "Hello sir, good afternoon! I am your AI companion. How can I help you?";
    } else if (normalizedInput.includes("how are you")) {
      aiResponse = "I am doing great, thank you! How can I assist you today?";
    } else if (normalizedInput.includes("who is your boss") || normalizedInput.includes("boss")) {
      aiResponse = "My boss is busy, but I'm here to assist you. How can I help you, sir?";
    } else if (normalizedInput.includes("about")) {
      aiResponse = `Sameer’s background is impressive. ${bossData.about}`;
    } else if (normalizedInput.includes("skills")) {
      aiResponse = `Sameer is a highly skilled developer. ${bossData.skills}`;
    } else if (normalizedInput.includes("projects")) {
      aiResponse = `Sameer has worked on amazing projects like ${bossData.projects}.`;
    } else if (normalizedInput.includes("achievements")) {
      aiResponse = `Sameer’s accomplishments are remarkable, including ${bossData.achievements}.`;
    } else if (normalizedInput.includes("experience")) {
      aiResponse = `Sameer has gained solid experience through roles at ${bossData.experience}.`;
    } else if (normalizedInput.includes("contact")) {
      aiResponse = `You can reach Sameer through LinkedIn or GitHub: ${bossData.contact}`;
    } else if (normalizedInput.includes("appreciation")) {
      aiResponse = `Sameer is truly appreciated for his ${bossData.appreciation}`;
    } else if (normalizedInput.includes("additional") || normalizedInput.includes("passion")) {
      aiResponse = `In addition to his skills, Sameer has a deep passion for ${bossData.additional}`;
    }

    setMessages((prev) => [...prev, { text: input, sender: "user" }, { text: aiResponse, sender: "ai" }]);
    setInput("");
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [messages]);

  return (
    <div className="mt-4 p-4 bg-gray-800 rounded-lg">
      <div className="h-48 overflow-y-auto mb-4">
        {messages.map((message, index) => (
          <div key={index} className={`mb-2 ${message.sender === "user" ? "text-right" : "text-left"}`}>
            <span className={`inline-block p-2 rounded ${message.sender === "user" ? "bg-blue-500" : "bg-green-500"}`}>
              {message.text}
            </span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow p-2 rounded-l text-black"
          placeholder="Ask me anything..."
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-r">
          Send
        </button>
      </form>
    </div>
  );
}
