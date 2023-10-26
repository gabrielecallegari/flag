import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header(){
    
    const navigation = useNavigate()

    const _handlerClickProfile = () => {
        navigation("/login")
    }
    const _handlerClickHome = () => {
        navigation("/")
    }


    return (
        <div className="w-full h-12 bg-blue-500 shadow-xl flex absolute top-0" >
            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center z-0 ">
                <h1 className="text-2xl font-semibold cursor-pointer text-white " onClick={()=>_handlerClickHome()} >GEONATION 🌍</h1>
            </div>

            <div className="flex absolute top-1 right-3 bottom-1 bg-white p-2 rounded-full cursor-pointer "  onClick={()=>_handlerClickProfile()} >
                <img alt="icon" src={require("../../image/user.png")} className="h-full" />
            </div>
        </div>
    )
}