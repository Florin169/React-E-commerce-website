import React, { useState } from "react";
import "../styles/navBar.css";
import logo from "../images/Nike_logo.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(true);

  return (
    <section>
      <nav>
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
        <ul className="categories">
          <li className="new-r">
            New Releases
            <div className="dropdown-container">
              <div className="featured">
                <h3>Featured</h3>
                <ul>
                  <li>Shop All New Arival</li>
                  <li>Best Sellers</li>
                  <li>SNKRS Launch Calendar</li>
                  <li>National Teams Collection</li>
                </ul>
              </div>
              <div>
                <h3>New For Men</h3>
                <ul>
                  <li>Shoes</li>
                  <li>Clothing</li>
                  <li>Equipment</li>
                  <li>Shop All New Men's</li>
                </ul>
              </div>
              <div>
                <h3>New For Women</h3>
                <ul>
                  <li>Shoes</li>
                  <li>Clothing</li>
                  <li>Equipment</li>
                  <li>Shop All New Women's</li>
                </ul>
              </div>
              <div>
                <h3>New For Kids</h3>
                <ul>
                  <li>Boys' Shoes</li>
                  <li>Boys' Clothing</li>
                  <li>Girls' Shoes</li>
                  <li>Girls' Clothing</li>
                  <li>Shop All New Kids'</li>
                </ul>
              </div>
              <div>
                <h3>Shop By Brand</h3>
                <ul>
                  <li>Nike Sportswear</li>
                  <li>NikeLab</li>
                  <li>Jordan</li>
                  <li>Nike SB</li>
                  <li>ACG</li>
                  <li>Nike Pro</li>
                </ul>
              </div>
            </div>
          </li>
          <li className="men">
            Men
            <div className="dropdown-container">
              <div className="featured">
                <h3>New&Featured</h3>
                <ul>
                  <li>New Releases</li>
                  <li>Best Sellers</li>
                  <li>Best of Air Max</li>
                  <li>Every Stitch Considered</li>
                  <li>Roswell Rayguns Gear</li>
                  <li>Let's Go Trail Running</li>
                  <li>Spring Break Styles</li>
                  <li>Sale - Up to 40% Off</li>
                </ul>
              </div>
              <div>
                <h3>Shoes</h3>
                <ul>
                  <li>Lifestyle</li>
                  <li>Running</li>
                  <li>Basketball</li>
                  <li>Jordan</li>
                  <li>Training & Gym</li>
                  <li>Soccer</li>
                  <li>Golf</li>
                  <li></li>
                  <li>Track & Field</li>
                  <li>Skateboarding</li>
                  <li>Tennis</li>
                  <li>Baseball</li>
                  <li>Boots</li>
                  <li>Sandals & Slides</li>
                  <li>Shoes $100 & Under</li>
                  <li>All Shoes</li>
                </ul>
              </div>
              <div>
                <h3>Clothing</h3>
                <ul>
                  <li>Tops & T-Shirts</li>
                  <li>Clothing</li>
                  <li>Shorts</li>
                  <li>Hoodies & Sweatshirts</li>
                  <li>Pants & Tights</li>
                  <li>Jackets & Vests</li>
                  <li>Swimwear</li>
                  <li>Polos</li>
                  <li>Nike Pro</li>
                  <li>Yoga</li>
                  <li>Socks & Underwear</li>
                  <li>Big & Tall</li>
                  <li>All Clothing</li>
                </ul>
              </div>
              <div>
                <h3>Shop Collection</h3>
                <ul>
                  <li>Golf</li>
                  <li>Soccer</li>
                  <li>Running</li>
                  <li>Basketball</li>
                  <li>Tennis</li>
                  <li>NikeLab</li>
                  <li>Training & Gym</li>
                  <li>Football</li>
                  <li>Baseball</li>
                  <li>Nike Sportswear</li>
                  <li>Skateboarding</li>
                  <li>Lacrosse</li>
                  <li>Nike FlyEase</li>
                </ul>
              </div>
            </div>
          </li>
          <li className="women">
            Woman
            <div className="dropdown-container">
              <div className="featured">
                <h3>New&Featured</h3>
                <ul>
                  <li>New Releases</li>
                  <li>Best Sellers</li>
                  <li>Best of Air Max</li>
                  <li>Every Stitch Considered</li>
                  <li>Roswell Rayguns Gear</li>
                  <li>Let's Go Trail Running</li>
                  <li>Spring Break Styles</li>
                  <li>Sale - Up to 40% Off</li>
                </ul>
              </div>
              <div>
                <h3>Shoes</h3>
                <ul>
                  <li>Lifestyle</li>
                  <li>Running</li>
                  <li>Basketball</li>
                  <li>Jordan</li>
                  <li>Training & Gym</li>
                  <li>Soccer</li>
                  <li>Golf</li>
                  <li></li>
                  <li>Track & Field</li>
                  <li>Skateboarding</li>
                  <li>Tennis</li>
                  <li>Baseball</li>
                  <li>Boots</li>
                  <li>Sandals & Slides</li>
                  <li>Shoes $100 & Under</li>
                  <li>All Shoes</li>
                </ul>
              </div>
              <div>
                <h3>Clothing</h3>
                <ul>
                  <li>Tops & T-Shirts</li>
                  <li>Clothing</li>
                  <li>Shorts</li>
                  <li>Hoodies & Sweatshirts</li>
                  <li>Pants & Tights</li>
                  <li>Jackets & Vests</li>
                  <li>Swimwear</li>
                  <li>Polos</li>
                  <li>Nike Pro</li>
                  <li>Yoga</li>
                  <li>Socks & Underwear</li>
                  <li>Big & Tall</li>
                  <li>All Clothing</li>
                </ul>
              </div>
              <div>
                <h3>Shop Collection</h3>
                <ul>
                  <li>Golf</li>
                  <li>Soccer</li>
                  <li>Running</li>
                  <li>Basketball</li>
                  <li>Tennis</li>
                  <li>NikeLab</li>
                  <li>Training & Gym</li>
                  <li>Football</li>
                  <li>Baseball</li>
                  <li>Nike Sportswear</li>
                  <li>Skateboarding</li>
                  <li>Lacrosse</li>
                  <li>Nike FlyEase</li>
                </ul>
              </div>
            </div>
          </li>
          <li className="customize">
            Customize
            <div className="dropdown-container">
              <div className="featured">
                <h3>New&Featured</h3>
                <ul>
                  <li>Customize with Nike By You</li>
                  <li>Nike By You New Releases</li>
                  <li>Basketball By You</li>
                  <li>Blazer By You</li>
                </ul>
              </div>
              <div>
                <h3>Mens</h3>
                <ul>
                  <li>Basketball</li>
                  <li>Lifestyle</li>
                  <li>Running</li>
                  <li>Football</li>
                  <li>Training & Gym</li>
                  <li>Soccer</li>
                  <li>Golf</li>
                </ul>
              </div>
              <div>
                <h3>Womens</h3>
                <ul>
                  <li>Lifestyle</li>
                  <li>Running</li>
                  <li>Training & Gym</li>
                  <li>Basketball</li>
                  <li>Soccer</li>
                  <li>Softball</li>
                  <li>Skateboarding</li>
                </ul>
              </div>
            </div>
          </li>
          <li className="sale">
            Sales
            <div className="dropdown-container">
              <div className="featured">
                <h3>Sale</h3>
                <ul>
                  <li>Sale - Up to 40% Off</li>
                </ul>
              </div>
              <div>
                <h3>Mens Sale</h3>
                <ul>
                  <li>Shoes</li>
                  <li>Clothing</li>
                  <li>Equipment</li>
                </ul>
              </div>
              <div>
                <h3>Womens's Sale</h3>
                <ul>
                  <li>Shoes</li>
                  <li>Clothing</li>
                  <li>Equipment</li>
                </ul>
              </div>
              <div>
                <h3>Kids's Sale</h3>
                <ul>
                  <li>Shoes</li>
                  <li>Clothing</li>
                  <li>Equipment</li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
        <div className="nav-icons">
          <Link to={`/favorite`}>
            <i class="far fa-heart"></i>
          </Link>
          <Link to="/cart">
            <i class="fas fa-shopping-bag"></i>
          </Link>
        </div>
        <i class="fas fa-bars menu"></i>
      </nav>
    </section>
  );
};

export default NavBar;
