import { createBrowserRouter } from "react-router-dom";
import CartPage from "../Components/cartPage/CartPage";
import ProductsPage from "../Components/ProductsPage/ProductsPage";
import Main from "../Main/Main";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <ProductsPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);
