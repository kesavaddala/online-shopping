import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import fontawesome from "@fontawesome/fontawesome";
// import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart, faSearch, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { NavLink } from "react-bootstrap";

export default function Header() {
  const [user, setUser] = useState("kesav");
  return (
    <div className="header">
      <Link to={"/"} className="link">
        <img
          className="header_logo"
          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
          alt=""
        />
      </Link>
      <div className="header_search">
        <form className="header_form">
          <div>
            <input className="header_searchBar" type={"search"} />
          </div>
          <button className="header_searchIcon" type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
      <Link to={"/user"} className="link">
        <div className="header_userName">{user}</div>
      </Link>
      <Link to={"/Became a seller"} className="link">
        <div className="header_seller">Became a Seller</div>
      </Link>
      <Link to={"/more"} className="link">
        <div className="header_more">
          <div>More</div>
          <div>
            <FontAwesomeIcon icon={faAngleDown} className="header_icon" />
          </div>
        </div>
      </Link>
      <Link to={"/cart"} className="link">
        <div className="header_cart">
          <FontAwesomeIcon icon={faShoppingCart} />
          Cart
        </div>
      </Link>
    </div>
  );
}
