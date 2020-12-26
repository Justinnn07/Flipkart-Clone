import React from "react";
import "./App.css";
import Ads from "./Components/Ads";
import Footer from "./Components/Footer";
import HeaderBottom from "./Components/HeaderBottom";
import PhoneAds from "./Components/PhoneAds";
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
      <PhoneAds />
      <Footer />
    </div>
  );
};

export default App;
