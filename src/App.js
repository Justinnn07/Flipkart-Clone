import React from "react";
import "./App.css";
import Ads from "./Components/Ads";
import HeaderBottom from "./Components/HeaderBottom";
import Header from "./Header";

const App = () => {
  return (
    <div className="app">
      <Header />
      <HeaderBottom />
      <Ads />
    </div>
  );
};

export default App;
