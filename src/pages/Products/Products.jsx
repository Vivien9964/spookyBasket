import React, { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext';
import ProductCard from '../../components/ProductCard';


const Products = () => {

    const { products } = useContext(ProductContext);


  return (
    <div>

        <ul style={{ listStyle: "none"}}>

            {products.map((product) => (
                <li key={product.id}>
                    <ProductCard key={product.id} product={product}  />
                </li>
            ))}

        </ul>
    </div>
  )
}

export default Products