import React from "react";
import Header from "../header/header";
import { motion, } from "framer-motion";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";


export default function Profile(){
    // eslint-disable-next-line
    const [ cookies, setCookie, removeCookie] = useCookies(['user'])
    const nav = useNavigate()

    const _handleLogOut = ()=>{
        removeCookie('user')
        nav("/")
        window.getMessage = "Log Out effettuato"
        window.setLogNotification = true
    }
    
    return (
        <div className="w-full relative" style={{height: window.innerHeight - 48}} >
            <Header />
            
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