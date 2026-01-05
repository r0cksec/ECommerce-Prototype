import React from 'react';
import { Search } from 'lucide-react';
import Navigation from './Navigation';
import ProductCard from './ProductCard';

const HomePage = ({ products, onNavigate, onProductClick }) => {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navigation onNavigate={onNavigate} />
      
      <div className="relative bg-gradient-to-br from-zinc-900 via-zinc-900 to-orange-950 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The Premium Marketplace for <span className="text-orange-600">Glass</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Buy and sell authenticated smoking glassware from trusted collectors and artists
          </p>
          
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for brands, artists, or styles..."
                className="w-full px-6 py-4 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-600"
              />
              <Search className="absolute right-4 top-4 text-gray-400 w-6 h-6" />
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate('listings')}
              className="px-8 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition"
            >
              Browse Glass
            </button>
            <button className="px-8 py-3 bg-zinc-800 text-white rounded-lg font-semibold hover:bg-zinc-700 transition border border-zinc-700">
              Start Selling
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Water Pipes', 'Dab Rigs', 'Bubblers', 'Hand Pipes'].map((category) => (
            <button
              key={category}
              onClick={() => onNavigate('listings')}
              className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-orange-600 transition text-center"
            >
              <div className="w-16 h-16 bg-zinc-800 rounded-full mx-auto mb-4"></div>
              <h3 className="text-white font-semibold">{category}</h3>
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">Featured Listings</h2>
          <button 
            onClick={() => onNavigate('listings')}
            className="text-orange-600 hover:text-orange-500 font-semibold"
          >
            View All →
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} onClick={onProductClick} />
          ))}
        </div>
      </div>

      <div className="bg-zinc-900 border-y border-zinc-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">5,000+</div>
              <div className="text-gray-400">Active Listings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">15,000+</div>
              <div className="text-gray-400">Community Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">$2M+</div>
              <div className="text-gray-400">Total Sales</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">4.9★</div>
              <div className="text-gray-400">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;