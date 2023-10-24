import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../component/home/home";
import Login from "../component/login/login";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "login",
        element: <Login />
    }
])


export default function Router(){
    return (
        <RouterProvider router={router} />
    )
}