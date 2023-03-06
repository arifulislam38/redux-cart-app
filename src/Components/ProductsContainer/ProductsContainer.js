import React from "react";
import { useSelector } from "react-redux";
import Products from "../Products/Products";

const ProductsContainer = () => {
  const state = useSelector((state) => state.products);
  console.log(state);
  return (
    <div class="productContainer" id="lws-productContainer">
      {state.length > 0 ? (
        state
          .sort((a, b) => a.id - b.id)
          .map((product) => <Products product={product}></Products>)
      ) : (
        <p className="text-center font-bold font-xl">No product are available</p>
      )}
    </div>
  );
};

export default ProductsContainer;
