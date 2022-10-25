import React from 'react'
import flightclub from '../assets/flightclub.png'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'
import { MdEmail } from 'react-icons/md'
import { BsFillTelephoneFill } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='h-[20vh] md:h-[25vh] flex flex-row p-[3vh] mb-[4vh]'>
        <div className='h-full w-1/3 hidden md:flex flex-col'>
            <h2 className='m-3 font-bold'>Contact us</h2>
            <div className='flex m-3'>
              <HiLocationMarker size={25} className='mx-2'/>
              <p>45 River Oak circuit kellyville</p>
            </div>
            <div className='flex m-3'>
              <MdEmail size={25} className='mx-2'/>
              <p>gsahlieh@outlook.com</p>
            </div>
            <div className='flex m-3'>
              <BsFillTelephoneFill size={25} className='mx-2'/>
              <p>0488715046</p>
            </div>
            <div>

            </div>
        </div>

        <div className='h-full w-1/3 hidden md:flex flex-col'>
          <h2 className='m-3 font-bold'>Links</h2>
          <ul className='h-[14vh] m-3 mb-5 flex flex-wrap flex-col'>
            <li>Some page</li>
            <li>Some page</li>
            <li>Some page</li>
            <li>Some page</li>
            <li>Some page</li>
            <li>Some page</li>
            <li>Some page</li>
            <li>Some page</li>
            <li>Some page</li>
            <li>Some page</li>
          </ul>
        </div>


        <div className='flex flex-col gap-4 w-full md:w-1/3 justify-center items-center'>
          <img src={flightclub} alt="" className='w-56 h-13 bg-transparent' />
          <div className='flex flex-row justify-center gap-5'>
            <FaFacebook size={30} className='hover:scale-125 duration-150 text-blue-700'/>
            <FaInstagram size={30} className='hover:scale-125 duration-150 text-pink-800'/>
            <FaTwitter size={30} className='hover:scale-125 duration-150 text-blue-400'/>
            <FaYoutube size={30} className='hover:scale-125 duration-150 text-red-600'/>
          </div>
        </div>
    </div>
  )
}

export default Footer