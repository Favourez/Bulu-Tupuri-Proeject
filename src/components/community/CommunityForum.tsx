import React, { useState } from 'react';
import { MessageSquare, User, Clock, ThumbsUp, MessageCircle, Filter, Search } from 'lucide-react';
import AfricanLoader from '../ui/AfricanLoader';

interface ForumPost {
  id: number;
  author: string;
  authorRole: string;
  date: string;
  title: string;
  content: string;
  language: 'bulu' | 'tupuri' | 'english' | 'general';
  likes: number;
  comments: number;
  isLiked: boolean;
  tags: string[];
}

const samplePosts: ForumPost[] = [
  {
    id: 1,
    author: "Nathalie Mbarga",
    authorRole: "Bulu Speaker",
    date: "2 days ago",
    title: "Help with translating family terms in Bulu",
    content: "I'm working on documenting family relationship terms in Bulu. There are specific terms for maternal and paternal relatives that don't have direct English equivalents. Does anyone have resources on this?",
    language: "bulu",
    likes: 12,
    comments: 5,
    isLiked: false,
    tags: ["family", "terminology", "translation"]
  },
  {
    id: 2,
    author: "Jean-Pierre Wanko",
    authorRole: "Tupuri Elder",
    date: "1 week ago",
    title: "Tupuri proverbs collection project",
    content: "I'm starting a project to collect and document traditional Tupuri proverbs. Many of our elders have knowledge that isn't being passed down. If you're interested in contributing, please comment below.",
    language: "tupuri",
    likes: 24,
    comments: 8,
    isLiked: true,
    tags: ["proverbs", "cultural-preservation", "oral-tradition"]
  },
  {
    id: 3,
    author: "Dr. Sarah Johnson",
    authorRole: "Linguist",
    date: "3 days ago",
    title: "Tonal patterns in Bulu and Tupuri",
    content: "I'm researching the tonal patterns in both Bulu and Tupuri. I've noticed some interesting similarities despite their geographic separation. Has anyone else studied this phenomenon?",
    language: "general",
    likes: 18,
    comments: 7,
    isLiked: false,
    tags: ["linguistics", "tonal-languages", "research"]
  },
  {
    id: 4,
    author: "Emmanuel Nkodo",
    authorRole: "Translator",
    date: "5 days ago",
    title: "Challenges in translating technical terms",
    content: "I'm working on translating medical documents to Bulu and finding it challenging to convey technical terms. How do others handle this? Do you create new terms or use loan words?",
    language: "bulu",
    likes: 9,
    comments: 12,
    isLiked: false,
    tags: ["medical", "technical-translation", "neologisms"]
  }
];

