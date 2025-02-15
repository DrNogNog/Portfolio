import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Settings2 } from 'lucide-react';
import Navigation from './components/Navigation';
import ContentSection from './components/ContentSection';
import ChatInterface from './components/ChatInterface';
import Work from './pages/Work';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navigation />
        <Routes>
          <Route path="/work" element={<Work />} />
          <Route
            path="/"
            element={
              <div className="container mx-auto px-4">
                {/* Top Section - Two squares */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {/* Left Square - Keep Calm */}
                  <div className="bg-[#00ffa2] p-4 rounded-lg flex items-center justify-center">
                    <h1 className="text-3xl font-cursive text-white text-center">
                      Keep Calm
                      <br />
                      and Keep Up
                    </h1>
                  </div>

                  {/* Right Square - GORDON */}
                  <div className="bg-[#333] p-4 rounded-lg">
                    <h2 className="text-white text-2xl font-bold mb-4 flex items-center justify-center">
                      <Settings2 className="mr-2" />
                      GORDON
                    </h2>
                    <div className="grid grid-cols-1 gap-4">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="bg-gray-600 p-2 rounded flex justify-center">
                          <Settings2 className="text-white" size={24} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Middle Section - Content */}
                <div className="mb-4">
                  <ContentSection />
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