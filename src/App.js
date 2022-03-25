import React from 'react';
import './App.css'
import Navbar from './Navbar/Navbar';
import Shop from './Shop/Shop';

const handleAdToCart = () => {
  console.log('clicked');
}
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Shop handleAdToCart = {handleAdToCart}></Shop>
    </div>
  );
};

export {App, handleAdToCart};