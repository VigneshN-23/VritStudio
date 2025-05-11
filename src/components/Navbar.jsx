import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigation, siteConfig } from '../../data';
import { useTheme } from '../context/ThemeContext';

function ThemeToggle() {
  const { isDark, setIsDark } = useTheme();

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="w-12 h-6 rounded-full p-1 bg-gray-300 dark:bg-gray-600 relative transition-colors duration-500 ease-in focus:outline-none"
      aria-label="Toggle theme"
    >
      <motion.div
        className="w-4 h-4 rounded-full bg-white shadow-md"
        animate={{
          x: isDark ? 24 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      />
    </button>
  );
}

import { motion } from 'framer-motion';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`sticky top-0 z-50 ${isDark ? 'bg-dark-surface/90 border-dark-surface' : 'bg-white/90 border-gray-200'} backdrop-blur-sm border-b`}>
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-xl font-display font-medium tracking-tight">
            {siteConfig.name}
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <ThemeToggle />
            {navigation.map((item) => (
              <Link 
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <button 
            className="md:hidden focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-2 ${location.pathname === item.path ? 'font-medium' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}