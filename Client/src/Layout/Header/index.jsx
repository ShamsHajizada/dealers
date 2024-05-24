import React from 'react'
import {Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";

import { FaSearch } from "react-icons/fa";

import "../Header/style.scss"

const Header = () => {
  return (
    <div className='container'> 
    <div className="header">
    <div className="logo">
  <h1>DEALERS</h1>
</div>
<div className="navbar">
<ul>
          <li>
            <Link to="/collection">Collection</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/catalogs">Catalogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
</div>
<div className="icons">
<FaSearch />
<FaHeart />
<GiShoppingBag />


</div>
    </div>

    </div>
  )
}

export default Header