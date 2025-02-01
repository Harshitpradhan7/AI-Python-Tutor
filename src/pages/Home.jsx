import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div>
            <div className="min-h-screen flex flex-col items-center justify-center bg-blue-200 p-6 text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-4">Welcome to PyTutor! 🐍</h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-md">
                    Learn Python the fun way! Choose your AI tutor and start coding with interactive lessons.
                </p>
                <Link to="/chat">
                    <button className="mt-6 bg-blue-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-base sm:text-lg hover:bg-blue-600 transition">
                        Start Learning 🚀
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Home
