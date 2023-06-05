import React from 'react'
import Image from 'next/image'
import img from "../../../public/img/bogo.webp"
import img1 from "../../../public/img/fvtl-mid.webp"
const Slider2 = () => {
  return (
    <div className="d-lg-flex mt-3 gap-4">
      <Image
        className="d-block w-100"
        src={img}
        alt="First slide"
        width={500}
        height={300}
      />
      <Image
        className="d-block w-100"
        src={img1}
        alt="First slide"
        width={500}
        height={300}
      />
    </div>
  );
}

export default Slider2