import React from 'react'
import { useLocation, useNavigate } from 'react-router'

export default function Header() {
    const location= useLocation();
    const navigate= useNavigate();
    // console.log(location.pathname);
    function path(Route){
if(Route === location.pathname ){
    return true;
}
    }
  return (
    <div className='bg-white border-b sticky top-0 z-50'>
        <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
            <div>
                <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="Ranjan"  className="h-5 cursor-pointer" onClick={()=> navigate("/")}/>
            </div>
            <div>
                <ul className='flex  space-x-10'>
                    <li className={`cursor-pointer py-6 text-gray-400 text-sm font-semibold  border-b-[3px] border-b-transparent ${path("/") && "text-black border-b-red-500"}` } onClick={()=> navigate("/")}>Home</li>
                    <li className={`cursor-pointer py-6 text-gray-400 text-sm font-semibold border-b-[3px] border-b-transparent ${path("/offers") && "text-black border-b-red-500"}`} onClick={()=> navigate("/offers")}>Offers</li>
                    <li className={`cursor-pointer py-6 text-gray-400 text-sm font-semibold border-b-[3px] border-b-transparent ${path("/sign-in") && "text-black border-b-red-500"}`} onClick={()=> navigate("/sign-in")}>Sign In</li>
                </ul>

            </div>
        </header>
    </div>
  )
}