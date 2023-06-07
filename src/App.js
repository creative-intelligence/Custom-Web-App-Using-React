import React from "react";
import Home from "./components/Page/Home";
import "./App.css";
// import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./fontawesome-free-6.4.0-web/css/all.min.css";
import Products from "./components/Page/Products";
import Shop from "./components/Page/Shop";
import Cart from "./components/Shop/Cart";
import { CartProvider } from "./components/Shop/CartContext";
// import ModalTest from "./components/Page/ModalTest";

function App() {
  return (
    <CartProvider>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </Router>
     </CartProvider>
  );
}

export default App;
