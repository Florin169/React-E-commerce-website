import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <section>
      <div className="footer-categories">
        <div className="footer-shoes">
          <h3>Shoes</h3>
          <p>Sneakers and Shoes</p>
          <p>Football Boots</p>
          <p>Running Shoes</p>
          <p>Netball Sneakers</p>
        </div>
        <div className="footer-clothing">
          <h3>Cloathing</h3>
          <p>All Cloathing</p>
          <p>Tops</p>
          <p>Trousers and Legs</p>
          <p>Tracksuits</p>
        </div>
        <div className="footer-kids">
          <h3>Kids</h3>
          <p>Kids' Sneakers</p>
          <p>Kids'Backpacks</p>
          <p>Kids' Football Boots</p>
          <p>Kids' Running Shoes</p>
        </div>
        <div className="footer-featured">
          <h3>Featured</h3>
          <p>New Releases</p>
          <p>Backpacks and Bags</p>
          <p>Footballs</p>
          <p>Goalkeepers Gloaves</p>
        </div>
      </div>
      <footer>
        <div className="footer-columns">
          <div className="footer-col-bold">
            <p>GIFT CARDS</p>
            <p>PROMOTIONS</p>
            <p>FIND A STORE</p>
            <p>SIGN UP FOR EMAIL</p>
            <p>BECOME A MEMBER</p>
            <p>NIKE JOURNAL</p>
            <p>SEND US FEEDBACK</p>
          </div>
          <div className="footer-col">
            <h3>GET HELP</h3>
            <p>Order Status</p>
            <p>Shipping and Delivery</p>
            <p>Returns</p>
            <p>Payment Options</p>
            <p>Gift Card Balance</p>
            <p>Contact Us</p>
          </div>
          <div className="footer-col">
            <h3>ABOUT NIKE</h3>
            <p>News</p>
            <p>Carrers</p>
            <p>Investors</p>
            <p>Purpose</p>
            <p>Sustainability</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
