import React, { useState } from 'react'
import {Link } from "react-router-dom"
import {AiFillEyeInvisible,AiFillEye} from "react-icons/ai"
import OAuth from '../componenets/OAuth'

export default function Signin() {
const [ShowPassword, setShowPassword]=useState(false)
  const [formData, setformData]= useState({
    email:"",
    password:""
  })

  const {email,password}=formData;

  function onChange(e){
    setformData((preState)=>({
       ...preState,[e.target.id]:e.target.value
    }))
  }
  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Sign In</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img src="https://cdn.pixabay.com/photo/2017/03/03/16/08/key-2114293_1280.jpg" alt="Pic" className ="w-full  rounded-2xl"/>
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form >
            <input type="email" id="email" value ={email}  onChange={onChange} placeholder="Email Address" className='w-full px-4 py-2 bg-white text-xl text-gray-700 border-gray-300 rounded transition ease-in-out mb-6' />
            <div className='relative mb-6'>
            <input type={ShowPassword ? "text":"password"} id="password" value ={password}  onChange={onChange} placeholder="Password" className='w-full px-4 py-2 bg-white text-xl text-gray-700 border-gray-300 rounded transition ease-in-out' />
            {ShowPassword ? (<AiFillEyeInvisible className='absolute right-3 top-3 text-xl cursor-pointer' onClick={()=>setShowPassword((preState)=> !preState)}/> 
               ) : (<AiFillEye className='absolute right-3 top-3 text-xl cursor-pointer' onClick={()=>setShowPassword((preState)=> !preState)} 
            />)}
            </div>
            <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
               <p >Don't have an account?
               <Link to="/sign-up" className='text-red-600 hover:text-red-800 transistion duration-200 ease-in-out ml-1'>Register</Link>
               </p>
               <p>
                <Link to="/forgot-password " className='text-blue-600 hover:text-blue-800 transistion duration-200 ease-in-out '>Forgot Password?</Link>
                
               </p>
            </div>
            <button className="w-full bg-blue-600 px-7 py-3 rounded mt-6 text-white font-medium uppercase shadow-md hover:bg-blue-700 transistion duration-200 ease-in-out hover:shadow-lg "type="submit">Sign In</button>
          <div className='flex items-center my-4 before:border-t  before:flex-1  before:border-gray-300
          after:border-t  after:flex-1  after:border-gray-300'>
            <p className='text-center font-semibold mx-4'> OR </p>
          </div>
          <OAuth/>
          </form>
          
        </div>
      </div>
    </section>
  )
}
