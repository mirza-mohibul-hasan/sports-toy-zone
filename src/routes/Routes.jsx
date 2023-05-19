import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login.jsx/Login";
import Register from "../pages/Register/Register";
import Blogs from "../pages/Blogs/Blogs";
import AddAToy from "../pages/AddAToy/AddAToy";
import MyToys from "../pages/MyToys/MyToys";
import AllToys from "../pages/AllToys/AllToys";
import PrivateRoute from "./PrivateRoute";
import ToyDetails from "../pages/ToyDetails/ToyDetails";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement:<ErrorPage></ErrorPage>,
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'/addatoy',
                element:<PrivateRoute>
                    <AddAToy></AddAToy>
                </PrivateRoute>
            },
            {
                path:'/alltoys',
                element:<AllToys></AllToys>
            },
            {
                path:'/mytoys',
                element:<PrivateRoute>
                    <MyToys></MyToys>
                </PrivateRoute>
            },
            {
                path:'/toydetails/:id',
                element:<PrivateRoute>
                    <ToyDetails></ToyDetails>
                </PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/toydetails/${params.id}`)
            },
        ]
    },
]);
export default router;