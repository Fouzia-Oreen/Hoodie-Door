import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import CategoryPage from "../pages/category/CategoryPage";
import Home from "../pages/home/Home";
import ShopPage from "../pages/shop/ShopPage";
//import SingleProductPage from "../pages/shop/SingleProductPage";
//import SingleProducts from "../pages/shop/product-details/SingleProducts";
import SearchProductPage from "../pages/shop/SearchProductPage";
import SingleProductPage from "../pages/shop/SingleProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: ( <App />),
    children: [
        { path: "/", element: <Home />},
        { path: "/categories/:categoryName", element: <CategoryPage />},
        { path: "/search", element: <SearchProductPage />},
        { path: "/shop", element: <ShopPage />},
        { path: "/shop/:id", element: <SingleProductPage />},

    ]
  },

]);

export default router