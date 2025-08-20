import React, { createContext,  useReducer, useMemo, useEffect } from 'react'

export const CartContext = createContext();

const initialState = [];

const cartReducer = (state, action) => {
  
  switch(action.type) {

    case "ADD_PRODUCT": {
      
      const existingProduct = state.find((product) => product.id === action.payload.id);
      
      if(existingProduct) {
        return state.map((product) => 
          product.id === action.payload.id
          ? { ...product, quantity: product.quantity + 1}
          : product
        )
      } else {
        return [...state, { ...action.payload, quantity: 1}];
      }
    }

    case "UPDATE_QUANTITY": {
      return state.map((product) => 
        product.id === action.payload.id
        ? { ...product, quantity: action.payload.quantity }
        : product
      )
    }

    case "REMOVE_PRODUCT": { 
      return state.filter((product) => product.id !== action.payload);
    }

    case "CLEAR_CART": {
      return [];

    }

    default:
      return state;
  }
}


const CartProvider = ({ children }) => {

  const [ cart, dispatch ] = useReducer(cartReducer, []);

  const addProduct = (product) => {
    dispatch({ type: "ADD_PRODUCT", payload: product});
  }

  const updateQuantity = (id, quantity) => {
    if(quantity <= 0) {
      dispatch({ type: "REMOVE_PRODUCT", payload: id });
    } else {
      dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity }});
    }
  }

  const removeProduct = (id) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: id });
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  }

  const totalProducts = useMemo(
    () => cart.reduce((total, product) => total + product.quantity, 0),
    [cart]
  )

  const totalPrice = useMemo(
    () => cart.reduce((sum, product) => sum + (product.price * product.quantity), 0),
    [cart]
  )


  const contextValue = {
    cart,
    addProduct,
    removeProduct,
    updateQuantity,
    clearCart,
    totalProducts,
    totalPrice
  }


  return (
    <CartContext.Provider value={contextValue}>
        { children }
    </CartContext.Provider>

  )
}

export default CartProvider