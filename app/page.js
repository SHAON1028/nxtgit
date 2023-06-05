import React from "react";

import ProductsList from "./components/products/ProductsList";
import axios from "axios";
import Header from "./components/Header";
import Slider2 from "./components/slider2/Slider2";
import Slider from "./components/slider/Slider";
import ShopByCategory from "./components/ShopBycategory/ShopByCategory";

const getProducts = async () => {
  const { data } = await axios.get("https://dummyjson.com/products");
  return data;
};
const HomePage = async () => {
  const productsData = await getProducts();
  //  console.log(productsData)

  return (
    <div className="mx-auto">
      <Slider></Slider>
      <Slider2></Slider2>
      <h2 className="text-center font-weight-bold text-danger mt-5">
        Shop by Category
      </h2>
      <ShopByCategory></ShopByCategory>
      <ProductsList productsData={productsData}></ProductsList>
    </div>
  );
};

export default HomePage;
