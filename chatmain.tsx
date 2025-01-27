"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { ChatHeader } from "./chat-header"

interface Message {
  id: number
  text: string
  sent: boolean
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "You down for a movie?", sent: false },
    { id: 2, text: "Can't rn, hmwrk. Maybe tmrw?", sent: true },
    { id: 3, text: "Yea sounds good, lmk", sent: false },
  ])
  const [isTyping, setIsTyping] = useState(false)
  const [inputValue, setInputValue] = useState("")

  const handleSend = (text: string) => {
    if (text.trim()) {
      setMessages((prev) => [...prev, { id: Date.now(), text, sent: true }])
      setInputValue("")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend(inputValue)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    setIsTyping(true)

    // Clear typing indicator after 2 seconds
    setTimeout(() => setIsTyping(false), 2000)
  }

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <ChatHeader />

      <div className="h-[400px] overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sent ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                message.sent ? "bg-[#4CD964] text-white" : "bg-gray-100 text-gray-900"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      {isTyping && <div className="px-4 py-2 text-sm text-gray-500">Youssef is typing...</div>}

      <div className="p-4 border-t">
        <Input
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
          className="w-full rounded-full"
        />
      </div>
    </div>
  )
}

