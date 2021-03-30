import React, { useEffect } from "react";
import "../styles/main.css";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";
import firstImage from "../images/first.jpg";
import feature1 from "../images/feature1.jpg";
import feature2 from "../images/feature2.jpg";
import feature3 from "../images/feature3.jpg";
import feature4 from "../images/feature4.jpg";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productsActions";
import AOS from "aos";

const Main = () => {
  AOS.init();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const productsList = useSelector((state) => state.productsList);
  const { loading, products } = productsList;
  console.log(products);

  return (
    <section className="main">
      <div className="start-cover">
        <img src={firstImage} alt="" />
      </div>
      <div data-aos="fade-up" className="main-text">
        <p>Nike Yoga Collection</p>
        <h1>FROM SUNRISE TO SAVASANA</h1>
        <h3>
          From the mat to the couch and everything in between, our new,
          crazy-soft yoga apparel keeps you in downright all-day bliss
        </h3>
        <div className="shop-btn">
          <Link to="/products">
            <button className="shop-1">Shop</button>
          </Link>
          <Link to="/products">
            <button className="shop-2">Shop Kids'</button>
          </Link>
        </div>
      </div>
      <Carousel products={products.slice(0, 3)} />
      <div className="featured-container">
        <div className="img-1">
          <img src={feature1} alt="" />
          <h2>Future-ready Footwear</h2>
          <Link to="/products">
            <button>Shop</button>
          </Link>
        </div>
        <div className="img-2">
          <img src={feature2} alt="" />
          <h2>New Spring Essentials that Set the Tone.</h2>
          <Link to="/products">
            <button>Shop</button>
          </Link>
        </div>
      </div>
      <Carousel products={products.slice(5, 8)} />
      <div className="featured-container">
        <div className="img-1">
          <img src={feature3} alt="" />
          <h2>Selected x Suriya: Styles</h2>
          <Link to="/products">
            <button>Shop</button>
          </Link>
        </div>
        <div className="img-2">
          <img src={feature4} alt="" />
          <h2>Future-ready Footwear</h2>
          <Link to="/products">
            <button>Shop</button>
          </Link>
        </div>
      </div>
      <div className="more-products">
        <div className="card-m"></div>
        <div className="card-w"></div>
        <div className="card-k"></div>
      </div>
    </section>
  );
};

export default Main;
