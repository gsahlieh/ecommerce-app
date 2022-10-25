import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import flightclub from '../assets/flightclub.png'
import { login } from '../redux/apiCalls'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch()
  const { isFetching, error } = useSelector(state => state.user)


  const handleClick = (e) => {
    e.preventDefault()

    login(dispatch, { username, password})
  }

  return (
    <div className='w-full max-w-screen'>
        <Navbar />
        <div className='h-[60vh] flex justify-center px-[7vw]'>
            <div className='flex flex-col justify-center md:w-1/3'>
                <img src={flightclub} alt="" className='w-80 h-20 mx-auto' />
                <h1 className='text-4xl font-bold mx-auto my-8 text-center'>YOUR ACCOUNT FOR EVERYTHING</h1>
                <form action="" className='flex flex-col' onSubmit={handleClick}>
                    <input type="text" placeholder='Username' className='border-2 w-1/2 mx-auto px-3 py-1 mb-4' onChange={(e) => setUsername(e.target.value)}/>
                    <input type="password" placeholder='Password' className='border-2 w-1/2 mx-auto px-3 py-1 mb-4' onChange={(e) => setPassword(e.target.value)}/>
                    <button className='w-fit cursor-pointer bg-black text-white border-2 p-2 px-6 hover:bg-gray-900 mx-auto mb-4 disabled:cursor-not-allowed' onClick={handleClick} disabled={isFetching}>LOGIN</button>
                    {error && <span className='text-red-600 text-center mb-2'>Something went wrong...</span>}
                    <a href="" className='mx-auto mb-2'>Forgot Password?</a>
                    <p className='mx-auto'>Not a Member? <a href="" className='underline'>Join Us.</a></p>
                </form>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default LoginPage