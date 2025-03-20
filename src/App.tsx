import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ContentSection from './components/ContentSection';
import ChatInterface from './components/ChatInterface';
import Work from './pages/Work';
import RobotThreeJS from './components/TheeJSComponent';
import Blogs from './pages/Blogs';
import BlogPage from './pages/BlogOne';
import Profile from './pages/Profile';
import Photography from './pages/Photography';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navigation />
        <Routes>
          {/* Blog Page */}
          <Route path="/blogs" element={<Blogs/>} />
          {/* Work Page */}
          <Route path="/work" element={<Work />} />
          <Route path="/photography" element={<Photography/>}/>
          
          <Route path="/blogs/:id" element={<BlogPage />} />
          <Route path="/profile" element={<Profile/>}/>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <div className="container mx-auto px-4">
                {/* Top Section - Two squares */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {/* Left Square - Keep Calm */}
                  <div className="bg-[#00ffa2] p-4 rounded-lg flex items-center justify-center">
                    <h1 className="text-3xl font-cursive text-white text-center leading-snug">
                      Keep Calm
                      <br />
                      and Keep Up
                    </h1>
                  </div>

                  {/* Right Square - GORDON */}
                  <div className="relative bg-[#E0E0DE] p-4 rounded-lg h-80">
                    <ContentSection />
                    <h2 className="absolute right-0 bottom-40 -translate-y-24 -rotate-90 origin-bottom-right text-[#67645F] text-6xl">
                      GORDON
                    </h2>
                  </div>
                </div>

                {/* Middle Section - Content */}
                <div className="mb-4">
                  <div className="bg-gray-200 p-4 rounded-lg flex gap-4">
                    {/* Main Content Area */}
                    <div className="flex-grow">
                      <RobotThreeJS />
                    </div>

                    {/* Side Box */}
                    <div className="flex flex-col justify-evenly w-1/3 bg-white p-4 rounded-lg shadow-md">
                      {Array(4)
                        .fill(null)
                        .map((_, index) => (
                          <div key={index} className="w-full mb-4 last:mb-0">
                            <h3 className="text-lg font-bold mb-2">Sliders</h3>
                            <p className="text-gray-600 text-sm">
                              This is the side box content.
                            </p>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Section - Chat */}
                <ChatInterface />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
