import React, { useState } from "react";
import Header from "../header/header";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../loading/loading";
import { login } from "../../database/database";
import Footer from "../footer/footer";
import { useCookies } from "react-cookie";

export default function Login(){

    const [load, setLoad] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const [errorLabel, setErrorLabel] = useState("Errore! Email o Password errate")
    // eslint-disable-next-line 
    const [cookies, setCookie] = useCookies(['user'])

    const nav = useNavigate()


    const callback = (value, message) => {
        setLoad(false)
        console.log(message);
        console.log(value);
        if(value === true){
            window.setLogNotification = true
            window.getMessage = "Log In effettuato"
            nav("/")
            setEmail("")
            setPassword("")
        }else{
            setError(true)
            setErrorLabel("Errore! Email o Password errate")
            setTimeout(() => {
                setError(false)
            }, 3000);
        }
    }

    const cookieSet = (oggetto)=>{
        const current = new Date();
        const nextYear = new Date();
        nextYear.setFullYear(current.getFullYear() + 100);
        setCookie('user',oggetto,{
            expires: nextYear
        })
        console.log(oggetto);
    }

    const _handleSubmit = ()=>{
        if(email.length < 4 || password.length < 7 ){
            setError(true)
            setErrorLabel("Errore! Email o Password troppo corte")
            setTimeout(() => {
                setError(false)
            }, 3000);
            return 
        }
        setLoad(true)
        login(email.toLocaleLowerCase(),password,callback, cookieSet)
    }

    return (
        <div className="w-full h-screen  bg-white" >
            <Header />

            <div className="flex w-full h-screen">
                
                <div className="h-full w-full bg-white  flex py-3  ">

                    {
                        load && 
                        <Loading />
                    }

                    <div className="px-3 w-full mt-2" >
                        <h1 className="text-5xl font-semibold">Login</h1>
                        <p className="mt-6 text-xl">Se non sei ancora registrato <br/><Link to={"/registration"} className="text-2xl text-blue-500 border-b-2 border-blue-500">Clicca Qui!</Link> </p>

                        <div className="w-full mt-10">
                            <h2 className="text-lg text-gray-400" >Email</h2>
                            <div className="flex w-full mt-1 items-center border-b-2 border-blue-500">
                                <img alt="iconemail" src={require("../../image/mail.png")}/>
                                <input type="email" placeholder="example@example.com" onChange={(e)=>setEmail(e.target.value)} className="w-full outline-none pl-2 text-xl" />
                            </div>
                        </div>
                        <div className="w-full mt-10">
                            <h2 className="text-lg text-gray-400" >Password</h2>
                            <div className="flex w-full mt-1 items-center border-b-2 border-blue-500">
                                <img alt="iconpassword" src={require("../../image/password.png")}/>
                                <input type="password" placeholder="Yourpassword123!" onChange={(e)=>setPassword(e.target.value)} className="w-full outline-none pl-2 text-xl" />
                            </div>
                            <div className="w-full justify-end flex">
                                <Link className="mt-1 text-gray-400" >Password dimenticata?</Link>
                            </div>
                        </div>

                        {error &&
                            <div className="w-full mt-3">
                                <h2 className="text-xl text-red-500">{errorLabel}</h2>
                            </div>
                        }

                        <div className="w-full justify-center items-center flex mt-10" >
                            <button type="button" onClick={_handleSubmit}  className="px-20 py-3 rounded-lg text-2xl text-white font-semibold bg-blue-500 active:bg-blue-300 shadow-xl ">Login</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}