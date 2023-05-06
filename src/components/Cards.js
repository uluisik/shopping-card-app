import React from "react";

export default function CardS({ item, handleClick }) {
  const { title, author, price, img } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{author}</p>
        <p>{price} TL</p>
        <button onClick={() => handleClick(item)}>Add to Card</button>
      </div>
    </div>
  );
}
