import React, { useState, useEffect } from "react";
import "../styles/cart.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../actions/CartActions";
import { useParams } from "react-router-dom";
import Paypal from "./Paypal";

const Cart = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [quantity, setQuantity] = useState(0);

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    dispatch(addToCart(id));
  }, [dispatch, id]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + quantity * item.price,
    0
  );

  return (
    <section>
      {cartItems.length > 0 ? (
        <div className="cart">
          <div className="item-container">
            {cartItems.map((items) => {
              console.log(items.qty);
              return (
                <div className="item-card">
                  <img src={items.image} alt={items.name} />
                  <div className="cart-details">
                    <p>{items.name}</p>
                    <select
                      onChange={(e) => setQuantity(e.target.value)}
                      value={quantity}
                    >
                      {items.qty.map((i) => {
                        return <option value={i}>{i}</option>;
                      })}
                    </select>
                    <button
                      className="cart-remove"
                      onClick={() => removeFromCartHandler(items.id)}
                    >
                      <i class="fas fa-trash-alt"></i>
                    </button>
                  </div>
                  <p>${quantity * items.price}</p>
                </div>
              );
            })}
          </div>

          <div className="checkout">
            <h1>Summary</h1>
            <div className="cart-price">
              <h3>Subtotal</h3>
              <p>${totalPrice}</p>
            </div>
            <div className="cart-price">
              <h3>Estimated Shipping</h3>
              <p>$0</p>
            </div>
            <div className="cart-price">
              <h3>Estimated Tax</h3>
              <p>$0</p>
            </div>
            <div className="bar"></div>
            <div className="cart-price">
              <h3>Total</h3>
              <p>${totalPrice}</p>
            </div>
            <div className="bar"></div>
            <Paypal totalPrice={totalPrice} />
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          <h2>Your Cart is empty</h2>
        </div>
      )}
    </section>
  );
};

export default Cart;
