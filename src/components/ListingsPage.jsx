import React from 'react';
import { Search, Filter } from 'lucide-react';
import Navigation from './Navigation';
import ProductCard from './ProductCard';

const ListingsPage = ({ products, onNavigate, onProductClick }) => {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navigation onNavigate={onNavigate} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search glass..."
              className="w-full px-6 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-600"
            />
            <Search className="absolute right-4 top-3 text-gray-400 w-5 h-5" />
          </div>
          
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-white hover:border-orange-600 transition flex items-center">
              <Filter className="w-4 h-4 mr-2" />
              All Categories
            </button>
            <button className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-white hover:border-orange-600 transition">
              Price Range
            </button>
            <button className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-white hover:border-orange-600 transition">
              Condition
            </button>
            <button className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-white hover:border-orange-600 transition">
              Location
            </button>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">All Listings</h2>
          <p className="text-gray-400">{products.length} pieces available</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onClick={onProductClick} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListingsPage;