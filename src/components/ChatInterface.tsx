import React, { useState } from 'react';
import { Send } from 'lucide-react';

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
      <h3 className="text-sm font-semibold mb-4">Virtual Ted</h3>
      <div className="space-y-4 mb-4">
        <div className="bg-[#ffb4b4] w-2/3 p-3 rounded-lg">
          Message content here...
        </div>
        <div className="bg-[#ffb4b4] w-2/3 ml-auto p-3 rounded-lg">
          Response here...
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