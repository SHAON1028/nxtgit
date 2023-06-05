import axios from 'axios';
import Link from 'next/link';
import React from 'react'
import { FaStar } from 'react-icons/fa';
  const getProducts = async (id) => {
    const url = `https://dummyjson.com/products/${id}`;
    console.log(url);
    const { data } = await axios.get(url);
    return data;
    // console.log("sadasdasda");
  };
    
const SingleProduct =async ({params:{id}}) => {

     const productsData =await getProducts(id); 
    //  console.log(productsData)
     const { title, description, price, rating, brand, category, images,stock } =
       productsData;
       console.log(rating)

   
 
  return (
    <div className="w-75 mx-auto mt-5 ">
      <div className="d-lg-flex gap-5">
        <img className='img-fluid ' src={images[0]} alt="" />
        <div>
          <h2 className="text-bold mt-2">{title}</h2>
          <div>
            <p>stock: {stock}</p>
          </div>
          <h6 className="">Price: <span className=''>{price}</span></h6>
          <button className="btn btn-danger my-2">ADD TO CART</button>
        </div>
      </div>
      <div className="mt-5">
        <h5 className="p-2 border-bottom w-50 ">DESCRIPTION</h5>
        <div className="w-50">
          <p>{description}</p>
          <p>Category: {category}</p>
          <p>Brand: {brand}</p>
          <div className="d-flex ">
            <p className="pe-2">Rating:</p>
            {[...Array(parseInt(rating))].map((str) => (
              <FaStar color="gold" />
            ))}
          </div>
          <button type="button" class="btn btn-outline-primary">
           <Link className='text-dark text-decoration-none' href="/">Back to Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct