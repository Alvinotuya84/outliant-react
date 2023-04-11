import { Link } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";

export const routes =createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          index: true,
          element: <Home />,
        },{
          path: "products",
          element: <Products />,
        }
      ]
    },
    {
      path: "*",
      element:     <div>
      <h2>Oops! The page your looking for is not found</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>,
    },
  ])