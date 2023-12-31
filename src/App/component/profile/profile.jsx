import React from "react";
import Header from "../header/header";
import { motion, } from "framer-motion";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";


export default function Profile(){
    // eslint-disable-next-line
    const [ cookies, setCookie, removeCookie] = useCookies(['user'])
    const nav = useNavigate()
    const [anim, setAnim] = useState(false)

    useEffect(()=>{
        setTimeout(()=>{
            setAnim(true)
        },300)
    },[])

    const _handleLogOut = ()=>{
        removeCookie('user')
        nav("/")
        window.getMessage = "Log Out effettuato"
        window.setLogNotification = true
    }
    
    return (
        <div className="w-full relative" style={{height: window.innerHeight - 48}} >
            <Header />

            <div className="w-full py-2 px-3" >
                <div className="w-full bg-white z-10">
                    <h1 className="text-2xl font-semibold">Bentornato, <br/> </h1>
                    <div className="w-full flex items-center">
                        <label  className="text-4xl font-semibold">{cookies.user.nickname}</label>
                        <div className="flex h-10 w-10 justify-center items-center rounded-full border-2 border-blue-500 ml-4">
                            <img src={require("../../image/mod.png")} alt="chg" className="h-5 w-5" />
                        </div>
                    </div>
                </div>

                <motion.div className=" w-full bg-slate-700  rounded-xl mt-5 py-1 px-3"
                initial={{opacity: 0, y: "-50px"}}
                animate={{opacity: 1, y: "0"}}
                transition={{
                    duration: 0.3,
                    ease: "easeIn"
                }}
                >
                    <h2 className="text-white text-xl font-semibold" >Il tuo record in <br/><label className="text-white text-2xl font-semibold">"Higher or Lower"</label></h2>
                    <div className="flex w-full justify-center items-center mt-3 mb-2">
                        <h2 className="text-5xl text-white font-semibold" >{cookies.user.scorehl}</h2>
                    </div>
                </motion.div>

                {
                    anim && 
                    <motion.div className=" w-full bg-slate-700  rounded-xl mt-5 py-1 px-3"
                    initial={{opacity: 0, y: "-50px"}}
                    animate={{opacity: 1, y: "0"}}
                    transition={{
                        duration: 0.3,
                        ease: "easeIn"
                    }}
                    >
                        <h2 className="text-white text-xl font-semibold" >Il tuo record in <br/><label className="text-white text-2xl font-semibold">"Guess the Flag"</label></h2>
                        <div className="flex w-full justify-center items-center mt-3 mb-2">
                            <h2 className="text-5xl text-white font-semibold" >{cookies.user.scoregf}</h2>
                        </div>
                    </motion.div>
                }
            </div>
            
            <div className="absolute -bottom-12 left-0 right-0 flex justify-center items-center z-10" >
                <motion.button
                initial={{opacity: 0, y: "200px"}}
                animate={{opacity: 1, y: "0"}}
                transition={{
                    transition: {
                        duration: 0.3
                    }
                }}
                className="mb-3 px-5 py-2 bg-blue-500 text-white rounded-full text-xl font-semibold "
                onClick={_handleLogOut}
                >
                    LogOUT
                </motion.button>       
            </div>
        </div>
    )
}