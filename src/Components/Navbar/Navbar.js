import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import navImage from "../../Assets/images/logo.png";
const Navbar = () => {
  const cart = useSelector((state) => state.cart).reduce(
    (acc, crr) => acc + crr.productQuantity,
    0
  );
  console.log(cart);
  return (
    <nav class="bg-[#171C2A] py-4">
      <div class="navBar">
        <Link to="/">
          <img src={navImage} alt="LWS" class="max-w-[140px]" />
        </Link>

        <div class="flex gap-4">
          <Link to="/" class="navHome" id="lws-home">
            {" "}
            Home{" "}
          </Link>
          <Link to="/cart" class="navCart" id="lws-cart">
            <i class="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="lws-totalCart">{cart}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
