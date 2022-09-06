import React from "react";
// import topOffers from "../Assets/topOffer.png";
import { Link } from "react-router-dom";

export default function HeaderCat() {
  return (
    <div className="categories">
      <Link to={"/top offer"} className="links">
        <div>
          <div className="categories_img">
            <img
              className="categories_img"
              src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
              alt=""
            />
          </div>
          <div className="categories_Name">Top Offer</div>
        </div>
      </Link>
      <Link to={"/Grocery"} className="links">
        <div>
          <div className="categories_img">
            <img
              className="categories_img"
              src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"
              alt=""
            />
          </div>
          <div className="categories_Name">Grocery</div>
        </div>
      </Link>
      <Link to={"Mobiles"} className="links">
        <div>
          <div className="categories_img">
            <img
              className="categories_img"
              src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"
              alt=""
            />
          </div>
          <div className="categories_Name">Mobiles</div>
        </div>
      </Link>
      <Link to={"Fashion"} className="links">
        <div>
          <div className="categories_img">
            <img
              className="categories_img"
              src="https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100"
              alt=""
            />
          </div>
          <div className="categories_Name">Fashion</div>
        </div>
      </Link>
      <Link to={"Electronics"} className="links">
        <div>
          <div className="categories_img">
            <img
              className="categories_img"
              src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"
              alt=""
            />
          </div>
          <div className="categories_Name">Electronics</div>
        </div>
      </Link>
      <Link to={"Home"} className="links">
        <div>
          <div className="categories_img">
            <img
              className="categories_img"
              src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100"
              alt=""
            />
          </div>
          <div className="categories_Name">Home</div>
        </div>
      </Link>
      <Link to={"Appliances"} className="links">
        <div>
          <div className="categories_img">
            <img
              className="categories_img"
              src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100"
              alt=""
            />
          </div>
          <div className="categories_Name">Appliances</div>
        </div>
      </Link>
      <Link to={"Travel"} className="links">
        <div>
          <div className="categories_img">
            <img
              className="categories_img"
              src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100"
              alt=""
            />
          </div>
          <div className="categories_Name">Travel</div>
        </div>
      </Link>
      <Link to={"toys"} className="links">
        <div>
          <div className="categories_img">
            <img
              src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"
              alt=""
              className="categories_img"
            />
          </div>
          <div className="categories_Name">Beauty, Toys & More</div>
        </div>
      </Link>
    </div>
  );
}
