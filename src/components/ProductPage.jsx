import React from 'react';
import { Star, MessageCircle } from 'lucide-react';
import Navigation from './Navigation';
import ProductCard from './ProductCard';

const ProductPage = ({ product, products, onNavigate, onProductClick }) => {
  if (!product) {
    product = products[0];
  }

  return (
    <div className="min-h-screen bg-zinc-950">
      <Navigation onNavigate={onNavigate} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button 
          onClick={() => onNavigate('listings')}
          className="text-gray-400 hover:text-white mb-6 flex items-center"
        >
          ← Back to Listings
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="aspect-square bg-zinc-900 border border-zinc-800 rounded-lg mb-4 overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover opacity-70" />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
                  <img src={product.image} alt="" className="w-full h-full object-cover opacity-50" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <div className="text-sm text-gray-400 mb-2">{product.brand}</div>
              <h1 className="text-3xl font-bold text-white mb-4">{product.name}</h1>
              
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold text-white mr-4">${product.price}</span>
                <span className="px-3 py-1 bg-zinc-800 text-gray-300 rounded text-sm">{product.condition}</span>
              </div>

              <div className="border-t border-zinc-800 pt-6 mb-6">
                <h3 className="text-white font-semibold mb-3">Details</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Condition:</span>
                    <span>{product.condition}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Location:</span>
                    <span>{product.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Height:</span>
                    <span>14 inches</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Joint Size:</span>
                    <span>18mm Female</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-zinc-800 pt-6 mb-6">
                <h3 className="text-white font-semibold mb-3">Description</h3>
                <p className="text-gray-300 leading-relaxed">
                  Beautiful piece in excellent condition. Barely used, no scratches or cloudiness. 
                  Includes original packaging. Functions perfectly with smooth percolation. 
                  Selling to make room for new pieces in the collection.
                </p>
              </div>

              <div className="border-t border-zinc-800 pt-6 mb-6">
                <h3 className="text-white font-semibold mb-3">Seller Information</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-zinc-800 rounded-full mr-3"></div>
                    <div>
                      <div className="text-white font-medium">GlassCollector42</div>
                      <div className="flex items-center text-sm">
                        <Star className="w-4 h-4 text-orange-600 fill-orange-600 mr-1" />
                        <span className="text-gray-300">{product.rating} ({product.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                  <button className="p-2 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition">
                    <MessageCircle className="w-5 h-5 text-gray-300" />
                  </button>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition">
                  Buy Now
                </button>
                <button className="px-6 py-3 bg-zinc-800 text-white rounded-lg font-semibold hover:bg-zinc-700 transition border border-zinc-700">
                  Make Offer
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6">Similar Items</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} onClick={onProductClick} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;