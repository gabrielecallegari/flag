import React from "react";
import { useState } from "react";
import { states } from "../../database/database";


export default function Hl(){
    // eslint-disable-next-line 
    const [state1 , setState1] = useState(states[Math.floor(Math.random() * states.length)])
    states.splice(state1.id, 1)
    // eslint-disable-next-line 
    const [state2, setState2] = useState(states[Math.floor(Math.random() * states.length)])
    // eslint-disable-next-line 
    const [score, setScore] = useState(0)
    // eslint-disable-next-line 
    const [highScore, setHighScore] = useState(0)
      

    return (
        <div className="w-full " style={{height: window.innerHeight}} >
            <div className="w-full h-[calc(49%)]  flex justify-center items-center relative ">
                <img className="w-40 h-40" alt="img" src={state1.bandiera} />
                <div className="absolute top-2 left-2 right-2 flex justify-between">
                    <label className="text-white text-xl z-10 font-semibold">Miglior Score: {highScore}</label>
                    <label className="text-white text-xl z-10 font-semibold" >Score Attuale: {score}</label>
                </div>
                <div className="absolute  top-0 bottom-0 left-0 right-0 flex justify-center items-center flex-col" style={{backgroundColor: "#00000098"}} >
                        <h3 className="text-4xl font-semibold text-white">"{state1.stato}"</h3>
                        <label className="text-xl mt-3 font-semibold text-white" >Ha all'incirca</label>
                        <h3 className="text-4xl mt-2 font-semibold text-yellow-200">{state1.abitanti.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
                        <label className="text-xl mt-3 font-semibold text-white" >Abitanti</label>
                </div>
            </div>

            <div className="w-full h-[calc(2%)] bg-white relative">
                <div className="w-full h-8 absolute -top-2 left-0 right-0 bottom-0  z-10 flex justify-center items-center">
                    <div className="bg-white rounded-full p-5">
                        <h3 className="text-3xl font-semibold">VS</h3>
                    </div>
                </div>
            </div>
            
            <div className="w-full h-[calc(49%)] flex justify-center items-center relative">
                <img className="w-40 h-40" alt="img" src={state2.bandiera} />
                <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center flex-col " style={{backgroundColor: "#00000098"}} >
                    <h3 className="text-4xl font-semibold text-white">"{state2.stato}"</h3>
                    <label className="text-xl mt-3 font-semibold text-white">Ha</label>
                    <button className="border-2 rounded-lg px-5 py-2 text-yellow-300 text-2xl mt-2 flex items-center">Più <div className="bg-white px-1 py-2 rounded-full -rotate-90 ml-3 "><img alt="piu" className="w-6 h-5 " src={require("../../image/arrow.png")} /></div></button>
                    <label className="text-xl mt-3 font-semibold text-white">O</label>
                    <button className="border-2 rounded-lg px-5 py-2 text-yellow-300 text-2xl mt-2 flex items-center">Meno <div className="bg-white px-1 py-2 rounded-full rotate-90 ml-3 "><img alt="piu" className="w-6 h-5 " src={require("../../image/arrow.png")} /></div></button>
                    <label className="text-xl mt-3 font-semibold text-white">Abitanti di {state1.stato}</label>
                </div>
            </div>

        </div>
    )
}