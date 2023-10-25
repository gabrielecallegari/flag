import React from "react";
import Header from "../header/header";
import Loading from "../../loading/loading";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { registration } from "../../database/database";

export default function Registration(){
    
    const [load, setLoad] = useState(false)
    const [email, setEmail] = useState("")
    const [confEmail, setConfEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confPassword, setConfPassword] = useState("")
    const [error, setError] = useState(false)
    const [errorText, setErrorText] = useState("")

    const nav = useNavigate()

    const callback = (value, message) => {
        setLoad(false)
        console.log(value);
        console.log(message);
        if(value === true){
            nav("/")
        }else{
            setErrorText("Errore! Email già registrata")
            setError(true)
            setTimeout(()=>{
                setError(false)
            }, 3000)
        }
    }

    const _handleSubmit = ()=>{
        if(email !== confEmail){
            setErrorText("Errore! Le Email non concidono")
            setError(true)
            setTimeout(()=>{
                setError(false)
            }, 3000)
            return
        }
        if(email.length < 3){
            setErrorText("Errore! Le Email è troppo corta")
            setError(true)
            setTimeout(()=>{
                setError(false)
            }, 3000)
            return
        }
        if(password !== confPassword){
            setErrorText("Errore! Le Password non concidono")
            setError(true)
            setTimeout(()=>{
                setError(false)
            }, 3000)
            return
        }
        if(password.length < 8){
            setErrorText("Errore! La Password è troppo corta")
            setError(true)
            setTimeout(()=>{
                setError(false)
            }, 3000)
            return
        }
        setLoad(true)
        registration(email, password, callback)
    }

    

    return (
        <div className="w-full h-screen  bg-white" >
            <Header />
            
            <div className="flex w-full h-screen">
                
                <div className="h-[calc(100%-48px)] w-full bg-white mt-12 flex py-3  ">
                    <div className="md:w-1/2 sm:w-full h-full flex justify-center items-center" >
                        <div className="w-7/12 h-5/6 relative" >
                            <h1 className="text-4xl font-bold">Registrazione</h1>
                            <p className="w-[calc(50%)] text-black mt-4 text-2xl">Se hai già un account, <Link to={"/login"} className="text-blue-500 border-b-2 border-blue-500" >Accedi!</Link> </p>
                            <div className="w-full flex flex-col mt-10">
                                <label className="text-gray-400 text-sm font-semibold">Email</label>
                                <div className="flex items-center mt-1 border-b-2 border-blue-500 ">
                                    <img  alt="mail" className="" src={require("../../image/mail.png")} />
                                    <input  type="email" placeholder="example@example.com" className="w-full ml-3 outline-none text-lg pr-1" onChange={(e) => setEmail(e.target.value) } />
                                </div>
                            </div>
                            <div className="w-full flex flex-col mt-10">
                                <label className="text-gray-400 text-sm font-semibold">Conferma Email</label>
                                <div className="flex items-center mt-1 border-b-2 border-blue-500 ">
                                    <img  alt="mail" className="" src={require("../../image/mail.png")} />
                                    <input  type="email" placeholder="example@example.com" className="w-full ml-3 outline-none text-lg pr-1" onChange={(e) => setConfEmail(e.target.value) } />
                                </div>
                            </div>
                            <div className="w-full flex flex-col mt-10">
                                <label className="text-gray-400 text-sm font-semibold">Password</label>
                                <div className="flex items-center mt-1 border-b-2 border-blue-500 ">
                                    <img  alt="mail" className="" src={require("../../image/password.png")} />
                                    <input placeholder="lunghezza minima di 8 caratteri" type="password" className="w-full ml-3 outline-none text-lg pr-1 " onChange={(e) => setPassword(e.target.value) } />
                                </div>
                            </div>
                            <div className="w-full flex flex-col mt-10">
                                <label className="text-gray-400 text-sm font-semibold">Conferma Password</label>
                                <div className="flex items-center mt-1 border-b-2 border-blue-500 ">
                                    <img  alt="mail" className="" src={require("../../image/password.png")} />
                                    <input  type="password" className="w-full ml-3 outline-none text-lg pr-1 " onChange={(e) => setConfPassword(e.target.value) } />
                                </div>
                            </div>

                            <button onClick={_handleSubmit} className="w-full mt-7 py-2 text-white font-semibold cursor-pointer shadow-2xl text-2xl rounded-xl bg-blue-500">Registrami</button>
                            
                            {error === true && 
                                <div className="w-full mt-4" >
                                    <h2 className="text-red-700 text-xl font-semibold" >{errorText}</h2>
                                </div>
                            }

                            {load && 
                                <Loading />
                            }
                        </div>
                    </div>
                    {window.screen.width > 425 && 
                        <div className="w-1/2 h-full  px-5" >
                            <img alt="logo" src={require("../../image/sfondo.png")} className="h-full w-full  rounded-2xl "/>
                        </div>
                    }
                    

                </div>
            </div>
        </div>
    )
}