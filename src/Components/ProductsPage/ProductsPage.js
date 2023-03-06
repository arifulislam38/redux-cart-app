import React from "react";
import ProductInputForm from "../ProductInputForm/ProductInputForm";
import ProductsContainer from "../ProductsContainer/ProductsContainer";

const ProductsPage = () => {
  return (
    <body>
      <main class="py-16">
        <div class="productWrapper">
          <ProductsContainer></ProductsContainer>
          <div>
            <ProductInputForm />
          </div>
        </div>
      </main>
    </body>
  );
};

export default ProductsPage;
