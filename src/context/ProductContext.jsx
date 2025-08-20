import React, { useState, createContext } from 'react'
import productData from '../data/products.json';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {

    const [products, setProducts ] = useState(productData);
    const [ favorites, setFavorites ] = useState([]);

    const toggleFavorites = (id) => {
     
        setFavorites((prevFavorites) => {
            const isInFavorites = prevFavorites.some((favorite) => favorite.id === id);

            if(isInFavorites) {
                return prevFavorites.filter((favorite) => favorite.id !== id);
            } else {
                const product = products.find((product) => product.id === id);
                return [...prevFavorites, { ...product, isFvorite: true }];
            }
        })


        setProducts((prevProducts) => 
            prevProducts.map((product) => 
                product.id === id ? {...product, isFavorite: !product.isFavorite } : product
            )
        )
    }


    const contextValue = {
        products,
        favorites,
        toggleFavorites
    }



  return (
    <ProductContext.Provider value={contextValue}>
        { children }
    </ProductContext.Provider>

  )
}

export default ProductProvider