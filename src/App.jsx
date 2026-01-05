import React, { useState } from 'react';
import HomePage from './components/HomePage';
import ListingsPage from './components/ListingsPage';
import ProductPage from './components/ProductPage';
import DashboardPage from './components/DashboardPage';
import { products, myListings, myPurchases } from './data/sampleData';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setCurrentPage('product');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage 
            products={products}
            onNavigate={handleNavigate}
            onProductClick={handleProductClick}
          />
        );
      case 'listings':
        return (
          <ListingsPage 
            products={products}
            onNavigate={handleNavigate}
            onProductClick={handleProductClick}
          />
        );
      case 'product':
        return (
          <ProductPage 
            product={selectedProduct}
            products={products}
            onNavigate={handleNavigate}
            onProductClick={handleProductClick}
          />
        );
      case 'dashboard':
        return (
          <DashboardPage 
            myListings={myListings}
            myPurchases={myPurchases}
            onNavigate={handleNavigate}
          />
        );
      default:
        return (
          <HomePage 
            products={products}
            onNavigate={handleNavigate}
            onProductClick={handleProductClick}
          />
        );
    }
  };

  return (
    <div className="font-sans">
      {renderPage()}
    </div>
  );
}

export default App;