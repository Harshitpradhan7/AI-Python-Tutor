import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAIResponse } from '../../utils/api'
import ChatBubble from '../ChatBubble'

const Chat = ({ apiKey }) => {
    const [messages, setMessages] = useState([
        {
            text: "Hi there! I’m PyTutor, your AI coding buddy. Ask me anything about Python!",
            sender: "ai"
        }
    ])

    const handleClick = async () => {
        const newMessages = [...messages, { text: input, sender: "user" }]
        setMessages(newMessages)
        setInput("")

        try {
            const aiReply = await getAIResponse(input, apiKey);
            setMessages([...newMessages, { text: aiReply, sender: "ai" }]);
        } catch (error) {
            console.error("Error fetching AI response:", error);
            setMessages([...newMessages, { text: "Error fetching AI response", sender: "ai" }]);
        }
    }

    const [input, setInput] = useState("")
    // console.log(messages);
    return (
        <div>
            <Link
                to={'/'}
                className='absolute top-20 left-4 md:top-24 md:left-8 text-blue-700'>
                ← Back</Link>

            <div className='flex flex-col items-center  min-h-screen p-4 md:p-8 lg:p-12 bg-blue-200 text-gray-700'>

                <h1 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">Chat with PyTutor 🤖</h1>

                <div className='scrollbar-hide w-full max-w-xs md:max-w-md lg:max-w-lg bg-gray-100 shadow-md rounded-lg p-4 h-[60vh] md:h-[67vh] overflow-y-auto'>
                    {messages.map((msg, idx) => (
                        <ChatBubble key={idx} text={msg.text} sender={msg.sender} />

                    ))}
                </div>

                <div className='flex w-full max-w-xs md:max-w-md lg:max-w-lg mt-4'>
                    <input
                        type="text"

                        className="flex-1 p-3 border-gray-300 rounded-l-lg focus:outline-none text-gray-800 bg-gray-100"

                        placeholder='Ask Your Question'
                        value={input}
                        onChange={(e) => {
                            setInput(e.target.value)
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleClick();
                            }
                        }}
                    />
                    <button
                        className="bg-blue-500 text-white px-4 py-3 rounded-r-lg hover:bg-blue-600"
                        onClick={handleClick}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Chat
