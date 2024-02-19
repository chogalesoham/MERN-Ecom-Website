import React, { useContext } from "react";
import "./css/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Componets/Assets/dropdown_icon.png";
import Item from "../Componets/Items/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  // console.log(all_product);
  return (
    <div className="shop-category">
      <img className="shopCategoryBanner" src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span>out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>

      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          {
            /* console.log(props.category); */
          }
          if (props.category == item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                img={item.image}
                name={item.name}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopCategory-loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategory;
