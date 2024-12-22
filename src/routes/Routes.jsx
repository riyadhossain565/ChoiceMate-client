import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../Pages/Home";
import LogIn from "../Pages/LogIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
        {
            path:'/',
            element: <Home />
        },
        {
            path:'/login',
            element:<LogIn />
        }
    ]
  },
]);

export default router