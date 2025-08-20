import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CartProvider from "./context/CartContext"
import ProductProvider from "./context/ProductContext"

import Header from './components/Header'
import Home from './pages/HomePage/Home'
import Products from './pages/Products/Products'
import Product from './pages/ProductDetails/Product'
import Cart from './pages/Cart/Cart'
import Favorites from './pages/Favorites/Favorites'

function App() {

  return (
    <>

      <CartProvider>
        <ProductProvider>
          <Router>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/products' element={<Products />} />
              <Route path='/product/:id' element={<Product />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/favorites' element={<Favorites />} />
            </Routes>
          </Router>
        </ProductProvider>
      </CartProvider>
     
    </>
  )
}

export default App
