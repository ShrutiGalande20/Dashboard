import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <>
    
    <div className='w-full flex justify-center items-center h-[70vh]'>
        <div className='flex flex-col justify-cneter items-center space-y-4 w-[80%] md:w-[25%]'>
            <h1 className='text-xl font-bold text-left'>Log in to your account</h1>
            <input className='w-full px-4 py-2 border-2 border-black outline-0' type="text" placeholder='Enter your email' />
            <input className='w-full px-4 py-2 border-2 border-black outline-0' type="password" placeholder='Enter your password' />
            <button className='w-full px-4 py-4 text-lg font-bold text-white bg-sky-700 rounded-lg hover:bg-gray-500 hover:text-black'>Login</button>
            <div className='flex justify-center items-center space-x-4'>
                <p>New here?</p>
                <p className='text-gray-500 hover:text-black'><Link to='/register'>Register</Link></p>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Login