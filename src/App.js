import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Amazon from "./components/Amazon";
import NewCart from "./components/NewCart";

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
    <React.Fragment>
      <NavBar setShow={setShow} cart={cart} size={cart.length} />
      {show ? (
        <Amazon handleClick={handleClick} />
      ) : (
        <NewCart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </React.Fragment>
  );
}

export default App;
