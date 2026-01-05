import React from 'react';
import { Star, Plus, Package, DollarSign, ShoppingCart, Heart } from 'lucide-react';
import Navigation from './Navigation';

const DashboardPage = ({ myListings, myPurchases, onNavigate }) => {
  const activeListings = myListings.filter(l => l.status === 'Active').length;
  const totalSales = myListings.filter(l => l.status === 'Sold').reduce((sum, l) => sum + l.price, 0);
  const totalPurchases = myPurchases.length;
  const totalFavorites = myListings.reduce((sum, l) => sum + l.favorites, 0);

  return (
    <div className="min-h-screen bg-zinc-950">
      <Navigation onNavigate={onNavigate} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-20 h-20 bg-zinc-800 rounded-full mr-4"></div>
              <div>
                <h1 className="text-2xl font-bold text-white mb-1">GlassCollector42</h1>
                <div className="flex items-center text-gray-300">
                  <Star className="w-4 h-4 text-orange-600 fill-orange-600 mr-1" />
                  <span>4.8 (34 reviews)</span>
                  <span className="mx-2">•</span>
                  <span>Member since 2023</span>
                </div>
              </div>
            </div>
            <button className="px-6 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition border border-zinc-700">
              Edit Profile
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <Package className="w-8 h-8 text-orange-600" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">{activeListings}</div>
            <div className="text-gray-400 text-sm">Active Listings</div>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <DollarSign className="w-8 h-8 text-orange-600" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">${totalSales.toLocaleString()}</div>
            <div className="text-gray-400 text-sm">Total Sales</div>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <ShoppingCart className="w-8 h-8 text-orange-600" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">{totalPurchases}</div>
            <div className="text-gray-400 text-sm">Purchases</div>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <Heart className="w-8 h-8 text-orange-600" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">{totalFavorites}</div>
            <div className="text-gray-400 text-sm">Favorites</div>
          </div>
        </div>

        <div className="border-b border-zinc-800 mb-8">
          <div className="flex space-x-8">
            <button className="pb-4 text-orange-600 border-b-2 border-orange-600 font-semibold">
              My Listings
            </button>
            <button className="pb-4 text-gray-400 hover:text-white transition">
              My Purchases
            </button>
            <button className="pb-4 text-gray-400 hover:text-white transition">
              Favorites
            </button>
            <button className="pb-4 text-gray-400 hover:text-white transition">
              Messages
            </button>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">My Listings</h2>
            <button className="px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition flex items-center">
              <Plus className="w-5 h-5 mr-2" />
              Create Listing
            </button>
          </div>

          <div className="space-y-4">
            {myListings.map((listing) => (
              <div key={listing.id} className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 hover:border-zinc-700 transition">
                <div className="flex items-center justify-between">
                  <div className="flex items-center flex-1">
                    <div className="w-20 h-20 bg-zinc-800 rounded-lg mr-4"></div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-1">{listing.name}</h3>
                      <div className="text-2xl font-bold text-white mb-2">${listing.price}</div>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span>{listing.views} views</span>
                        <span>•</span>
                        <span>{listing.favorites} favorites</span>
                        <span>•</span>
                        <span className={listing.status === 'Active' ? 'text-green-500' : 'text-gray-500'}>
                          {listing.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition text-sm">
                      Edit
                    </button>
                    <button className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition text-sm">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;