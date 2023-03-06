import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProducts } from "../../Redux/Products/action/action";

const ProductInputForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    dispatch(addProducts(data));
    reset()
  };

  return (
    <div class="formContainer">
      <h4 class="formTitle">Add New Product</h4>
      <form
        onSubmit={handleSubmit(onSubmit)}
        class="space-y-4 text-[#534F4F]"
        id="lws-addProductForm"
      >
        {/* <!-- product name --> */}
        <div class="space-y-2">
          <label for="lws-inputName">Product Name</label>
          <input
            class="addProductInput"
            id="lws-inputName"
            type="text"
            {...register("productName")}
            required
          />
        </div>
        {/* <!-- product category --> */}
        <div class="space-y-2">
          <label for="lws-inputCategory">Category</label>
          <input
            class="addProductInput"
            id="lws-inputCategory"
            type="text"
            {...register("category")}
            required
          />
        </div>
        {/* <!-- product image url --> */}
        <div class="space-y-2">
          <label for="lws-inputImage">Image Url</label>
          <input
            class="addProductInput"
            id="lws-inputImage"
            type="text"
            {...register("productImage")}
            required
          />
        </div>
        {/* <!-- price & quantity container --> */}
        <div class="grid grid-cols-2 gap-8 pb-4">
          {/* <!-- price --> */}
          <div class="space-y-2">
            <label for="ws-inputPrice">Price</label>
            <input
              class="addProductInput"
              type="number"
              id="lws-inputPrice"
              {...register("productPrice")}
              required
            />
          </div>
          {/* <!-- quantity --> */}
          <div class="space-y-2">
            <label for="lws-inputQuantity">Quantity</label>
            <input
              class="addProductInput"
              type="number"
              id="lws-inputQuantity"
              {...register("productQuantity")}
              required
            />
          </div>
        </div>
        {/* <!-- submit button --> */}
        <button type="submit" id="lws-inputSubmit" class="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductInputForm;
