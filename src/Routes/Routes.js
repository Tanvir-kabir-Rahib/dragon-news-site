import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Category from "../Pages/Category/Category";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import News from "../Pages/News/News";
import Profile from "../Pages/Profile/Profile";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                loader: () => fetch("https://dragon-news-server-gules-one.vercel.app/news"),
                element: <Home></Home>
            },
            {
                path:"/category/:id",
                loader: ({params}) => fetch(`https://dragon-news-server-gules-one.vercel.app/category/${params.id}`),
                element: <Category></Category>
            },
            {
                path:"/news/:id",
                loader: ({params}) => fetch(`https://dragon-news-server-gules-one.vercel.app/news/${params.id}`),
                element: <PrivateRoute><News></News></PrivateRoute>
            },
            {
                path:"/profile",
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <SignUp></SignUp>
            }
        ]
    }
])