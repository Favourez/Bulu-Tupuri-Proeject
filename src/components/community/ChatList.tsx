import React, { useState, useEffect } from 'react';
import { MessageSquare, Plus, Loader } from 'lucide-react';
import { getPublicChats } from '../../services/chatService';
import NewChatModal from './NewChatModal';

interface Chat {
  id: number;
  title: string;
  description: string;
  created_by: string;
  created_at: string;
  messages: { count: number }[];
}

const ChatList: React.FC = () => {
  const [chats, setChats] = useState<Chat[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchChats = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await getPublicChats();

      if (result.success && result.data) {
        setChats(result.data);
      } else {
        setError(result.message || 'Failed to fetch discussions');
      }
    } catch (err) {
      console.error('Error fetching chats:', err);
      setError('An unexpected error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  const handleChatCreated = () => {
    fetchChats();
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-amber-400">Community Discussions</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold rounded-lg shadow-lg hover:from-amber-500 hover:to-amber-600 transition-all"
        >
          <Plus size={18} className="mr-2" />
          New Discussion
        </button>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <Loader size={40} className="text-amber-400 animate-spin" />
        </div>
      ) : error ? (
        <div className="bg-red-500/20 border border-red-500/30 text-red-300 p-4 rounded-lg">
          {error}
        </div>
      ) : chats.length === 0 ? (
        <div className="bg-amber-500/20 border border-amber-500/30 text-amber-300 p-6 rounded-lg text-center">
          <MessageSquare size={40} className="mx-auto mb-4 text-amber-400" />
          <p className="text-lg mb-4">No discussions yet. Be the first to start one!</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold rounded-lg shadow-lg hover:from-amber-500 hover:to-amber-600 transition-all"
          >
            <Plus size={18} className="mr-2" />
            Start a Discussion
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {chats.map((chat) => (
            <div
              key={chat.id}
              className="relative group bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-amber-500/20 shadow-lg hover:border-amber-500/40 transition-all"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/20 to-amber-600/20 rounded-xl blur-sm -z-10 opacity-50 group-hover:opacity-75 transition-all"></div>

              <h3 className="text-xl font-bold text-amber-400 mb-2">{chat.title}</h3>
              <p className="text-amber-100 mb-4 line-clamp-2">{chat.description}</p>

              <div className="flex justify-between items-center">
                <div className="text-amber-300/70 text-sm">
                  Started by {chat.created_by}
                </div>
                <div className="flex items-center text-amber-300/70 text-sm">
                  <MessageSquare size={16} className="mr-1" />
                  {chat.messages && chat.messages.length > 0 ? chat.messages[0]?.count || 0 : 0} messages
                </div>
              </div>

              <a
                href={`/community/chat/${chat.id}`}
                className="absolute inset-0 rounded-xl"
                aria-label={`View ${chat.title} discussion`}
              ></a>
            </div>
          ))}
        </div>
      )}

      {isModalOpen && (
        <NewChatModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onChatCreated={handleChatCreated}
        />
      )}
    </div>
  );
};

export default ChatList;
