import React, { useState } from 'react'

const Setting = () => {

    const [apiKey, setApiKey] = useState(localStorage.getItem("apiKey") || "");

    const handleSave = () => {
        if (!apiKey.trim()) {
            alert("API Key cannot be empty.");
            return;
        }
        localStorage.setItem("apiKey", apiKey);
        console.log(apiKey);
        setApiKey("")
        alert("API Key saved successfully!");
    };
    const handleDestroy = () => {
        if (!localStorage.getItem("apiKey")) {
            alert("No API Key found to destroy.");
            return;
        }
        localStorage.removeItem("apiKey");
        setApiKey("");
        alert("API Key destroyed successfully!");
    };
    return (
        <div>
            <div className="min-h-screen flex flex-col items-center bg-blue-200 p-6 md:p-12 lg:p-36 ">
                <h1 className="text-3xl font-bold text-blue-600 mb-4">Enter Your API Keys ⚙️</h1>
                <input
                    type="text"
                    className="w-full max-w-xs md:max-w-md p-3 border border-gray-300 rounded-lg focus:outline-none text-gray-700 bg-gray-100"
                    placeholder="Enter your OpenAI API key..."
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                />
                <button className="mt-24 bg-blue-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-blue-600 min-w-1/6 font-semibold" onClick={handleSave}>
                    Save API Key
                </button>

                <button className="mt-4 bg-red-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-red-600 min-w-1/6 font-semibold
                " onClick={handleDestroy}>
                    Destroy your Keys
                </button>
            </div>
        </div>
    )
}

export default Setting
