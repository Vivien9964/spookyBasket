import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {


  return (
    <div>

        <h1>Spooky Savings, Cozy Finds!</h1>
        <p>Your one-stop shop for autumn goodies & Halloween treats!</p>

        <button><Link to='/products'>Shop Now</Link></button>






    </div>
  )
}

export default Home