import React from 'react'
import CategorySidebar from '../categorySidebar/CategorySidebar'
import axios from "axios";
import ShopByCategoryCard from './ShopByCategoryCard';
const getProducts = async () => {
  const { data } = await axios.get("https://dummyjson.com/products/categories");
  return data;
};
const ShopByCategory = async() => {
      const productsData = await getProducts(); 
    //   console.log(productsData.length)
  return (
    <div>
      <div className="mt-5 container bsic-container    ">
        <div className="row container">
          {productsData?.slice(0, 12).map((arr) => (
            <ShopByCategoryCard category={arr}></ShopByCategoryCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShopByCategory