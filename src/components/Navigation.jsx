import React from 'react';
import { ShoppingCart, User } from 'lucide-react';

const Navigation = ({ onNavigate }) => {
  return (
    <nav className="bg-zinc-900 border-b border-zinc-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <button 
              onClick={() => onNavigate('home')}
              className="text-2xl font-bold text-white"
            >
              Glass<span className="text-orange-600">X</span>
            </button>
            <div className="hidden md:flex space-x-6">
              <button 
                onClick={() => onNavigate('listings')}
                className="text-gray-300 hover:text-white transition"
              >
                Browse
              </button>
              <button className="text-gray-300 hover:text-white transition">Sell</button>
              <button className="text-gray-300 hover:text-white transition">About</button>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white transition">
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button 
              onClick={() => onNavigate('dashboard')}
              className="text-gray-300 hover:text-white transition"
            >
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;