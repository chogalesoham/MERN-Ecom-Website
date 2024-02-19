import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  // console.log(product);
  return (
    <div className="productDiplay">
      <div className="productDisplay-left">
        <div className="productDisplay-img-left">
          <img src={product.image} />
          <img src={product.image} />
          <img src={product.image} />
          <img src={product.image} />
        </div>
        <div className="productDisplay-img">
          <img className="productDisplay-main-img" src={product.image} />
        </div>
      </div>

      <div className="productDisplay-right">
        <h1>{product.name}</h1>
        <div className="productDisplay-right-stars">
          <img src={star_icon} />
          <img src={star_icon} />
          <img src={star_icon} />
          <img src={star_icon} />
          <img src={star_dull_icon} />
          <p>(122)</p>
        </div>
        <div className="productDisplay-right-prices">
          <div className="productDispay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productDispay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productDisplay-right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          asperiores ipsam ipsa cumque id, et quidem delectus dolorem? Quas
          optio nemo aliquid quo, repudiandae eaque dolor, temporibus obcaecati
          asperiores est minima, iusto animi ullam....
        </div>
        <div className="productDisplay-right-size">
          <h1>Select Size</h1>
          <div className="productDisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CARD
        </button>
        {/* <div className="productDisplay-right-category">
          <span>Category:</span> Women, T-Shirt, Crop Top
        </div> */}
        {/* <div className="productDisplay-right-category">
          <span>Category:</span> Modern,Latest
        </div> */}
      </div>
    </div>
  );
};

export default ProductDisplay;
