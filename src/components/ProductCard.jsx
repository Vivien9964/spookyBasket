import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import { CartContext } from '../context/CartContext';
import favBtn from '/images/btnFavorite.png';
import notFavBtn from '/images/btnNotFavorite.png';



const ProductCard = ({product}) => {

    const { toggleFavorites } = useContext(ProductContext);
    const { addProduct } = useContext(CartContext);
    


  return (
    <div>
        <h2><Link to={`/product/${product.id}`}>{product.name}</Link></h2>
        <img src={product.image} alt={product.description} height="400px" width="400px"/>

        <p>{product.description}</p>

        <span><strong>{product.price} lei</strong></span>

        
        <div>
        <button onClick={() => addProduct(product)}>Add to Cart</button>
        <button onClick={() => toggleFavorites(product.id)}><img src={product.isFavorite ? favBtn : notFavBtn } alt="favorite icon" width="50px" height="50px" /></button>
        </div>
        
    </div>
  )
}

export default ProductCard