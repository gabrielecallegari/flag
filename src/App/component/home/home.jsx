import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { useState } from "react";
import Notify from "./modal/notify";
import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";



export default function Home(){

    const [modal, setModal] = useState(false)
    const navigation = useNavigate()

    useEffect(
        ()=>{
            if(window.setLogNotification === true){
                setModal(true)
                setTimeout(()=>{
                    window.setLogNotification = false
                    setModal(false)
                },1500)
            }
        },[])

    return (
        <div className="w-screen h-screen " >
            
            <Header/>
            <AnimatePresence initial={false} mode="wait" onExitComplete={()=>null} >
                {
                    modal && <Notify />
                }
            </AnimatePresence>
            <div className="w-full h-screen px-5 py-3" >

                <div className="w-full h-64 bg-slate-700  rounded-2xl relative shadow-2xl" >
                    <div className="w-full flex justify-center items-center mt-2" >
                        <h2 className="font-semibold text-white text-2xl" >Higher or Lower</h2>
                    </div>

                    <div className="absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center">
                        <div className="bg-white px-3 py-3 rounded-full -rotate-90 -mt-2 -mr-1">
                            <img alt="arrow" src={require("../../image/arrow.png")} className="w-10 h-10 "/>
                        </div>
                        <div className="bg-white px-3 py-3 rounded-full rotate-90 mt-2 -ml-1 ">
                            <img alt="arrow" src={require("../../image/arrow.png")} className="w-10 h-10 "/>
                        </div>
                    </div>

                    <div className="absolute bottom-3 left-0 right-0 flex justify-center items-center" >
                        <button className="bg-blue-500 text-2xl text-white px-10 py-2 rounded-xl" onClick={()=>navigation("/hl")} >Gioca ora</button>
                    </div>
                </div>

                <div className="w-full h-64 bg-slate-700  rounded-2xl relative shadow-2xl mt-10" >
                    <div className="w-full flex justify-center items-center mt-2" >
                        <h2 className="font-semibold text-white text-2xl" >Guess the Flag</h2>
                    </div>

                    <div className="absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center">
                        <div className="px-3 py-3 bg-white rounded-full">
                            <img alt="gf" src={require("../../image/gf.png")} className="w-16 h-16 rounded"/>
                        </div>
                    </div>

                    <div className="absolute bottom-3 left-0 right-0 flex justify-center items-center" >
                        <button className="bg-blue-500 text-2xl text-white px-10 py-2 rounded-xl" onClick={()=>navigation("/flag")} >Gioca ora</button>
                    </div>
                </div>
                
            </div>

            <Footer />
        </div>
    )
}