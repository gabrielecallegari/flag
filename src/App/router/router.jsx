import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../component/home/home";
import Login from "../component/login/login";
import Registration from "../component/registration/registration";
import Profile from "../component/profile/profile";
import Flag from "../component/game/flag";
import Hl from "../component/game/hl";
import Endgame from "../component/game/endgame/endgame";



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
    },
    {
        path: "profile",
        element: <Profile />
    },
    {
        path: "flag",
        element: <Flag />
    },
    {
        path: "hl",
        element: <Hl />,
    },
    {
        path: "endgame/:total",
        element: <Endgame />,
    }
    
])


export default function Router(){
    return (
        <RouterProvider router={router} />
    )
}