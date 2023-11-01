import React from "react";
import { Link } from "react-router-dom";

export default function Footer(){
    return (
        <footer className=" h-32 bg-blue-500 flex justify-center items-center">
            <h3 className="text-white text-xl">Creato da <Link to={"https://github.com/gabrielecallegari"} className=" border-b-2 border-white">Gabriele Callegari</Link></h3>
        </footer>
    )
}