import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import Home from "../pages/home/Home";
import CategoryPage from "../pages/category/CategoryPage";
import SearchProducts from "../pages/SearchProducts";
import ShopPage from "../pages/shop/ShopPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: ( <App />),
    children: [
        { path: "/", element: <Home />},
        { path: "/categories/:categoryName", element: <CategoryPage />},
        { path: "/search", element: <SearchProducts />},
        { path: "/shop", element: <ShopPage />},


    ]
  },

]);

export default router