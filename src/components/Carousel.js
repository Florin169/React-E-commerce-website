import React from "react";
import "../styles/carousel.css";
import { Link } from "react-router-dom";
import AOS from "aos";

const Carousel = ({ products }) => {
  AOS.init();

  return (
    <div>
      <h2>Trending Now</h2>
      <div className="card-container">
        {products.map((product) => {
          return (
            <Link to={`/details/${product._id}`}>
              <div data-aos="zoom-in" className="card">
                <div className="card-image">
                  <img src={product.image[0]} alt="" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
