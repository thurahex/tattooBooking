import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Navbar() {

  const location = useLocation()
  const activeClass = "bg-white text-white "
    


  return (
    <>
      <div className="flex justify-center mt-3 gap-5 ">
        

        <NavLink className={` ${location.pathname ==='/home' || location.pathname==='/' ?  "bg-white text-black" : "text-white"}  `} to={"home"}>Home</NavLink>
        <NavLink className={` ${location.pathname ==='/tool'  ?   "bg-white text-black" : "text-white"} `} to={"tool"}>Tools</NavLink>
        <NavLink className={` ${location.pathname ==='/contact'  ?  "bg-white text-black" : "text-white"}`} to={"contact"}>Contacts</NavLink>
        <NavLink className={` ${location.pathname ==='about'  ?  "bg-white text-black" : "text-white" } `} to={"about"}>About</NavLink>

      </div>
    </>
  );
}
