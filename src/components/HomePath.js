import React from "react";
import Carousels from "./Carousel";
import Header from "./header";
import HeaderCat from "./HeaderCat";

export default function HomePath() {
  return (
    <div>
      <Header />
      <HeaderCat />
      <Carousels />
    </div>
  );
}
