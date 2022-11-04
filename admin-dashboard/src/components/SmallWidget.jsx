import React, { useState } from 'react'
import profilePic from '../assets/image.jpg'
import { AiFillEye } from 'react-icons/ai'
import { useEffect } from 'react';
import { userRequest } from '../requestMethods';
import axios from 'axios'
import { Link } from 'react-router-dom'

const SmallWidget = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
        try {

            const res = await userRequest.get('users/?new=true')
            setUsers(res.data)
        } catch {}
    }
    getUsers()
  }, [])
  
    return (
    <div className='md:w-2/5 w-full'>
        <h2 className='text-2xl mb-3 px-3'>New Sexy Members</h2>
        <ul>
            {users.map((user) => (
                <li key={user._id} className='flex flex-row px-3 py-2 justify-between rounded-[16px] duration-500 '>
                    <img src={user.img || profilePic} alt="" className='w-14 rounded-full' />
                    <div className='text-center'>
                        <h5 className='font-semibold text-xl'>{user.username}</h5>
                        <p>{user.email}</p>
                    </div>
                    <div className='flex items-center'>
                        <Link to={`/user/${user._id}`} className='rounded-lg bg-gray-400 px-2 h-fit py-2 flex flex-row items-center hover:bg-gray-200 cursor-pointer'>
                            <AiFillEye />
                            <p className='ml-1'>Display</p>
                        </Link>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default SmallWidget