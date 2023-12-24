import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Cart from "../Pages/Cart/Cart";
import AllPhones from "../Pages/AllPhones/AllPhones";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
    
      children: [
        {
          path: "/",
          element:<Home></Home>,
        },
        {
          path: "/login",
          element:<Login></Login>,
        },
        {
          path:"/cart",
          element:<Cart></Cart>
        },
        {
          path:"/allphones",
          element: <AllPhones></AllPhones>
        }
      ],
    },
  ]);

  export default router