import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from '../../Redux/cart/action/action';
import { reduceQuantity } from "../../Redux/Products/action/action";

const Products = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleProductReducer = (id) => {
    dispatch(reduceQuantity(id));
  };
  return (
    <div class="lws-productCard">
      <img class="lws-productImage" src={product.productImage} alt="product" />
      <div class="p-4 space-y-2">
        <h4 class="lws-productName">{product.productName}</h4>
        <p class="lws-productCategory">{product.category}</p>
        <div class="flex items-center justify-between pb-2">
          <p class="productPrice">
            BDT <span class="lws-price">{product.productPrice}</span>
          </p>
          <p class="productQuantity">
            QTY <span class="lws-quantity">{product.productQuantity}</span>
          </p>
        </div>
        <button
          disabled={!product.productQuantity}
          class="lws-btnAddToCart"
          onClick={() => {
            handleAddToCart(product);
            handleProductReducer(product.id);
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Products;
