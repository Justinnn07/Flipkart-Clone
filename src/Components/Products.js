import React from "react";
import ProductCard from "./ProductCard";
import "./Products.css";

const Products = () => {
  return (
    <div className="products">
      <h2>Deals of the Day</h2>
      <div className="productCarrd">
        <ProductCard
          title="Home Furnishing Range"
          img="https://rukminim1.flixcart.com/image/150/150/k5wse4w0/curtain/y/a/z/crdoublewin3-152-doublewindow-curtain-3-eyelet-flipkart-smartbuy-original-imafzhg5w5hcqb6c.jpeg?q=70"
          rate="From ₹129"
          item="Bedsheets & more"
        />
        <ProductCard
          title="Headphones & Speakers"
          img="https://rukminim1.flixcart.com/image/150/150/k9stjm80/headphone/y/u/x/rockerz-255-pro-fast-charging-rockerz-255f-pro-boat-original-imafrgnpjpu7zfgz.jpeg?q=70"
          rate=" Upto 50% off"
          item="JBL,Sony & More"
        />
        <ProductCard
          title="Pendrives & Memory Card"
          img="https://images-na.ssl-images-amazon.com/images/I/61yKk3TYgUL._SX466_.jpg"
          rate="From ₹429"
          item="ScanDisk & More"
        />
        <ProductCard
          title="Bookshelves & more"
          img="https://rukminim1.flixcart.com/image/200/200/k5y7tzk0/book-shelf/k/m/n/galvanised-steel-sj030405-flipkart-perfect-homes-studio-plain-original-imafzgsguethpnmz.jpeg?q=70"
          rate="From  ₹199"
          item="Deal Of the Day"
        />
        <ProductCard
          title="Designer Back Covers"
          img="https://rukminim1.flixcart.com/flap/200/200/image/2a063e2d08528f5f.jpg?q=70"
          rate="Just ₹179"
          item="For All Top Models"
        />
        <ProductCard
          title="Mobile Back Covers"
          img="https://rukminim1.flixcart.com/image/200/200/k3lwuq80/cases-covers/back-cover/k/x/z/ragnar-dsk-253-original-imafe94udfy4z8pm.jpeg?q=70"
          rate="Extra 10% Off"
          item="From Cartoon/Glitter"
        />
        <ProductCard
          title="Home Decor Range"
          img="https://rukminim1.flixcart.com/image/200/200/k0wqwsw0/rack-shelf/u/z/7/ws09-wora-original-imafkhhynyh7zjch.jpeg?q=70"
          rate="From ₹89"
          item="Stickers,Clocks & more"
        />
      </div>
    </div>
  );
};

export default Products;
