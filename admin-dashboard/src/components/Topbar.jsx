import React from 'react'
import { useState } from 'react';
import { AiOutlineBell } from 'react-icons/ai'
import { BsGear } from 'react-icons/bs'
import flightClub from '../assets/flightclub.png'
import profilePic from '../assets/image.jpg'
import { Emoji } from 'react-apple-emojis'
import partyEmoji from '../assets/party-popper.png'
import { logout } from '../redux/userRedux';
import { useDispatch, useSelector } from 'react-redux';
import noProfilePic from '../assets/no-profile-pic.webp'

const Topbar = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.currentUser)
    const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)?.currentUser?.isAdmin;

    const handleLogout = () => {
      dispatch(logout())
      window.location.reload();
    }

    return (

      <div className="sticky top-0 w-full h-[15vh] md:h-[6vh] bg-white text-black flex items-center z-10">
        <div className="w-full flex justify-between items-center px-5 py-2">
          <div className='flex flex-row items-center'>
            {admin ? (
              <div className='flex flex-row items-center'>
                <h1 className='text-3xl font-bold md:mr-4'>Welcome back, Gabriel</h1>
                <div className='flex justify-start'>
                  <img src={partyEmoji} className='md:w-[36px] w-[50px]'/>
                </div> 
              </div> ): (
              <div></div>
            )}
            
          </div>

          <div className="flex flex-row items-center p-2 md:w-fit w-1/2 justify-end">
            <div className="rounded-full p-2 hover:bg-gray-200 duration-500 cursor-pointer hidden md:flex">
              <AiOutlineBell size={25}/>
            </div>
            <div className="rounded-full p-2 hover:bg-gray-200 ml-1 duration-500 cursor-pointer hidden md:flex">
              <BsGear size={25} className=''/>
            </div>
            {user != null ? (
            <div className="rounded-full p-2 px-4 hover:bg-gray-200 ml-1 duration-500 cursor-pointer">
              <p onClick={handleLogout}>Logout</p>
            </div>
            ) : (
            <div className="rounded-full p-2 px-4 hover:bg-gray-200 ml-1 duration-500 cursor-pointer">
              <p>Sign in</p>
            </div>
            )}
            <img src={admin ? profilePic : noProfilePic} alt="" className='w-[45px] h-[45px] md:w-[45px] md:h-[45px] rounded-full ml-3' />
          </div>
        </div>
      </div>

  )
}

export default Topbar