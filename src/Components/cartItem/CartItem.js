import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cartProductDecrement,
  cartProductIncrement,
  deleteFromCart
} from "../../Redux/cart/action/action";

import {
  deleteRefund,
  increaseQuantity,
  reduceQuantity
} from "../../Redux/Products/action/action.js";

const CartItem = ({ product }) => {
  const [productNill, setProductNill] = useState(1);
  console.log(productNill);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const handleDeleteProduct = (id) => {
    dispatch(deleteFromCart(id));
    console.log(product.productQuantity);
    dispatch(deleteRefund(id, product.productQuantity));
  };

  const handleProductIncrement = (id) => {
    dispatch(cartProductIncrement(id));
    dispatch(reduceQuantity(id));
    const availableProduct =
      products.find((product) => product.id === id).productQuantity - 1;
    setProductNill(availableProduct);
  };

  const handleProductDecrement = (id) => {
    dispatch(cartProductDecrement(id));
    const availableProduct =
      products.find((product) => product.id === id).productQuantity - 1;
    setProductNill(availableProduct);
    dispatch(increaseQuantity(id));
  };

  return (
    <div class="cartCard">
      <div class="flex items-center col-span-6 space-x-6">
        {/* <!-- cart image --> */}
        <img class="lws-cartImage" src={product.productImage} alt="product" />
        {/* <!-- cart item info --> */}
        <div class="space-y-2">
          <h4 class="lws-cartName">{product.productName}</h4>
          <p class="lws-cartCategory">{product.category}</p>
          <p>
            BDT <span class="lws-cartPrice">{product.productPrice}</span>
          </p>
        </div>
      </div>
      <div class="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        {/* <!-- amount buttons --> */}
        <div class="flex items-center space-x-4">
          <button
            disabled={!productNill}
            onClick={() => handleProductIncrement(product.id)}
            class="lws-incrementQuantity"
          >
            <i class="text-lg fa-solid fa-plus"></i>
          </button>
          <span class="lws-cartQuantity">{product.productQuantity}</span>
          <button
            disabled={product.productQuantity === 1}
            onClick={() => handleProductDecrement(product.id)}
            class="lws-decrementQuantity"
          >
            <i class="text-lg fa-solid fa-minus"></i>
          </button>
        </div>
        {/* <!-- price --> */}
        <p class="text-lg font-bold">
          BDT{" "}
          <span class="lws-calculatedPrice">
            {product.productQuantity * product.productPrice}
          </span>
        </p>
      </div>
      {/* <!-- delete button --> */}
      <div class="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button
          onClick={() => handleDeleteProduct(product.id)}
          class="lws-removeFromCart"
        >
          <i class="text-lg text-red-400 fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
