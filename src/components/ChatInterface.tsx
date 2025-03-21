import React, { useState } from 'react';
import { Send } from 'lucide-react';
import '../styles/Chatbot.css';
const ChatInterface = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Handle message submission
      setMessage('');
    }
  };

  return (
    <div className="bg-gray-200 rounded-lg p-4">
      
      {/** Top Part */}
      <div className="top-part">
        <div className="agent-details">
          <img src="/images/profilepic.png"></img>
        <div className='agent-text'></div>
        </div>
        <div className="flex-column">
        <h3 className="text-sm font-semibold mb-4 text-white">Virtual Ted </h3>
        <p  className="text-sm font-semibold mb-4 text-white">Agent<span className="text-red-500"> (Offline)</span></p>
        </div>
      </div>

      {/**Content starts here */}
      <div className="space-y-4 my-8 mb-4">
  <div className="flex items-start"> {/* Use flexbox to align left and right parts horizontally */}
    <div className="left-part flex items-center mr-4">
      <div className="agent-chart flex items-center">
        <img src="/images/profilepic.png" alt="Profile" className="w-12 h-12 rounded-full border-2 border-white"/>
        <p className="message-text">Message content here...</p>
      </div>
    </div>
    <div className="right-part text-right flex-1">
      <p className="response-text">Response here...</p>
      <span className="text-gray-500 text-xs">20 minutes ago</span>
    </div>
  </div>
</div>


      <form onSubmit={handleSubmit} className="flex gap-4">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter Text Here"
          className="flex-1 p-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#00ffa2]"
        />
        <button
          type="submit"
          className="bg-[#00ffa2] p-2 rounded-lg text-white hover:bg-opacity-90 focus:outline-none"
        >
          <Send size={20} />
        </button>
      </form>
    </div>
  );
};

export default ChatInterface;