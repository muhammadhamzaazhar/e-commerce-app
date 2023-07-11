import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/shop' element={<ShopPage />} />
      </Routes>
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
