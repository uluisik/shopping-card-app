import { useState } from "react";
import "./App.css";
import Amazon from "./components/amazon/Amazon";
import NavBar from "./components/navbar/NavBar";

function App() {
  const [show, setShow] = useState(true);
  const [card, setCard] = useState([]);

  const handleClick = (item) => {
    if (card.indexOf(item) !== -1) {
      return setCard([...card, item]);
    }
  };

  return (
    <>
      <NavBar setShow={setShow} />
      {show ? <Amazon /> : "Card"}
    </>
  );
}

export default App;
