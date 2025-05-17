import React from 'react';
import { useParams } from 'react-router-dom';
import ChatDetail from '../components/community/ChatDetail';

const ChatPage: React.FC = () => {
  const { chatId } = useParams<{ chatId: string }>();
  
  if (!chatId || isNaN(parseInt(chatId))) {
    return (
      <div className="min-h-screen pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-red-500/20 border border-red-500/30 text-red-300 p-4 rounded-lg">
            Invalid chat ID. Please go back to the community page and select a valid discussion.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      <section className="py-12 bg-gradient-to-br from-black to-brown-900 text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[url('/images/masks/mask_pattern.svg')] opacity-10"></div>
        
        {/* Luminous elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-500/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-amber-600/10 to-transparent"></div>
        
        {/* Glowing orbs */}
        <div className="absolute top-40 right-40 w-64 h-64 bg-amber-500 rounded-full blur-3xl opacity-10 animate-pulse-slow"></div>
        <div className="absolute bottom-40 left-40 w-80 h-80 bg-amber-600 rounded-full blur-3xl opacity-10 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ChatDetail chatId={parseInt(chatId)} />
        </div>
      </section>
    </div>
  );
};

export default ChatPage;
