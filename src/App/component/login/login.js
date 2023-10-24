import React from "react";
import Header from "../header/header";
import { Link } from "react-router-dom";

export default function Login({navigation}){
    return (
        <div className="w-full h-screen  bg-white" >
            <Header />

            <div className="flex w-full h-screen">
                
                <div className="h-[calc(100%-48px)] w-full bg-white mt-12 flex py-3">
                    <div className="w-1/2 h-full flex justify-center items-center" >
                        <div className="w-8/12 h-5/6 ">
                            <h1 className="text-4xl font-bold">Login</h1>
                            <p className="w-[calc(50%)] text-black mt-4 text-2xl">Se non hai un account, <Link className="text-blue-500 border-b-2 border-blue-500" >Registrati ora!</Link> </p>
                        </div>
                    </div>

                    <div className="w-1/2 h-full  px-5" >
                        <img alt="logo" src={require("../../image/sfondo.png")} className="h-full w-full rounded-2xl"/>
                    </div>
                </div>
            </div>
        </div>
    )
}