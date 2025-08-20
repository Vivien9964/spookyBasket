import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext';
import favBtn from '/images/btnFavorite.png';
import notFavBtn from '/images/btnNotFavorite.png';



const ProductCard = ({product}) => {

    const { toggleFavorites } = useContext(ProductContext);


  return (
    <div>
        <h2>{product.name}</h2>
        <img src={product.image} alt={product.description} height="400px" width="400px"/>

        <p>{product.description}</p>

        <span><strong>{product.price} lei</strong></span>


        <div>
        <button>Add to Cart</button>
        <button onClick={() => toggleFavorites(product.id)}><img src={product.isFavorite ? favBtn : notFavBtn } alt="favorite icon" width="50px" height="50px" /></button>
        </div>
       

    </div>
  )
}

export default ProductCard