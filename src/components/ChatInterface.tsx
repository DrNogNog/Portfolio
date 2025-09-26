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
      <div className="top-part flex items-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
          <img
            src="/images/profilepic.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold text-white">Virtual Ted</h3>
          <p className="text-sm font-semibold text-white">
            Agent <span className="text-red-500">(Offline)</span>
          </p>
        </div>
      </div>

      {/** Content starts here */}
      <div className="space-y-4 my-8 mb-4">
        <div className="flex items-start gap-2">
          {/** Left-side avatar + message */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
              <img
                src="/images/profilepic.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="bg-black px-4 py-2 rounded-lg shadow message-text">
              Message content here...
            </p>
          </div>

          {/** Right-side response */}
          <div className="flex-1 flex flex-col items-end">
            <p className="response-text bg-[#0f0f20] text-white px-4 py-2 rounded-lg shadow">
              Response here...
            </p>
            <span className="text-gray-500 text-xs">20 minutes ago</span>
          </div>
        </div>
      </div>

      {/** Input form */}
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
