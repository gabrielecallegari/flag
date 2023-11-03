import { motion } from "framer-motion";
import React from "react";

export default function Notify({message}){
    const animazione = {
        hidden: {
            y: "-100vh",
            opacity: 0,
        },
        visible: {
            y: "0",
            opacity: 1,
            transition: {
                duration: 0.1,
                type: "spring",
                damping: 25,
                stiffness: 500
            }
        },
        exit: {
            y: "-100vh",
            opacity: 0,
            transition: {
                duration: 1
            }
        }
    }

    return (
        <div className="w-full absolute top-12 left-0 right-0 flex items-center justify-center z-10">
            <motion.div variants={animazione} initial="hidden" animate="visible" exit="exit" className="bg-blue-800 mt-5 px-10 py-5 rounded-lg" >
                <label className="text-2xl text-white">{message} ✅</label>
            </motion.div>
        </div>
    )
}