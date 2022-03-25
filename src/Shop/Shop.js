import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Shop.css'

const Shop = ({ handleAdToCart }) => {
    const [guns, setGuns] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setGuns(data))
    }, [])
    return (
        <div className='card-container'>
            {
                guns.map(gun => <Card handleAdToCart = {handleAdToCart} key = {gun.id} gun = {gun}></Card>)
            }
        </div>
    );
};

export default Shop;