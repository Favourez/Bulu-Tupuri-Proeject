import React from 'react';
import { Heart, Tag } from 'lucide-react';
import { likeMessage } from '../../services/chatService';

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

interface MessageListProps {
  messages: Message[];
  onMessageUpdated: () => void;
}

const MessageList: React.FC<MessageListProps> = ({ messages, onMessageUpdated }) => {
  const handleLike = async (messageId: number) => {
    try {
      // In a real app, you would get the user's email from authentication
      // For now, we'll use a placeholder
      const userEmail = 'user@example.com';
      
      const result = await likeMessage(messageId, userEmail);
      
      if (result.success) {
        onMessageUpdated();
      } else {
        console.error('Error liking message:', result.message);
      }
    } catch (error) {
      console.error('Error liking message:', error);
    }
  };

  if (messages.length === 0) {
    return (
      <div className="bg-amber-500/20 border border-amber-500/30 text-amber-300 p-6 rounded-lg text-center">
        <p className="text-lg">No messages yet. Be the first to post!</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {messages.map((message) => (
        <div
          key={message.id}
          className="relative bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-amber-500/20 shadow-lg"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/20 to-amber-600/20 rounded-xl blur-sm -z-10"></div>
          
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-amber-400">{message.user_name}</h3>
              <p className="text-amber-300/70 text-sm">
                {new Date(message.created_at).toLocaleString()}
              </p>
            </div>
            
            <div className="flex space-x-2">
              <button
                onClick={() => handleLike(message.id)}
                className="inline-flex items-center px-3 py-1 bg-black/60 border border-amber-500/30 rounded-full text-amber-300 hover:bg-black/80 transition-colors"
              >
                <Heart size={16} className="mr-1" />
                {message.likes[0]?.count || 0}
              </button>
            </div>
          </div>
          
          <div className="text-amber-100 whitespace-pre-wrap mb-4">
            {message.content}
          </div>
          
          {message.tags && message.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {message.tags.map(({ tag }) => (
                <div
                  key={tag.id}
                  className="inline-flex items-center px-3 py-1 bg-black/60 border border-amber-500/30 rounded-full text-amber-300 text-sm"
                  style={{ borderColor: tag.color ? `${tag.color}30` : undefined }}
                >
                  <Tag size={12} className="mr-1" />
                  {tag.name}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MessageList;
