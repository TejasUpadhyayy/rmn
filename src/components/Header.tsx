import React, { useState } from 'react';
import { Menu, X, BookOpen, Users, MapPin, Brain, User, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { path: '/', label: 'Home', icon: BookOpen },
    { path: '/characters', label: 'Characters', icon: Users },
    { path: '/locations', label: 'Locations', icon: MapPin },
    { path: '/trivia', label: 'Fun Facts & Trivia', icon: Brain },
    { path: '/author', label: 'About the Author', icon: User },
    { path: '/about-me', label: 'Why I Made This', icon: Heart },
  ];

  return (
    <header className="fixed w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text hover:opacity-80 transition-opacity">
            Ramayana
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className="text-white/90 hover:text-white relative group transition-colors duration-300"
              >
                <span>{label}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-purple-400 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-b border-white/10">
            <div className="container mx-auto px-4 py-4">
              {menuItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-2 text-white/90 hover:text-white py-3 transition-colors"
                >
                  <Icon size={20} />
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;