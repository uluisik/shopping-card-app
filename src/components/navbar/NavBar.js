import React from "react";
import "./NavBar.css";
import { FaShoppingCart } from "react-icons/fa";
const NavBar = ({ setShow }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my-shop" onClick={() => setShow(true)}>
          My Shopping
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <FaShoppingCart />
          </span>
          <span>0</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
