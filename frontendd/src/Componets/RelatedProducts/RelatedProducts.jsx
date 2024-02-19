import React, { useEffect, useState } from "react";
import "./RelatedProducts.css";
import Item from "../Items/Item";
const baseurl = window.location.origin;

const RelatedProducts = () => {
  const [new_collection, setNew_collection] = useState([]);
  console.log(new_collection);

  useEffect(() => {
    fetch("${baseurl}/newcollections")
      .then((respons) => respons.json())
      .then((data) => setNew_collection(data));
  }, []);

  return (
    <div className="relatedProducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedProducts-item">
        {new_collection.map((item, i) => {
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
      </div>{" "}
    </div>
  );
};

export default RelatedProducts;
