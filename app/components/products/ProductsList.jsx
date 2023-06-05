"use client";
import React from "react";
import ProductItems from "./ProductItems";

const ProductsList = ({ productsData }) => {
  const products = productsData.products;
  // console.log(products)
  return (
    <div className="container bsic-container mt-4">
      <div className="row">
        {products.slice(0, 5)?.map((product) => (
          <ProductItems product={product}></ProductItems>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
