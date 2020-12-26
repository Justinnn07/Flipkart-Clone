import React from "react";
import "./ProductCard.css";

const ProductCard = ({ img, title, rate, item }) => {
  return (
    <div className="productCard">
      <div className="styles">
        <div className="styles1">
          <img src={img} alt="" />
          <h5 className="home">{title}</h5>
          <h5 className="From">{rate}</h5>
          <h5 className="Bedsheet">{item}</h5>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
