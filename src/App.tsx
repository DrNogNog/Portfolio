
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';

import ChatInterface from './components/ChatInterface';
import Work from './pages/Work';

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
  return (
    <div className="relative min-h-screen bg-gray-100">
      <div className="relative z-10">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage/>} />
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

function HomePage() {
  return (
    <div>
    <div className="w-full">
  {/* Hero Section */}
  <section className="relative w-full h-screen m-0 p-0">
    <img
      src="/images/bostonu.png"
      alt="Boston University"
      className="object-cover w-full h-full"
    />
    <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-bold text-white">Computer Science &</h1>
      <h1 className="text-5xl font-bold text-white">Developer</h1>
      <h2 className="mt-4 text-3xl text-red-600 font-serif italic">Gordon Ng'</h2>
      <button className="mt-6 px-4 py-2 bg-white text-black rounded">@bostonu</button>
    </div>
  </section>

  {/* Horizontal Bar Divider */}
  <div className="w-full h-4 bg-gray-800"></div>
  {/* You can change h-4 for thickness and bg-gray-800 for color */}

  {/* Map Section */}
  <section className="w-full">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.373486654431!2d-71.10761472357788!3d42.35050097119232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3799dd750c8c5%3A0x92f97dbb3b1b6e0!2sBoston%20University!5e0!3m2!1sen!2sus!4v1695680000000!5m2!1sen!2sus"
      width="100%"
      height="400"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </section>
</div>
<div className="w-full h-4 bg-gray-800"></div>

      {/* Bottom Section */}
      <ChatInterface />
    </div>
  );
}

export default App;
