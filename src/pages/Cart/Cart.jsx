import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const Cart = () => {

  const { cart, updateQuantity, removeProduct, clearCart, totalProducts, totalPrice } = useContext(CartContext)

  if( cart.length === 0) {
    return (
      <div>
        <h2>Cart is empty!</h2>
      </div>
    )
  }

  return (
    <div>

      <h2>You have {totalProducts} items in your cart!</h2>

      {cart.map((product) => (
        <div key={product.id}>

          <h3>{product.name}</h3>
          <img src={product.image} alt={product.description} height="100px" width="100px" />
          <p>Price: {product.price} lei</p>

          <div>
            <label>Quantity</label>
            <button onClick={() => updateQuantity(product.id, product.quantity - 1 )}> - </button>
            <span>{product.quantity}</span>
            <button onClick={() => updateQuantity(product.id, product.quantity + 1 )}> + </button>
          </div>

          <p>Total: {(product.price * product.quantity).toFixed(2)} lei</p>

          <button onClick={() => removeProduct(product.id)}>Remove</button>
        </div>
      ))}


      <div>
        <p>Total: {totalPrice.toFixed(2)} lei</p>
      </div>



      <button onClick={clearCart}>Clear Cart</button>

    </div>
  )
}

export default Cart