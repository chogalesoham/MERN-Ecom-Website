import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import add_product_icon from "../../assets/Product_Cart.svg";
import list_product_icon from "../../assets/Product_list_icon.svg";

const Sidebar = () => {
  return (
    <div className="side-bar">
      <Link to={"/addproduct"}>
        <div className="sidebar-item">
          <img src={add_product_icon} />
          <p>Add Product</p>
        </div>
      </Link>

      <Link to={"/listproduct"}>
        <div className="sidebar-item">
          <img src={list_product_icon} />
          <p>Product List</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
