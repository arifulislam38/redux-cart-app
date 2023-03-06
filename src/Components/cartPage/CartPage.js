import React from "react";
import { useSelector } from "react-redux";
import BillDetails from "../BillDetails/BillDetails";
import CartItem from "../cartItem/CartItem";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <body>
        <main class="py-16">
          <div class="container 2xl:px-8 px-2 mx-auto">
            <h2 class="mb-8 text-xl font-bold">Shopping Cart</h2>
            <div class="cartListContainer">
              <div class="space-y-6">
                {cart
                 
                  .map((product) => (
                    <CartItem product={product}></CartItem>
                  ))}
              </div>
              <BillDetails></BillDetails>
            </div>
          </div>
        </main>
      </body>
    </div>
  );
};

export default CartPage;
