import React,{useState} from "react";
import {Link} from 'react-router-dom';
import "./Header.css";




const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseOver = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseOut = () => {
    setIsDropdownOpen(false);
  };
  const [activeTab, setActiveTab] = useState("home");

  const handleClick = (tab) => {
    setActiveTab(tab);
  };


  return (
    <header>
      <div className="logo-sec">
        <div className="logo">
          <img src="img/header-logo-1.png" alt="Main logo" />
        </div>
        <div className="navbar">
        <ul className="navbar-list">
        <li  >
          
          <Link to="/"  className={`navbar-link ${activeTab === "home" ? "active" : ""}`}
          onClick={() => handleClick("home")}>Home</Link>
          
        </li>
        <li className="navbar-item"
         onMouseOver={handleMouseOver}
         onMouseOut={handleMouseOut}>
          <Link  to="/products" className={`navbar-link ${activeTab === "products" ? "active" : ""}`}
          onClick={() => handleClick("products")} > Products</Link>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <ul>
                <li><a href="/">Product 1</a></li>
                <li><a href="/">Product 2</a></li>
                <li><a href="/">Product 3</a></li>
                {/* Add more product items as needed */}
              </ul>
              <ul>
                <li><a href="/">Product 1</a></li>
                <li><a href="/">Product 2</a></li>
                <li><a href="/">Product 3</a></li>
                {/* Add more product items as needed */}
              </ul>
              <ul>
                <li><a href="/">Product 1</a></li>
                <li><a href="/">Product 2</a></li>
                <li><a href="/">Product 3</a></li>
                {/* Add more product items as needed */}
              </ul>
            </div>
          )}
        </li>

        <li className="navbar-item">
          <Link to="/shop" className={`navbar-link ${activeTab === "shop" ? "active" : ""}`}
          onClick={() => handleClick("shop")}>Shop</Link>
         
        </li>
      
      </ul>
        </div>
      </div>
      <div className="login">
        <ul >
          <li className="navbar-link">Login/</li>
          <li className="navbar-link">Sign Up</li>
        </ul>
        <div>
        <button className="start-btn">Start Today</button>
        </div>
        <div className="cart-icon">
          <Link to="/cart"  onClick={()=>handleClick("cart")}>
        <i className="fa-solid fa-cart-shopping"></i>
        </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;