import React from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductDitails from "./components/ProductDetails";
import Products from "./components/Products";
import Cart from "./components/Cart";
import FavoriteList from "./components/FavoriteList";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" component={Main} />
      <Route path="/products" component={Products} />
      <Route exact path="/details/:id" component={ProductDitails} />
      <Route path="/cart/:id?" component={Cart} />
      <Route exact path="/favorite/:id?" component={FavoriteList} />
      <Footer />
    </Router>
  );
};

export default App;
