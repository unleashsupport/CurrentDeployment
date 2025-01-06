import { useState } from 'react';
import { MessageSquare, Send } from 'lucide-react';

const ChatDemo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-20 bg-black">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">See AI in Action</h2>
        <div className="bg-[#111] rounded-lg shadow-xl overflow-hidden">
          <div className="p-4 bg-gradient-to-r from-green-400 to-blue-500 flex items-center">
            <MessageSquare className="w-5 h-5 mr-2" />
            <span className="font-medium">AI Assistant Demo</span>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-start space-x-2">
              <div className="bg-gray-700 rounded-lg p-3 max-w-[80%]">
                <p className="text-sm">How can I help automate your business?</p>
              </div>
            </div>
            <div 
              className="flex items-start space-x-2 justify-end"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="bg-green-400/10 rounded-lg p-3 max-w-[80%]">
                <p className="text-sm">I need help with customer support</p>
              </div>
            </div>
            {isHovered && (
              <div className="flex items-start space-x-2 animate-fade-in">
                <div className="bg-gray-700 rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm">I can help set up an AI-powered customer support system that works 24/7. Would you like to learn more?</p>
                </div>
              </div>
            )}
          </div>
          <div className="p-4 border-t border-gray-700">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 bg-gray-700 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button className="p-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatDemo;