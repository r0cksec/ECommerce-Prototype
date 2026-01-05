import React from 'react';
import { Heart, Star } from 'lucide-react';

const ProductCard = ({ product, onClick }) => {
  return (
    <button
      onClick={() => onClick(product)}
      className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:border-orange-600 transition text-left w-full"
    >
      <div className="aspect-square bg-zinc-800 relative">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover opacity-60" />
        <button className="absolute top-3 right-3 p-2 bg-zinc-900/80 rounded-full hover:bg-orange-600 transition">
          <Heart className="w-4 h-4 text-white" />
        </button>
      </div>
      <div className="p-4">
        <div className="text-sm text-gray-400 mb-1">{product.brand}</div>
        <h3 className="text-white font-semibold mb-2">{product.name}</h3>
        <div className="flex items-center justify-between mb-2">
          <span className="text-2xl font-bold text-white">${product.price}</span>
          <span className="text-xs px-2 py-1 bg-zinc-800 text-gray-300 rounded">{product.condition}</span>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-400">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-orange-600 fill-orange-600 mr-1" />
            <span>{product.rating} ({product.reviews})</span>
          </div>
          <span>{product.location}</span>
        </div>
      </div>
    </button>
  );
};

export default ProductCard;