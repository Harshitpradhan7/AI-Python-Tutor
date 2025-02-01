import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    
    return (
        <div>
            <nav className="bg-blue-600 p-4 shadow-lg shadow-blue-950/50">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white text-2xl font-bold">
                        PyTutor
                    </div>
                    <div className="space-x-4">
                        <Link to="/" className="text-white hover:text-gray-300">Home</Link>
                        <Link to="/chat" className="text-white hover:text-gray-300">Chat</Link>
                        <Link to="/settings" className="text-white hover:text-gray-300">Settings</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
