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
            <a href="#MI">
              <i class="fas fa-arrow-right"></i> Mobiles
            </a>
            <span>Mi</span>
            <span>Realme</span>
            <span>Samsung</span>
            <span>Infinix</span>
            <span>OPPO</span>
            <span>Apple</span>
            <span>Vivo</span>
            <span>Honor</span>
            <span>Asus</span>
          </div>
        </span>
        <span className="header1">
          <a href="">
            TVs & Appliances <i class="fas fa-chevron-down"></i>
          </a>
        </span>
        <span>
          Men<i class="fas fa-chevron-down"></i>
        </span>
        <span>
          Women<i class="fas fa-chevron-down"></i>
        </span>
        <span>Baby & Kids</span>
        <span>Home & Furniture</span>
        <span>Sports, Books & More</span>
        <span>Flights</span>
        <span>Offers</span>
      </div>
    </div>
  );
};

export default HeaderBottom;
