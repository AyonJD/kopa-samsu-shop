import React from 'react';
import './Navbar.css'
import { BsFillCartPlusFill } from 'react-icons/bs';

const Navbar = props => {
  return (
    <div className='navbar'>
      <h1>Kopa Samsu Store</h1>
      <div className="cart-counter">
        <span></span>
        <BsFillCartPlusFill></BsFillCartPlusFill>
      </div>
    </div>
  );
};

export default Navbar;