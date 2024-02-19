import React, { useEffect, useState } from "react";
import "./Popular.css";
// import product_data from "../Assets/data";
import Item from "../Items/Item";
const baseurl = window.location.origin;

const Popular = () => {
  const [popularProduct, setPopularProduct] = useState([]);

  useEffect(() => {
    fetch(`${baseurl}/popularinwomen`)
      .then((response) => response.json())
      .then((data) => setPopularProduct(data));
  }, []);

  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {popularProduct.map((item, i) => {
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
        })}
      </div>
    </div>
  );
};

export default Popular;
