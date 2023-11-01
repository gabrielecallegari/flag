import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { useState } from "react";
import Notify from "./modal/notify";
import { AnimatePresence } from "framer-motion";
import { useNavigation } from "react-router-dom";
import { useEffect } from "react";



export default function Home(){

    const [modal, setModal] = useState(false)
    const navigation = useNavigation()

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
            <div className="flex w-full h-screen" >

                
                
            </div>

            <Footer />
        </div>
    )
}