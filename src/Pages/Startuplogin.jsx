import React from 'react'
import {Link} from "react-router-dom";
import img from '..//Images/logo.png'
import img1 from '..//Images/googleicon.png'
const Startuplogin = () => {
  return (
    <div id='startup'>
      <div className='container '>
        <div className='cardlogin container2'>
          <div className='w-full lg:h-full flex items-start'>
            <div className='relative 1/2 h-full flex flex-col'>
              <div className='absolute top-[20%] left-[10%] flex flex-col '>
                <h1 className='text-4xl text-white font-bold my-4 >'>
                  
                </h1>
                <p className='text-4xl text-white font-normal '>
                 
                </p>
              </div>
              
            </div>
            <div className='w-full h-full bg-white flex flex-col p-20 justify-between'>
              <h1 className='text-xl text-black font-semibold '>
             
              </h1>
              <div className='w-full flex flex-col'>
                <div className='w-full flex flex-col justify-center items-center mb-10'>
                  <h3 className='text-[60px] text-blue-400 font-semibold mb-4'>
                    Startup Login
                  </h3>
                  <p className='text-sm text-[40px] text-orange-400 mb-2'>Welcome back Let's Start with it.</p>
                </div>
                <div className='w-full flex flex-col'>
                  <input type='email'
                    placeholder='Email'
                    className='w-full text-black my-4 py-4 bg-transparent border-b border-black outline-none focus:outline-none' />

                  <input type='password'
                    placeholder='Password'
                    className='w-full text-black my-4 py-4 bg-transparent border-b border-black 
                    outline-none focus:outline-none' />

                </div>
                <div className='w-full flex items-center justify-between'>
                  <div className='w-full flex '>
                    <input type='checkbox' className='w-4 h-4 mr-2'/>
                    <p className='text-sm '>Remember Me</p>
                  </div>
                  <p className='text-sm font-medium whitespace-nowrap cursor-pointer underline 
                  underline-offset-2'>Forgot Password</p>

                </div>
                <div className='w-full flex flex-col my-4'>
                  <button className='w-full text-white my-2 font-semibold bg-blue-400 
                  rounded-md p-4 text-center flex items-center justify-center'>Log in</button>
                  <button href="founder" className='w-full  text-black my-2 font-semibold
                   bg-orange-400 rounded-md p-4 text-center flex items-center justify-center'> <Link to="/founder">Register</Link></button>
                </div>
                <div className='w-full flex items-center justify-center relative'>
                  <div className='w-full h-[1px] bg-black'>

                  </div>
                  <p className='text-lg absolute text-black-80 bg-white'>Or</p>

                </div>
                <div className='w-full text-[#060606] my-2 font-semibold bg-white border-2 border-black rounded-md p-4 text-center flex  justify-center items-center'>
                <img src={img1} alt="" className='h-6 mr-2'/>
                  Sign In with google</div>

              </div>
              <div className='w-full flex items-center justify-center'>
                <p className='text-sm font-normal text-[#060606]'>Don't have a account?<span className='font-semibold 
                underline text-black underline-offset-2'><Link to="/founder">Sign up</Link></span> </p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Startuplogin