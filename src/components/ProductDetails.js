import React, { useEffect } from "react";
import "../styles/productDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { productDetailsAction } from "../actions/productsActions";
import { Link, useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import AOS from "aos";

const ProductDetails = () => {
  AOS.init();

  const dispatch = useDispatch();
  const { id } = useParams();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, product, error } = productDetails;

  useEffect(() => {
    dispatch(productDetailsAction(id));
  }, [dispatch, id]);
  return (
    <section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {loading ? (
        <div className="spinner">
          <ClipLoader loading={loading} size={50} />
        </div>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <div className="product-details">
          <div data-aos="zoom-in" className="img-collections">
            {product.image &&
              product.image.map((image) => {
                return <img src={image} alt="" />;
              })}
          </div>
          <div className="buy-product">
            <div className="buy-product-details">
              <h2>{product.name}</h2>
              <p>${product.price}</p>
            </div>
            <div className="buy-product-btns">
              <Link to={`/cart/${product._id}`}>
                <button>Add to Bag</button>
              </Link>
              <Link to={`/favorite/${product._id}`}>
                <button>Favorite</button>
              </Link>
            </div>
            <div className="buy-product-description">
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductDetails;
