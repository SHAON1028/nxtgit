import React from 'react'
import axios from "axios";
import ProductItems from '../products/ProductItems';


const GetProducts =async ({categoryName}) => {

    const getProducts = async () => {
      const { data } = await axios.get(
        `https://dummyjson.com/products/category/${categoryName}`
      );
      return data;
    };

     const productsData =await getProducts(); 
     const {products} = productsData

  return (
    <div className="container bsic-container mt-4">
      <div className="row">
        {products?.map((product) => (
          <ProductItems product={product}></ProductItems>
        ))}
      </div>
    </div>
  );
}

export default GetProducts