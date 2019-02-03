import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Contacts from "./components/Contacts";

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Navbar />
      <ProductList />
      <Details />
      <Cart />
      <Default />
      <Contacts />
      </React.Fragment>
    );
  }
}

export default App;
