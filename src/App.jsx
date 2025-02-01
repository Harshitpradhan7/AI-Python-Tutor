import { useEffect, useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Chat from './components/Extra Components/Chat'
import Setting from './pages/Setting'
import Navbar from './components/Navbar'



function App() {
  const [apiKey, setApiKey] = useState("");


  useEffect(() => {
    const storedApiKey = localStorage.getItem("apiKey");
    
    if (storedApiKey) {
      setApiKey(storedApiKey);
    }

  }, []);

  // const apiKey = 'AIzaSyBBjsldllmSEtWFDfXjujkl-0YabV-bZk'

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat apiKey={apiKey} />} />
        <Route path="/settings" element={<Setting />} />

      </Routes>


    </>
  )
}

export default App
