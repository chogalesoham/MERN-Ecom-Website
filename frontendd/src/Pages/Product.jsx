import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Componets/Breadcrums/Breadcrum";
import ProductDisplay from "../Componets/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Componets/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Componets/RelatedProducts/RelatedProducts";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  // console.log(productId);

  const product = all_product.find((e) => e.id === Number(productId));

  // console.log(all_product);
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
};

export default Product;
