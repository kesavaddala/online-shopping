import React from "react";
import Carousels from "./Carousel";
import Header from "./header";
import HeaderCat from "./HeaderCat";
import Module from "./module";
import ProductList from "./productList";

export default function HomePath() {
  return (
    <div>
      <Header />
      <HeaderCat />
      <Carousels />
      {/* <Module /> */}
      <ProductList />
    </div>
  );
}
