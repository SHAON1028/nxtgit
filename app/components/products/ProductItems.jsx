import React from "react";
import Image from "next/image";
import Link from "next/link";
const ProductItems = ({ product }) => {
  const { title, description, images, price,id } = product;
   console.log(id);
  return (
    <div className="col-md-4 col-lg-4 col-xl-4 mb-5 alignDisplay">
      <Link href={`/singleProduct/${id}`}>
        
        <div className="card mb-4">
          <img
            src={images[0]}
            className="card-img-top"
            alt
            width={250}
            height={250}
          />
        </div>
      </Link>
      <div className="card-body mb-4">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="text-bold">Price: ${price} </p>
      </div>
      <div>
        <button className="btn btn-primary">
          ADD TO CART
        </button>
      </div>
      {/* </div> */}
    </div>
    //   </div>
    // </div>
  );
};

export default ProductItems;
