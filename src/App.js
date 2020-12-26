import React from "react";
import "./App.css";
import Ads from "./Components/Ads";
import HeaderBottom from "./Components/HeaderBottom";
import Products from "./Components/Products";
import Slides from "./Components/Slides";
import Header from "./Header";

const App = () => {
  return (
    <div className="app">
      <Header />
      <HeaderBottom />
      <Ads />
      <Slides />
      <Products />
    </div>
  );
};

export default App;
