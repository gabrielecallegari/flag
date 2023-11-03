import React from "react";
import Header from "../header/header";
import Loading from "../../loading/loading";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { registration } from "../../database/database";
import Footer from "../footer/footer";
import { useCookies } from "react-cookie";

export default function Registration(){
    
    const [load, setLoad] = useState(false)
    const [email, setEmail] = useState("")
    const [nickname, setNickname] = useState("")
    const [password, setPassword] = useState("")
    const [confPassword, setConfPassword] = useState("")
    const [error, setError] = useState(false)
    const [errorText, setErrorText] = useState("")
    // eslint-disable-next-line
    const [cookie, setCookie] = useCookies(['user'])

    const nav = useNavigate()

    const callback = (value, message) => {
        setLoad(false)
        console.log(value);
        console.log(message);
        if(value === true){
            nav("/")
            window.setLogNotification = true
            setEmail("")
            setPassword("")
            setConfPassword("")
            setNickname("")
        }else{
            setErrorText("Errore! Email già registrata")
            setError(true)
            setTimeout(()=>{
                setError(false)
            }, 3000)
        }
    }

    const _handleSubmit = ()=>{
        if(email.length < 3){
            setErrorText("Errore! Le Email è troppo corta")
            setError(true)
            setTimeout(()=>{
                setError(false)
            }, 3000)
            return
        }
        if(nickname.length < 1){
            setErrorText("Errore! Nickname non inserito")
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
        setCookie('user',{
            email: email,
            nickname: nickname,
            scoregf: 0,
            scorehl: 0
        })
        registration(email, password, nickname, callback)
        
    }

    

    return (
        <div className="w-full h-screen  bg-white" >
            <Header />
            
            <div className="flex w-full h-screen">
                
                <div className="h-full w-full bg-white px-3 py-3  ">
                    <div className="w-full mt-2">
                        <h1 className="text-5xl font-semibold">Registrazione</h1>
                        <p className="mt-6 text-xl">Se possiedi già un account,<br/><Link to={"/login"} className="text-2xl text-blue-500 border-b-2 border-blue-500">Clicca Qui!</Link></p>
                    </div>
                    
                    <div className="w-full mt-10">
                        <h2 className="text-lg text-gray-400" >Email</h2>
                        <div className="flex w-full mt-1 items-center border-b-2 border-blue-500">
                            <img alt="iconemail" src={require("../../image/mail.png")}/>
                            <input type="email" placeholder="example@example.com" onChange={(e)=>setEmail(e.target.value)} className="w-full outline-none pl-2 text-xl" />
                        </div>
                    </div>
                    <div className="w-full mt-10">
                        <h2 className="text-lg text-gray-400" >Nickname</h2>
                        <div className="flex w-full mt-1 items-center border-b-2 border-blue-500">
                            <img alt="iconemail" src={require("../../image/usericon.png")}/>
                            <input type="email" placeholder="Example123" onChange={(e)=>setNickname(e.target.value)} className="w-full outline-none pl-2 text-xl" />
                        </div>
                    </div>
                    <div className="w-full mt-10">
                        <h2 className="text-lg text-gray-400" >Password</h2>
                        <div className="flex w-full mt-1 items-center border-b-2 border-blue-500">
                            <img alt="iconpassword" src={require("../../image/password.png")}/>
                            <input type="password" placeholder="Yourpassword123!" onChange={(e)=>setPassword(e.target.value)} className="w-full outline-none pl-2 text-xl" />
                        </div>
                    </div>
                    <div className="w-full mt-10">
                        <h2 className="text-lg text-gray-400" >Conferma Password</h2>
                        <div className="flex w-full mt-1 items-center border-b-2 border-blue-500">
                            <img alt="iconpassword" src={require("../../image/password.png")}/>
                            <input type="password" placeholder="Yourpassword123!" onChange={(e)=>setConfPassword(e.target.value)} className="w-full outline-none pl-2 text-xl" />
                        </div>
                    </div>
                    {error &&
                        <div className="w-full mt-3">
                            <h2 className="text-xl text-red-500">{errorText}</h2>
                        </div>
                    }
                    {
                        load && 
                        <Loading />
                    }

                    <div className="w-full justify-center items-center flex mt-10" >
                        <button type="button" onClick={_handleSubmit}  className="px-20 py-3 rounded-lg text-2xl text-white font-semibold bg-blue-500 active:bg-blue-300 shadow-xl ">Registrami</button>
                    </div>

                </div>
                
            </div>
            <Footer />
        </div>
    )
}