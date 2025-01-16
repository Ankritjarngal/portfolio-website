import { useState } from "react"

export function Footer(){
    const[msg,setMsg]=useState("");
    return(
        <div className="bg-[#0F141A] flex items-center justify-center  w-full flex-col p-2 ">
            <div className=" text-gray-400 py-3">Have any suggestions or feedback for this website?</div>
                <p className=" text-gray-300 py-1">All Sugesstions are Welcomed </p>
            <div className="flex items-center justify-center flex-col">
                <input  className="mt-1 w-full p-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all duration-300"type="text" placeholder="  Your Suggestions Here" onChange={(e)=>{
                setMsg(e.target.value);
            }}/>
            <button className=" text-[#D1D5DB]  mt-1 w-full p-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 shadow-sm transition-all duration-300 ">Send</button>
            </div>
            <p className=" text-gray-300 py-1">Made by Ankrit 🐒</p>


        </div>
    )

}