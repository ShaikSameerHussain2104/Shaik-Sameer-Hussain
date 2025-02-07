"use client";

import { useState, useEffect, useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY ?? "";
const genAI = new GoogleGenerativeAI(API_KEY);
const geminiModel = genAI.getGenerativeModel({ model: "gemini-1.5-flash-8b" });

export default function AIChat() {
  const [messages, setMessages] = useState<{ text: string; sender: "user" | "ai" }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const bossData = {
    about: "Sameer Hussain is an outstanding web developer and AI enthusiast...",
    skills: "Sameer is highly proficient in React, Node.js, Flask, MySQL, Python...",
    projects: "Sameer has developed projects like 'JARVIS-2.0' and 'DevOps CodeSmith'...",
    achievements: "Sameer is a CodeChef 2-star coder with 1500+ rating on LeetCode...",
    experience: "Sameer interned at Keshavsoft and worked as a code reviewer at Outlier.ai...",
    contact: "Reach Sameer on LinkedIn: https://linkedin.com/in/shaik-sameer-hussain-b88323250/...",
    appreciation: "Sameer is known for his dedication, creativity, and work ethic...",
    additional: "He is passionate about AI/ML and open-source contributions..."
  };

  const cleanResponse = (text: string) => {
    return text
      .replace(/[\*\#\!]/g, "")  // Remove **, ##, !
      .replace(/[\u{1F600}-\u{1F6FF}]/gu, ""); // Remove emojis
  };

  const getGeminiResponse = async (message: string) => {
    try {
      const chat = geminiModel.startChat();
      const response = await chat.sendMessage(message);
      return cleanResponse(response.response.text());
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "Sorry, I couldn't fetch a response at the moment.";
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { text: input, sender: "user" }]);
    setInput("");
    setLoading(true);

    const normalizedInput = input.toLowerCase();
    let aiResponse = "";

    if (normalizedInput.includes("hi") || normalizedInput.includes("hello")) {
      aiResponse = "Hello sir, good afternoon. I am your AI companion. How can I help you?";
    } else if (normalizedInput.includes("how are you")) {
      aiResponse = "I am doing great, thank you. How can I assist you today?";
    } else if (normalizedInput.includes("who is your boss") || normalizedInput.includes("boss")) {
      aiResponse = "My boss is busy, but I'm here to assist you. How can I help you?";
    } else if (normalizedInput.includes("about")) {
      aiResponse = bossData.about;
    } else if (normalizedInput.includes("skills")) {
      aiResponse = bossData.skills;
    } else if (normalizedInput.includes("projects")) {
      aiResponse = bossData.projects;
    } else if (normalizedInput.includes("achievements")) {
      aiResponse = bossData.achievements;
    } else if (normalizedInput.includes("experience")) {
      aiResponse = bossData.experience;
    } else if (normalizedInput.includes("contact")) {
      aiResponse = bossData.contact;
    } else if (normalizedInput.includes("appreciation")) {
      aiResponse = bossData.appreciation;
    } else if (normalizedInput.includes("additional") || normalizedInput.includes("passion")) {
      aiResponse = bossData.additional;
    } else {
      aiResponse = await getGeminiResponse(input);
    }

    setMessages((prev) => [...prev, { text: aiResponse, sender: "ai" }]);
    setLoading(false);
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
        {loading && <div className="text-gray-400 text-sm">Fetching response...</div>}
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
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-r" disabled={loading}>
          {loading ? "..." : "Send"}
        </button>
      </form>
    </div>
  );
}



// "use client";

// import { useState, useEffect, useRef } from "react";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY ?? "";
// const genAI = new GoogleGenerativeAI(API_KEY);
// const geminiModel = genAI.getGenerativeModel({ model: "gemini-1.5-flash-8b" });

// export default function AIChat() {
//   const [messages, setMessages] = useState<{ text: string; sender: "user" | "ai" }[]>([]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);

//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   const bossData = {
//     about: "Sameer Hussain is an outstanding web developer and AI enthusiast...",
//     skills: "Sameer is highly proficient in React, Node.js, Flask, MySQL, Python...",
//     projects: "Sameer has developed projects like 'JARVIS-2.0' and 'DevOps CodeSmith'...",
//     achievements: "Sameer is a CodeChef 2-star coder with 1500+ rating on LeetCode...",
//     experience: "Sameer interned at Keshavsoft and worked as a code reviewer at Outlier.ai...",
//     contact: "Reach Sameer on LinkedIn: https://linkedin.com/in/shaik-sameer-hussain-b88323250/...",
//     appreciation: "Sameer is known for his dedication, creativity, and work ethic...",
//     additional: "He is passionate about AI/ML and open-source contributions..."
//   };

//   const getGeminiResponse = async (message: string) => {
//     try {
//       const chat = geminiModel.startChat();
//       const response = await chat.sendMessage(message);
//       return response.response.text();
//     } catch (error) {
//       console.error("Gemini API Error:", error);
//       return "Sorry, I couldn't fetch a response at the moment.";
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     setMessages((prev) => [...prev, { text: input, sender: "user" }]);
//     setInput("");
//     setLoading(true);

//     const normalizedInput = input.toLowerCase();
//     let aiResponse = "";

//     if (normalizedInput.includes("hi") || normalizedInput.includes("hello")) {
//       aiResponse = "Hello sir, good afternoon! I am your AI companion. How can I help you?";
//     } else if (normalizedInput.includes("how are you")) {
//       aiResponse = "I am doing great, thank you! How can I assist you today?";
//     } else if (normalizedInput.includes("who is your boss") || normalizedInput.includes("boss")) {
//       aiResponse = "My boss is busy, but I'm here to assist you. How can I help you, sir?";
//     } else if (normalizedInput.includes("about")) {
//       aiResponse = bossData.about;
//     } else if (normalizedInput.includes("skills")) {
//       aiResponse = bossData.skills;
//     } else if (normalizedInput.includes("projects")) {
//       aiResponse = bossData.projects;
//     } else if (normalizedInput.includes("achievements")) {
//       aiResponse = bossData.achievements;
//     } else if (normalizedInput.includes("experience")) {
//       aiResponse = bossData.experience;
//     } else if (normalizedInput.includes("contact")) {
//       aiResponse = bossData.contact;
//     } else if (normalizedInput.includes("appreciation")) {
//       aiResponse = bossData.appreciation;
//     } else if (normalizedInput.includes("additional") || normalizedInput.includes("passion")) {
//       aiResponse = bossData.additional;
//     } else {
//       aiResponse = await getGeminiResponse(input);
//     }

//     setMessages((prev) => [...prev, { text: aiResponse, sender: "ai" }]);
//     setLoading(false);
//   };

//   useEffect(() => {
//     if (messagesEndRef.current) {
//       messagesEndRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
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
//         {loading && <div className="text-gray-400 text-sm">Fetching response...</div>}
//         <div ref={messagesEndRef} />
//       </div>
//       <form onSubmit={handleSubmit} className="flex">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           className="flex-grow p-2 rounded-l text-black"
//           placeholder="Ask me anything..."
//         />
//         <button type="submit" className="bg-blue-500 text-white p-2 rounded-r" disabled={loading}>
//           {loading ? "..." : "Send"}
//         </button>
//       </form>
//     </div>
//   );
// }
