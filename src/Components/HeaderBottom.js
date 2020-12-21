import React from "react";
import "./HeaderBottom.css";

const HeaderBottom = () => {
  return (
    <div className="headerBottom">
      <div className="header-span">
        <span className="head">
          <a href="/">Electronics</a>
          <i class="fas fa-chevron-down"></i>
          <div className="dropdown-content">
            <a href="/">Link 1</a>
            <a href="/">Link 2</a>
            <a href="/">Link 3</a>
          </div>
        </span>
        <span>TVs & Appliances</span>
        <span>Men</span>
        <span>Women</span>
        <span>Baby & Kids</span>
        <span>Home & Furniture</span>
        <span>Sports, Books & More</span>
        <span>Flights</span>
        <span>Offer Zone</span>
      </div>
    </div>
  );
};

export default HeaderBottom;
