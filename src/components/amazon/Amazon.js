import React from "react";
import "./Amazon.css";
import list from "./AmazonData";
import Card from "../card/Card";
const Amazon = () => {
  return (
    <section>
      {list.map((item) => {
        <Card />;
      })}
    </section>
  );
};

export default Amazon;
