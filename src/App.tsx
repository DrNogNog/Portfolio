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
                  <div className="relative bg-[#E0E0DE] p-4 rounded-lg h-80">
                  <ContentSection />
                  <h2 className="absolute right-0 bottom-40  -translate-y-24 -rotate-90 origin-bottom-right justify-center text-[#67645F] text-6xl">
                      GORDON
                    </h2>
                    
                  </div>
                </div>

                {/* Middle Section - Content */}
                <div className="mb-4">
                  <div className="bg-gray-200 p-4 rounded-lg">
                    
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