import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { TranslationProvider } from './contexts/TranslationContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CommunityPage from './pages/CommunityPage';
import ChatPage from './pages/ChatPage';
import TechStackPage from './pages/TechStackPage';
import DictionaryPage from './pages/DictionaryPage';
import PageLoader from './components/ui/PageLoader';
import './index.css';

// Page transition wrapper
const PageTransitionWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Show loader when location changes
    setIsLoading(true);

    // Hide loader after a short delay to simulate page loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <PageLoader isLoading={isLoading} />
      <div className={`transition-all duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {children}
      </div>
    </>
  );
};

function App() {
  return (
    <TranslationProvider>
      <Router>
        <AppContent />
      </Router>
    </TranslationProvider>
  );
}

// Separate component to use useLocation hook
function AppContent() {
  return (
    <PageTransitionWrapper>
      <div className="min-h-screen flex flex-col bg-amber-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/community/chat/:chatId" element={<ChatPage />} />
            <Route path="/tech-stack" element={<TechStackPage />} />
            <Route path="/dictionary" element={<DictionaryPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </PageTransitionWrapper>
  );
}

export default App;