import React from 'react'

const ChatBubble = ({text,sender}) => {
  return (
    
      <div className={`flex ${sender === "user" ? "justify-end" : "justify-start"} mb-2`}>
      <div
        className={`p-3 max-w-[70%] rounded-lg text-gray-800 ${
          sender === "user" ? "bg-blue-500" : "bg-gray-300 text-black"
        }`}
      >
        {text}
      </div>
    </div>
    
  )
}

export default ChatBubble
