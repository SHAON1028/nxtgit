
import React from "react";
import Image from "next/image";
import img from "../../../public/img/cat06c2a4620882ae6e833425dc21088bfd.jpg";
import Link from "next/link";
const ShopByCategoryCard = ({ category }) => {
  return (
    <div className="col-md-4 col-lg-2 col-xl-2  mb-5 ">
      <div className=" mb-4">
        <Image
          src={img}
          className="img-fluid"
          alt
        />
      </div>
      <div className="card-body mb-4 ">
        <Link href={`/category/${category}`} className="text-decoration-none">
          <p className="text-danger text-center text-uppercase text-bold ">
            {category}
          </p>
        </Link>
      </div>
      {/* </div> */}
    </div>
  );
};

export default ShopByCategoryCard;
