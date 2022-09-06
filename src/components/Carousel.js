import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Carousels() {
  return (
    <div className="carousel">
      <ControlledCarousel />
    </div>
  );
}

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 h-200"
          src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/69ea66e19625199f.jpg?q=50"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-200"
          src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/69ea66e19625199f.jpg?q=50"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-200"
          src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/69ea66e19625199f.jpg?q=50"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
