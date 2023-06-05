"use client"
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import img1 from "../../../public/img/5wmjOPu44npRSVgfg35pqlPgNewB5MgXfydDJmgg.webp"
import img2 from "../../../public/img/GYrfrBdvYXDUHUNlSBqWYdUPTRzdTfsJek8Q6Q58.webp"
function CarouselFadeExample() {
  return (
    <div className="mt-3">
      <Carousel fade>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={img1}
            alt="First slide"
            width={500}
            height={300}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={img2}
            alt="Second slide"
            width={500}
            height={300}
          />
        </Carousel.Item>
        
      </Carousel>
    </div>
  );
}

export default CarouselFadeExample;
