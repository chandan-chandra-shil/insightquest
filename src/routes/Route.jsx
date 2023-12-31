import { createBrowserRouter,  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import ErrorPage from "../pages/errorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement:<ErrorPage/>,
    children:[
      {
        path: "/",
        element:<Home/>
      }
    ]
  },
])

export default router;