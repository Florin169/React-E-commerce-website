import React, { useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import "../styles/products.css";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productsActions";
import { Link } from "react-router-dom";
import AOS from "aos";

const Products = () => {
  AOS.init();

  const dispatch = useDispatch();

  const productsList = useSelector((state) => state.productsList);
  const { loading, products } = productsList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <section className="products">
      {loading ? (
        <div className="spinner">
          <ClipLoader loading={loading} size={50} />
        </div>
      ) : (
        products.map((product) => {
          return (
            <Link to={`/details/${product._id}`}>
              <div
                data-aos="zoom-in"
                className="products-card"
                key={product._id}
              >
                <div className="products-img">
                  <img src={product.image[0]} alt="" />
                </div>
                <div className="products-details">
                  <p>{product.name}</p>
                  <p>${product.price}</p>
                </div>
              </div>
            </Link>
          );
        })
      )}
    </section>
  );
};

export default Products;
