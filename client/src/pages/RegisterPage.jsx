import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import flightclub from '../assets/flightclub.png'

const RegisterPage = () => {
  return (
    <div className='w-full max-w-screen'>
        <Navbar />
        <div className='h-fit flex justify-center px-[7vw]'>
            <div className='flex flex-col justify-center md:w-1/2'>
                <img src={flightclub} alt="" className='w-80 h-20 mx-auto' />
                <h1 className='text-4xl font-bold mx-auto my-8 text-center'>CREATE AN ACCOUNT</h1>
                <form action="" className='flex flex-col'>
                    <div className='flex flex-col md:flex-row mx-auto justify-center'>
                        <input type="text" placeholder='First Name' className='border-2 md:w-1/2 mx-auto px-3 py-1 mb-4 md:mr-9'/>
                        <input type="text" placeholder='Last Name' className='border-2 md:w-1/2 mx-auto px-3 py-1 mb-4'/>
                    </div>
                    <div className='flex flex-col md:flex-row mx-auto justify-center'>
                        <input type="text" placeholder='Username' className='border-2 md:w-1/2 mx-auto px-3 py-1 mb-4 md:mr-9'/>
                        <input type="text" placeholder='Email Address' className='border-2 md:w-1/2 mx-auto px-3 py-1 mb-4'/>
                    </div>
                    <div className='flex flex-col md:flex-row mx-auto justify-center'>
                        <input type="text" placeholder='Password' className='border-2 md:w-1/2 mx-auto px-3 py-1 mb-4 md:mr-9'/>
                        <input type="text" placeholder='Confirm Password' className='border-2 md:w-1/2 mx-auto px-3 py-1 mb-4'/>
                    </div>
                    <p className='mx-auto mb-5'>By clicking the button below, I agree to the <a href="" className='underline'>Terms of Use</a> and <a href="" className='underline'>Privacy Statement</a></p>
                    <button className='w-fit cursor-pointer bg-black text-white border-2 p-2 px-6 hover:bg-gray-900 mx-auto mb-4'>LOGIN</button>
                    
                </form>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default RegisterPage