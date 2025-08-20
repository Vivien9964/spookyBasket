import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <ul style={{ listStyle: "none"}}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/cart'>Cart</Link></li>
            <li><Link to='/favorites'>Favorites</Link></li>
        </ul>
    </header>
  )
}

export default Header