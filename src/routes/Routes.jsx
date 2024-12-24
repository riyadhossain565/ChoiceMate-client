import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../Pages/Home";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import AddQueries from "../Pages/AddQueries";
import PrivateRoute from "./PrivateRoute";
import MyQueries from "../Pages/MyQueries";
import Queries from "../Pages/Queries";

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
        },
        {
            path: '/register',
            element: <Register />
        },
        {
          path: '/add-queries',
          element: <PrivateRoute> <AddQueries /></PrivateRoute>
        },
        {
          path: '/my-queries',
          element: <PrivateRoute><MyQueries /></PrivateRoute>
        },
        {
          path: '/queries',
          element: <Queries />
        }
    ]
  },
]);

export default router