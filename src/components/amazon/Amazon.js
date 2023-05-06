import React from "react";
import "./Amazon.css";
import list from "./AmazonData";
import Card from "../card/Card";
const Amazon = ({ handleClick }) => {
  return (
    <section>
      {list.map((item) => {
        return <Card key={item.id} item={item} handleClick={handleClick} />;
      })}
    </section>
  );
};

export default Amazon;