const CommunityForum: React.FC = () => {
  const [posts, setPosts] = useState<ForumPost[]>(samplePosts);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showNewPostForm, setShowNewPostForm] = useState<boolean>(false);
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    language: 'general',
    tags: ''
  });

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1,
          isLiked: !post.isLiked
        };
      }
      return post;
    }));
  };

  const filterPosts = (filter: string) => {
    setIsLoading(true);
    setActiveFilter(filter);
    
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate search loading
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  };

  const handleNewPostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate post submission
    setTimeout(() => {
      const newId = Math.max(...posts.map(post => post.id)) + 1;
      const tagsArray = newPost.tags.split(',').map(tag => tag.trim()).filter(tag => tag);
      
      const createdPost: ForumPost = {
        id: newId,
        author: "You",
        authorRole: "Community Member",
        date: "Just now",
        title: newPost.title,
        content: newPost.content,
        language: newPost.language as any,
        likes: 0,
        comments: 0,
        isLiked: false,
        tags: tagsArray
      };
      
      setPosts([createdPost, ...posts]);
      setNewPost({
        title: '',
        content: '',
        language: 'general',
        tags: ''
      });
      setShowNewPostForm(false);
      setIsLoading(false);
    }, 1000);
  };

  const filteredPosts = activeFilter === 'all' 
    ? posts 
    : posts.filter(post => post.language === activeFilter);

  const getLanguageColor = (language: string) => {
    switch (language) {
      case 'bulu':
        return 'bg-amber-100 text-amber-800';
      case 'tupuri':
        return 'bg-green-100 text-green-800';
      case 'english':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden african-border">
      <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-amber-50 to-amber-100">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="p-2 bg-amber-100 rounded-full mr-3">
              <MessageSquare className="text-amber-600" size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Community Forum</h2>
              <p className="text-gray-600">
                Discuss translations, ask questions, and connect with other language enthusiasts
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowNewPostForm(!showNewPostForm)}
            className="btn-adinkra px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-all"
          >
            {showNewPostForm ? 'Cancel' : 'New Post'}
          </button>
        </div>
      </div>
      
      {showNewPostForm && (
        <div className="p-6 border-b border-gray-200 bg-amber-50">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Create New Post</h3>
          <form onSubmit={handleNewPostSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                type="text"
                value={newPost.title}
                onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
              <textarea
                value={newPost.content}
                onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-md h-32 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Language</label>
                <select
                  value={newPost.language}
                  onChange={(e) => setNewPost({...newPost, language: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  <option value="general">General</option>
                  <option value="bulu">Bulu</option>
                  <option value="tupuri">Tupuri</option>
                  <option value="english">English</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tags (comma separated)</label>
                <input
                  type="text"
                  value={newPost.tags}
                  onChange={(e) => setNewPost({...newPost, tags: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="e.g. translation, question, culture"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="btn-adinkra px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-all"
                disabled={isLoading}
              >
                {isLoading ? <AfricanLoader size="small" /> : 'Post'}
              </button>
            </div>
          </form>
        </div>
      )}
      
      <div className="p-4 border-b border-gray-200 bg-gray-50">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex space-x-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            <button
              onClick={() => filterPosts('all')}
              className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ${
                activeFilter === 'all' 
                  ? 'bg-amber-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All Topics
            </button>
            <button
              onClick={() => filterPosts('bulu')}
              className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ${
                activeFilter === 'bulu' 
                  ? 'bg-amber-500 text-white' 
                  : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
              }`}
            >
              Bulu
            </button>
            <button
              onClick={() => filterPosts('tupuri')}
              className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ${
                activeFilter === 'tupuri' 
                  ? 'bg-amber-500 text-white' 
                  : 'bg-green-100 text-green-800 hover:bg-green-200'
              }`}
            >
              Tupuri
            </button>
            <button
              onClick={() => filterPosts('english')}
              className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ${
                activeFilter === 'english' 
                  ? 'bg-amber-500 text-white' 
                  : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
              }`}
            >
              English
            </button>
          </div>
          
          <form onSubmit={handleSearch} className="relative w-full md:w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search discussions..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
          </form>
        </div>
      </div>
      
      <div className="divide-y divide-gray-200">
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <AfricanLoader size="medium" text="Loading discussions..." />
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No discussions found. Be the first to start a conversation!</p>
          </div>
        ) : (
          filteredPosts.map(post => (
            <div key={post.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start">
                <div className="hidden sm:block">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <User className="text-amber-600" size={20} />
                  </div>
                </div>
                <div className="flex-1 sm:ml-4">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getLanguageColor(post.language)}`}>
                      {post.language.charAt(0).toUpperCase() + post.language.slice(1)}
                    </span>
                    {post.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{post.title}</h3>
                  <p className="text-gray-600 mb-3">{post.content}</p>
                  <div className="flex flex-wrap items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="font-medium text-gray-700 mr-2">{post.author}</span>
                      <span className="text-xs text-gray-500 mr-2">({post.authorRole})</span>
                      <Clock size={14} className="mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-4 mt-2 sm:mt-0">
                      <button 
                        onClick={() => handleLike(post.id)}
                        className={`flex items-center text-sm ${post.isLiked ? 'text-amber-600' : 'text-gray-500 hover:text-amber-600'}`}
                      >
                        <ThumbsUp size={14} className="mr-1" />
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center text-sm text-gray-500 hover:text-amber-600">
                        <MessageCircle size={14} className="mr-1" />
                        <span>{post.comments}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      
      <div className="p-4 border-t border-gray-200 bg-gray-50 text-center">
        <button className="text-amber-600 hover:text-amber-700 font-medium">
          Load More Discussions
        </button>
      </div>
    </div>
  );
};

export default CommunityForum;
