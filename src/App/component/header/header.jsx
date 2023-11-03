import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function Header(){
    
    const navigation = useNavigate()
    // eslint-disable-next-line 
    const [cookies, setCookie] = useCookies(['user'])

    
    const _handlerClickProfile = () => {
        if(cookies.user === undefined){
            navigation("/login")
        }else{
            navigation("/profile")
        }
        
    }
    const _handlerClickHome = () => {
        navigation("/")
    }

    

    return (
        <div className="w-full h-12 bg-blue-500 shadow-xl flex sticky top-0 z-10" >
            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center z-0 ">
                <h1 className="text-2xl font-semibold cursor-pointer text-white  " onClick={()=>_handlerClickHome()} >GEONATION 🌍</h1>
            </div>

            <div className="flex absolute top-1 right-3 bottom-1 bg-white hover:bg-slate-300 duration-300 ease-in-out p-2 rounded-full cursor-pointer "  onClick={()=>_handlerClickProfile()} >
                <img alt="icon" src={require("../../image/user.png")} className="h-full w-6" />
            </div>
        </div>
    )
}