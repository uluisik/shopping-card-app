import React from "react";
import "./NavBar.css";
import { FaShoppingCart } from "react-icons/fa";
const NavBar = () => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my-shop">My Shopping</span>
      </div>
      <div className="cart">
        <span>
          <FaShoppingCart />
        </span>
        <span>0</span>
      </div>
    </nav>
  );
};

export default NavBar;
