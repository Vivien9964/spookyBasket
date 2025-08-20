import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../../context/ProductContext'
import ProductCard from '../../components/ProductCard'

const Product = () => {

  const { id } = useParams();
  const { products } = useContext(ProductContext);

  const product = products.find((product) => product.id === Number(id));


  return (
    <div>

        <ProductCard product={product} />

    </div>
  )
}

export default Product