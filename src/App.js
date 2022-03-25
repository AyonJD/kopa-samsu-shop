import { useState } from 'react';
import './App.css'
import Navbar from './Navbar/Navbar';
import Shop from './Shop/Shop';

const App = () => {
  const [gunArr, setGunArr] = useState([])
  const handleAdToCart = props => {
    const newGunArr = [...gunArr, props]
    setGunArr(newGunArr)
  }
  return (
    <div>
      <Navbar gunArr = {gunArr}></Navbar>
      <Shop handleAdToCart = {handleAdToCart}></Shop>
    </div>
  );
};

export default App;