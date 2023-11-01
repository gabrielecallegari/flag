import React from "react";
import Header from "../header/header";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/footer";


export default function Home(){
    const nav = useNavigate()

    return (
        <div className="w-screen h-screen bg-slate-700 " >
            <Header/>
            <div className="flex w-full h-screen" >
                
            </div>

            <Footer />
        </div>
    )
}