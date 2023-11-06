import React from "react";
import { useState } from "react";
import { states, updateHl } from "../../database/database";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";


export default function Hl(){
    const stati = states
    let st = stati
    const [state1 , setState1] = useState(st[Math.floor(Math.random() * st.length)])
    st=st.filter( el => el.id !== state1.id)
    const [state2, setState2] = useState(st[Math.floor(Math.random() * st.length)])
    const [score, setScore] = useState(0)
    // eslint-disable-next-line 
    const [cookies, setCookies] = useCookies(['user'])
    // eslint-disable-next-line
    const [highScore, setHighScore] = useState( cookies.user===undefined? 0 : cookies.user.scorehl )
    const nav = useNavigate()
    
    
    

    //animation
    const [result, setResult] = useState(false)
    const [result2, setResult2] = useState(false)

    const [right, setRight] = useState(false)
    const [err, setErr] = useState(false)
    

    const _handleClick = (num) => {
        let er = false
        if((num === 0 && state2.abitanti >= state1.abitanti) || (num === 1 && state1.abitanti > state2.abitanti)){
            setRight(true)
        }else{
            setErr(true)
            er = true
        }
        setResult(true)

        setTimeout(()=>{
            setResult2(true)
        },300)

        setTimeout(()=>{
            setResult2(false)
            if(er === true){
                nav("/endgame/"+score)
                // eslint-disable-next-line
                if(cookies.user !== undefined){
                    console.log("qui");
                    if(score > cookies.user.scorehl){
                        let obj = {...cookies.user}
                        obj.scorehl = score
                        setCookies('user', obj)
                        updateHl(cookies.user.email, score)
                    }
                }
            }
            st = stati
            st = st.filter( el => el.id !== state1.id)
            if(num === 0 && state2.abitanti >= state1.abitanti){
                setScore( old => old +1)
                setState1(state2)
                setState2(st[Math.floor(Math.random() * st.length)])
            }else{
                if (num === 1 && state1.abitanti > state2.abitanti){
                    setScore( old => old +1)
                    setState1(state2)
                    setState2(st[Math.floor(Math.random() * st.length)])
                }else{
                    setScore(0)
                    setState1(state2)
                    setState2(st[Math.floor(Math.random() * st.length)])
                }
            }
            
            setTimeout(()=>{
                setResult(false)
                setRight(false)
                setErr(false)
            },300)
        },2000)

        
        
    }
      

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
                    <div className="bg-white rounded-full p-5 w-20">
                        <h3 className="text-3xl font-semibold">VS</h3>
                    </div>
                </div>

                <AnimatePresence initial={false} mode="wait" onExitComplete={()=>null}>
                        {
                            right && 
                            <div className="w-full h-8 absolute -top-2 left-0 right-0 bottom-0  z-10 flex justify-center items-center">
                                <motion.div
                                initial={{y: "100px", opacity: 0}}
                                transition={{
                                    duration: 0.3
                                }}
                                animate = {{opacity: 1,y: "0px",}}
                                exit={{
                                    opacity: 0,
                                    y: "-100px",
                                    transition: {
                                        duration: 0.3
                                    }
                                }}
                                className="bg-green-500 rounded-full p-5 w-20 flex justify-center items-center "
                                >
                                    <img alt="check" src={require("../../image/check.png")} className="w-full h-full" />
                                </motion.div>
                            </div>
                        }

                        {   
                            err && 
                            <div className="w-full h-8 absolute -top-2 left-0 right-0 bottom-0  z-10 flex justify-center items-center">
                                <motion.div
                                initial={{y: "100px", opacity: 0}}
                                transition={{
                                    duration: 0.3
                                }}
                                animate = {{opacity: 1,y: "0px",}}
                                exit={{
                                    opacity: 0,
                                    y: "-100px",
                                    duration: 0.3
                                }}
                                className="bg-red-500 rounded-full p-5 w-20 flex justify-center items-center "
                                >
                                    <img alt="check" src={require("../../image/x.png")} className="w-full h-full" />
                                </motion.div>
                            </div>
                        }
                    </AnimatePresence>
            </div>
            
            <div className="w-full h-[calc(49%)] flex justify-center items-center relative">
                <img className="w-40 h-40" alt="img" src={state2.bandiera} />
                <div className="absolute top-0 bottom-0 left-0 right-0 " style={{backgroundColor: "#00000098"}} >
                    <AnimatePresence initial={false} mode="wait" onExitComplete={()=>null}>
                    {!result && 
                        
                            <motion.div 
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}

                            transition={{
                                duration: 1,
                                ease: [0, 0.71, 0.2, 1.01],
                                
                            }}
                            exit={{
                                opacity: 0,
                                transition: {
                                    duration: 0.3
                                }
                            }}
                            className="w-full h-full flex justify-center items-center flex-col " >
                                <h3 className="text-4xl font-semibold text-white">"{state2.stato}"</h3>
                                <label className="text-xl mt-3 font-semibold text-white">Ha</label>
                                <button onClick={()=>_handleClick(0)} className="border-2 rounded-lg px-5 py-2 text-yellow-300 text-2xl mt-2 flex items-center">Più <div className="bg-white px-1 py-2 rounded-full -rotate-90 ml-3 "><img alt="piu" className="w-6 h-5 " src={require("../../image/arrow.png")} /></div></button>
                                <label className="text-xl mt-3 font-semibold text-white">O</label>
                                <button onClick={()=>_handleClick(1)} className="border-2 rounded-lg px-5 py-2 text-yellow-300 text-2xl mt-2 flex items-center">Meno <div className="bg-white px-1 py-2 rounded-full rotate-90 ml-3 "><img alt="piu" className="w-6 h-5 " src={require("../../image/arrow.png")} /></div></button>
                                <label className="text-xl mt-3 font-semibold text-white">Abitanti di {state1.stato}</label>
                            </motion.div>
                        
                    }
                    </AnimatePresence>

                    <AnimatePresence nitial={false} mode="wait" onExitComplete={()=>null}>
                    {
                        result2 && 
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}

                            transition={{
                                duration: 1,
                                ease: [0, 0.71, 0.2, 1.01],
                                
                            }}
                            exit={{
                                opacity: 0,
                                transition: {
                                    duration: 0.3
                                }
                            }}
                            className="w-full h-full flex justify-center items-center flex-col " >
                                <h3 className="text-4xl font-semibold text-white">"{state2.stato}"</h3>
                                <label className="text-xl mt-3 font-semibold text-white" >Ha all'incirca</label>
                                <h3 className="text-4xl mt-2 font-semibold text-yellow-200">{state2.abitanti.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
                                <label className="text-xl mt-3 font-semibold text-white" >Abitanti</label>
                            </motion.div>
                    }
                    </AnimatePresence>
                </div>
                

            </div>

        </div>
    )
}