import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../component/home/home";
import Login from "../component/login/login";
import Registration from "../component/registration/registration";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "login",
        element: <Login />
    },
    {
        path: "registration",
        element: <Registration />
    }
])


export default function Router(){
    return (
        <RouterProvider router={router} />
    )
}