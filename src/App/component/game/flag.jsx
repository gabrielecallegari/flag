import React from "react";
import { useNavigate } from "react-router-dom";
import { states, updateGf } from "../../database/database";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

export default function Flag(){
    const nav = useNavigate()
    const stati = states
    let st = stati
    const [state , setState] = useState(st[Math.floor(Math.random() * st.length)])
    // eslint-disable-next-line
    const [cookies, setCookies] = useCookies(['user'])
    const [score, setScore] = useState(0)
    // eslint-disable-next-line
    const [highScore, setHighScore] = useState( cookies.user===undefined? 0 : cookies.user.scoregf )
    const [right, setRight] = useState(false)
    st=st.filter( el => el.id !== state.id)
    
    const [buttons, setButtons] = useState([])

    useEffect(()=>{
        getRandomItemsFromArray(3)
        // eslint-disable-next-line
    },[])
    
    
    function getRandomItemsFromArray(numItems, sl) {
       
        const randomItems = [];
        
        for (let i = 0; i < numItems; i++) {
            // Generate a random index within the remaining items in the array
            const randomIndex = Math.floor(Math.random() * st.length)
        
            // Get the item at the random index and add it to the result array
            randomItems.push(st.splice(randomIndex, 1)[0])
        }
        randomItems.push(sl === undefined ? state : sl)
        
        setButtons(randomItems.sort(() => Math.random() - 0.5))
    }

    const Bottoni = ()=>{
        
        const bt = buttons.map((el,i)=>{
            return (
                <div className="w-full flex justify-center items-center" key={i}>
                    <button className="px-6 py-3 bg-blue-500 mt-4  text-xl font-semibold text-white rounded-full w-56 " onClick={()=>_handleClick(el.id)} >{el.stato}</button>
                </div>
            )
        })
        return bt
    }
    
    const _handleClick = (val)=>{
        if(val === state.id){
            setRight(true)
            st = stati
            const sl = st[Math.floor(Math.random() * st.length)]
            setState(sl)
            st=st.filter( el => el.id !== state.id)
            getRandomItemsFromArray(3,sl)
            setScore(old => old + 1)
            setTimeout(()=>{
                setRight(false)
            },1000)
        }else{
            if(cookies.user !== undefined){
                if(score > cookies.user.scoregf){
                    let obj = {...cookies.user}
                    obj.scoregf = score
                    setCookies('user', obj)
                    updateGf(cookies.user.email, score)
                }
            }
            
            setScore(0)
            nav("/endgame/"+score)
        }
        
        
    }

    
  
    return (
        <div className="w-full bg-slate-700  " style={{height: window.innerHeight}} >
            <AnimatePresence initial={false} mode="wait" onExitComplete={()=>null}>
                {right &&
                    <div className="w-full absolute bottom-5 left-0 right-0 flex justify-center items-center " >
                        <motion.div 
                        initial={{
                            opacity: 0,
                            y: "100px"
                        }}
                        transition={{
                            duration: 0.3,
                        }}
                        animate={{
                            opacity: 1,
                            y: "0px"
                        }}
                        exit={{
                            opacity: 0,
                            y: "100px",
                            transition: {
                                duration: 0.3
                            }
                        }}
                        className=" bg-blue-500 mt-10 flex justify-center py-3 px-5" >
                            <p className="text-white text-xl " >Risposta esatta ✅</p>
                        </motion.div>
                    </div>
                }
            </AnimatePresence>
            <div className="px-3 py-1 flex justify-between">
                <label className="text-white text-xl z-10 font-semibold">Miglior Score: {highScore}</label>
                <label className="text-white text-xl z-10 font-semibold" >Score Attuale: {score}</label>
            </div>

            <div className="w-full flex justify-center items-center " >

                <div className="max-w-full max-h-16 shadow-xl bg-blue-500 mt-16 flex justify-center items-center " >
                    <img src={state.bandiera} alt="bandiera" className="w-full h-auto" />
                </div>

            </div>
            <div className="w-full mt-20 flex justify-center items-center flex-col">
                <h2 className="font-semibold text-white text-2xl mb-5" >Di quale stato è questa bandiera?</h2>
                <Bottoni />
            </div>
        </div>
    )
}