import React from "react";
import NavBar from "./Componets/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoninSigup from "./Pages/LoginSinup";
import Footer from "./Componets/Footer/Footer";
import men_banner from "./Componets/Assets/banner_mens.png";
import women_banner from "./Componets/Assets/banner_women.png";
import kid_banner from "./Componets/Assets/banner_kids.png";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory banner={men_banner} category="men" />}
          />
          <Route
            path="/women"
            element={<ShopCategory banner={women_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kid_banner} category="kid" />}
          />

          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>

          {/* <Route path="/product/:productId" element={<Product />} /> */}

          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoninSigup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
