import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import ContentSection from './components/ContentSection';
import ChatInterface from './components/ChatInterface';
import Work from './pages/Work';
import RobotThreeJS from './components/TheeJSComponent';
import Blogs from './pages/Blogs';
import BlogPage from './pages/BlogOne';
import Profile from './pages/Profile';
import Photography from './pages/Photography';
import Algorithms from './pages/Algorithms';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);

  return (
    <div className="relative min-h-screen bg-gray-100 overflow-hidden">
      {/* Only show video on home page */}
      {isHome && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/images/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      <div className="relative z-10">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage rotation={rotation} setRotation={setRotation} scale={scale} setScale={setScale} />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/work" element={<Work />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/blogs/:id" element={<BlogPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/algorithms" element={<Algorithms />} />
        </Routes>
      </div>
    </div>
  );
}

function HomePage({ 
  rotation, 
  setRotation, 
  scale, 
  setScale 
}: { 
  rotation: number; 
  setRotation: React.Dispatch<React.SetStateAction<number>>; 
  scale: number; 
  setScale: React.Dispatch<React.SetStateAction<number>>; 
}) {
  return (
    <div className="container mx-auto px-4">
      {/* Top Section */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-[#00ffa2] p-4 rounded-lg flex items-center justify-center h-80 overflow-hidden">
          <img src="/images/keepcalm.png" className="w-full h-full object-cover" />
        </div>

        <div className="relative bg-[#E0E0DE] p-4 rounded-lg h-80 overflow-hidden">
          <ContentSection />
          <h2 className="absolute right-0 bottom-40 -translate-y-24 -rotate-90 origin-bottom-right text-[#67645F] text-6xl">
            GORDON
          </h2>
        </div>
      </div>

      {/* Middle Section */}
      <div className="mb-4">
        <div className="bg-gray-200 p-4 rounded-lg flex gap-4">
          <div className="flex-grow flex items-center justify-center">
            <RobotThreeJS rotation={rotation} scale={scale} />
          </div>

          <div className="flex flex-col justify-evenly w-1/3 bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Adjust Robot</h3>

            {/* Rotation Slider */}
            <label className="text-gray-600 text-sm">Arm Rotation</label>
            <input
              type="range"
              min="-1"
              max="1"
              step="0.01"
              value={rotation}
              onChange={(e) => setRotation(parseFloat(e.target.value))}
              className="w-full"
            />

            {/* Scale Slider */}
            <label className="text-gray-600 text-sm">Scale</label>
            <input
              type="range"
              min="0.5"
              max="2"
              step="0.01"
              value={scale}
              onChange={(e) => setScale(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <ChatInterface />
    </div>
  );
}

export default App;
