
import React from 'react'
import axios from "axios";
import CategoriesList from './CategoriesList';

const getProducts = async () => {
  const { data } = await axios.get("https://dummyjson.com/products/categories");
  return data;
};
const CategorySidebar = async() => {
   const productsData = await getProducts();
  //  console.log(productsData.length)
  return (
    <div className='p-4 d-none d-lg-block '>
      <p className='text-info'>Categories</p>
      {productsData?.map((arr) => (
        <CategoriesList category={arr}></CategoriesList>
      ))}
    </div>
  );
}

export default CategorySidebar