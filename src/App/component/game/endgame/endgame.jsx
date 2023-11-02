import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Endgame(){
    const {total} =useParams()
    const nav = useNavigate()
    return (
        <div className="w-full flex justify-center items-center relative bg-blue-500 " style={{height: window.innerHeight}}>
            {
                total < 4 &&
                <img alt="gif bad" src={require("../../../image/gif/bad.gif")} className="w-full h-auto" />
            }

            {
                total >= 4 && total <=10 &&
                <img alt="gif bad" src={require("../../../image/gif/notbad.gif")} className="w-full h-auto" />
            }

{
                total > 10 &&
                <img alt="gif bad" src={require("../../../image/gif/wonderful.gif")} className="w-full h-auto" />
            }

            <div className="absolute top-0 left-0 right-0 bottom-0 flex "  style={{backgroundColor: "#00000098"}}>
                {
                    total < 4 &&
                    <div className="w-full  text-center p-4">
                        <h1 className="text-white mt-10 text-3xl font-semibold">Orribile! 👎</h1>
                        <p className="text-white mt-3 text-xl" >Ritenta, e sarai più fortunato! <br/>(Forse)</p>
                    </div>
                }
                {
                    total >= 4 && total <= 10 &&
                    <div className="w-full  text-center p-4">
                        <h1 className="text-white mt-10 text-3xl font-semibold">Non male! 😅</h1>
                        <p className="text-white mt-3 text-xl" >Hai fatto un buon lavoro, ma si può sempre migliorare! <br/>(Forse)</p>
                    </div>
                }
                {
                    total > 10 &&
                    <div className="w-full  text-center p-4">
                        <h1 className="text-white mt-10 text-3xl font-semibold">Un genio della Geografia! 🌍</h1>
                        <p className="text-white mt-3 text-xl" >Hai fatto un gran lavoro, ma si può sempre migliorare! <br/>(Forse)</p>
                    </div>
                }

            </div>

            <div className="absolute bottom-3 left-3 right-3 flex justify-around">
                <button className="px-5 py-2 border-2 border-white rounded-xl text-white text-xl font-semibold" onClick={()=> nav(-1) } >Gioca di nuovo</button>
                <button className="px-5 py-2 border-2 border-white rounded-xl text-white text-xl font-semibold" onClick={()=> nav("/") }>Vai alla Home</button>
            </div>
        </div>
    )
}