import React from "react";
import "../styles/featured.css";

const Featured = ({ image1 }) => {
  console.log(image1);
  return (
    <div className="featured-container">
      <div className="img-1">
        <img src="" alt="" />
        <h2>Future-ready Footwear</h2>
        <button>Shop</button>
      </div>
      <div className="img-2">
        <h2></h2>
        <button></button>
      </div>
    </div>
  );
};

export default Featured;
