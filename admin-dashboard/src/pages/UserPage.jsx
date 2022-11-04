import React, { useState } from 'react'
import profilePic from '../assets/image.jpg'
import { HiOutlineMail } from 'react-icons/hi'
import { CgProfile } from 'react-icons/cg'
import { BsPhone, BsUpload } from 'react-icons/bs'
import { BiCurrentLocation } from 'react-icons/bi'
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { userRequest } from '../requestMethods'
import { TbKeyOff, TbKey } from 'react-icons/tb'
import { GrUpdate } from 'react-icons/gr'
import { IoCreateOutline } from 'react-icons/io5'
import { format } from 'timeago.js'
import noProfilePic from '../assets/no-profile-pic.webp'

const UserPage = () => {
  const userId = useParams()
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await userRequest.get(`/users/find/${userId.userId}`)
        setUser(res.data)
      } catch (error) {}
    }
    getUser()
  })



  return (
    <div className='h-full p-10 flex flex-col w-full'>
      <div className='w-full flex flex-row justify-between items-center  mb-5'>
        <h1 className='text-3xl'>Edit User Information</h1>
        <div><Link to={'/newUser'} className='w-fit rounded-lg cursor-pointer bg-blue-600 text-white border-2 p-2 px-6 hover:bg-blue-700 mx-auto mb-4 disabled:cursor-not-allowed' >Create</Link></div>
      
      </div>
      
      <div className='flex flex-row'>

        <div className='w-1/3'>
          
          {/* current info */}
          <div>
            <div className='flex flex-row mb-4'>
              <img src={user.img || noProfilePic} alt="" className='w-[60px] h-[60px] rounded-full' />
              <div className='text-center ml-5 items-center flex flex-col pt-1'>
                  <h5 className='font-semibold text-xl'>{user.username}</h5>
                  <p>{user.email}</p>
              </div>
            </div>

            <div className='mb-5'>
              <h5 className='mb-2 text-gray-400 font-semibold'>Account Details</h5>
              <div className='flex flex-row items-center mb-2'>
                <CgProfile size={20} className='flex items-center justify-center' />
                <p className='ml-2 flex items-center'>{user._id}</p>
              </div>
              <div className='flex flex-row items-center mb-2'>
                {user.isAdmin ? <TbKey size={20} /> : <TbKeyOff size={20} /> }
                
                <p className='ml-2 flex items-center'>{user.isAdmin ? 'Admin' : 'Not Admin' }</p>
              </div>
            </div>

            <div>
              <h5 className='mb-2 text-gray-400 font-semibold'>Contact Details</h5>
              <div className='flex flex-row items-center mb-2'>
                <HiOutlineMail size={20} className='flex items-center justify-center'/>
                <p className='ml-2 flex items-center'>{user.email}</p>
              </div>
              <div className='flex flex-row items-center mb-2'>
                <IoCreateOutline size={20} className='flex items-center justify-center'/>
                <p className='ml-2 flex items-center'>Created {format(user.createdAt)}</p>
              </div>
              <div className='flex flex-row items-center mb-2'>
                <GrUpdate size={20} className='flex items-center justify-center'/>
                <p className='ml-2 flex items-center'>Updated {format(user.updatedAt)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Info edit inputs */}
        <div className='w-2/3 p-3'>

          <h2 className='mb-4'>Edit Information</h2>

          <div className='flex flex-row  justify-between '>
            <div className='w-2/3'>
              <form action="">
                <div className='flex flex-col'>
                  <label htmlFor="email" className='mb-2'>Username</label>
                  <input type="text" placeholder='Username' className='border-2 w-/5 px-3 py-1 mb-4'/>
                </div>

                <div className='flex flex-col'>
                  <label htmlFor="email" className='mb-2'>Email</label>
                  <input type="text" placeholder='Email' className='border-2 w-/5 px-3 py-1 mb-4'/>
                </div>

                <div className='flex flex-col'>
                  <label htmlFor="email" className='mb-2'>New Password</label>
                  <input type="text" placeholder='Password' className='border-2 w-/5 px-3 py-1 mb-4'/>
                </div>

                <div className='flex flex-col'>
                  <label htmlFor="email" className='mb-2'>Confirm New Password</label>
                  <input type="text" placeholder='Password' className='border-2 w-/5 px-3 py-1 mb-4'/>
                </div>


              </form>
            </div>

            <div >
              <div className='flex flex-col justify-center'>
                <img src={user.img || noProfilePic} alt="" className='w-[15vw] h-[15vw]'/>
                <div className='w-full flex justify-center my-2 cursor-pointer'>
                  <BsUpload size={30} />
                </div>
              </div>

              <div className='flex items-center justify-center'>
              <button className='w-fit rounded-lg cursor-pointer bg-green-600 text-white border-2 p-2 px-6 hover:bg-green-700 mx-auto mb-4 disabled:cursor-not-allowed' >Update</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserPage