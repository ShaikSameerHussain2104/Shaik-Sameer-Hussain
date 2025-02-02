"use client";

import { useState } from "react";

export default function AIChat() {
  const [messages, setMessages] = useState<{ text: string; sender: "user" | "ai" }[]>([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { text: input, sender: "user" }, { text: `You said: ${input}`, sender: "ai" }]);
    setInput("");
  };

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
