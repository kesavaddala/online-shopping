import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../Data/data.json";

export default function ProductList() {
  const [item, setItem] = useState([]);
  useEffect(() => {
    setItem(data);
  }, []);

  return (
    <div className="product">
      <div className="productList">
        {item.map((e) => {
          return (
            <Link to={e.itemDetails.product_link} key={e.id} className="productListDetails">
              <div>
                <div>
                  <img src={e.itemDetails.product_image} alt="" className="productListItem" />
                </div>
                <div className="productDetails">{e.itemDetails.product_name}</div>
                <div className="productDetails">Rs.{e.itemDetails.product_price}</div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="productList">
        {item.map((e) => {
          return (
            <Link to={e.itemDetails.product_link} key={e.id} className="productListDetails">
              <div>
                <div>
                  <img src={e.itemDetails.product_image} alt="" className="productListItem" />
                </div>
                <div className="productDetails">{e.itemDetails.product_name}</div>
                <div className="productDetails">Rs.{e.itemDetails.product_price}</div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="productList">
        {item.map((e) => {
          return (
            <Link to={e.itemDetails.product_link} key={e.id} className="productListDetails">
              <div>
                <div>
                  <img src={e.itemDetails.product_image} alt="" className="productListItem" />
                </div>
                <div className="productDetails">{e.itemDetails.product_name}</div>
                <div className="productDetails">Rs.{e.itemDetails.product_price}</div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="productList">
        {item.map((e) => {
          return (
            <Link to={e.itemDetails.product_link} key={e.id} className="productListDetails">
              <div>
                <div>
                  <img src={e.itemDetails.product_image} alt="" className="productListItem" />
                </div>
                <div className="productDetails">{e.itemDetails.product_name}</div>
                <div className="productDetails">Rs.{e.itemDetails.product_price}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
