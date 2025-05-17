import React, { useState, useEffect } from 'react';
import { ArrowLeft, Loader, MessageSquare } from 'lucide-react';
import { getChatById, getMessagesByChatId } from '../../services/chatService';
import MessageList from './MessageList';
import MessageForm from './MessageForm';

interface ChatDetailProps {
  chatId: number;
}

interface Chat {
  id: number;
  title: string;
  description: string;
  created_by: string;
  created_at: string;
}

interface Message {
  id: number;
  chat_id: number;
  user_name: string;
  user_email: string;
  content: string;
  parent_id: number | null;
  created_at: string;
  likes: { count: number }[];
  tags: { tag: { id: number; name: string; color: string } }[];
}

const ChatDetail: React.FC<ChatDetailProps> = ({ chatId }) => {
  const [chat, setChat] = useState<Chat | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchChatAndMessages = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Fetch chat details
      const chatResult = await getChatById(chatId);
      
      if (!chatResult.success || !chatResult.data) {
        setError(chatResult.message || 'Failed to fetch discussion details');
        setIsLoading(false);
        return;
      }

      setChat(chatResult.data);

      // Fetch messages
      const messagesResult = await getMessagesByChatId(chatId);
      
      if (messagesResult.success && messagesResult.data) {
        setMessages(messagesResult.data);
      } else {
        setError(messagesResult.message || 'Failed to fetch messages');
      }
    } catch (err) {
      console.error('Error fetching chat details:', err);
      setError('An unexpected error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchChatAndMessages();
  }, [chatId]);

  const handleMessageAdded = () => {
    fetchChatAndMessages();
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loader size={40} className="text-amber-400 animate-spin" />
      </div>
    );
  }

  if (error || !chat) {
    return (
      <div className="bg-red-500/20 border border-red-500/30 text-red-300 p-4 rounded-lg">
        {error || 'Discussion not found'}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center mb-6">
        <a
          href="/community"
          className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors mr-4"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Discussions
        </a>
      </div>

      <div className="relative bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-amber-500/20 shadow-lg">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/20 to-amber-600/20 rounded-xl blur-sm -z-10"></div>
        
        <h1 className="text-3xl font-bold text-amber-400 mb-2">{chat.title}</h1>
        
        {chat.description && (
          <p className="text-amber-100 mb-4">{chat.description}</p>
        )}
        
        <div className="flex justify-between items-center text-amber-300/70 text-sm">
          <div>Started by {chat.created_by}</div>
          <div className="flex items-center">
            <MessageSquare size={16} className="mr-1" />
            {messages.length} messages
          </div>
        </div>
      </div>

      <MessageList messages={messages} onMessageUpdated={handleMessageAdded} />
      
      <MessageForm chatId={chatId} onMessageAdded={handleMessageAdded} />
    </div>
  );
};

export default ChatDetail;
