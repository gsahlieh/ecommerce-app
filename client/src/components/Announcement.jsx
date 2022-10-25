import React from 'react'
import { Link } from 'react-router-dom'

const Announcement = () => {
  return (
    <div className='w-full hidden h-[3vh] md:h-[3vh] bg-red-500 md:flex items-center justify-end'>

        <div className='flex flex-row gap-4 mx-auto md:mr-10'>
            <div>
                <Link to={'/register'}><h3>Register</h3></Link>
            </div>
            <h3>|</h3>
            <div>
                <Link to={'/login'}><h3>Login</h3></Link>
            </div>
            

        </div>
    </div>
  )
}

export default Announcement