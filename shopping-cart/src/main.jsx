import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Product from "./pages/Product.jsx";
import Root from "./pages/Root.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: "/products/",
        element: <App />,
      },
      {
        path: "/products/:product_id",
        element: <Product />,
      },
    ],
  },
  ,
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
