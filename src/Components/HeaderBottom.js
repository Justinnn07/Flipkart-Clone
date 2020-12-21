import { Select } from "@material-ui/core";
import { ArrowDropDown } from "@material-ui/icons";
import React from "react";
import "./HeaderBottom.css";

const HeaderBottom = () => {
  return (
    <div className="headerBottom">
      <div className="header-span">
        <span>Electronics</span>
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
