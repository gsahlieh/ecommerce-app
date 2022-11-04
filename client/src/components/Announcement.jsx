import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../redux/userRedux'

const Announcement = () => {
  const user = useSelector(state => state.user.currentUser)
  const dispatch = useDispatch()

  return (
    <div className='w-full hidden h-[3vh] md:h-[3vh] bg-red-500 md:flex items-center justify-end'>

        <div className='flex flex-row gap-4 mx-auto md:mr-10'>
            <div>
                <Link to={'/register'}><h3>Register</h3></Link>
            </div>
            <h3>|</h3>
            <div>
                {user ? <h3 className='cursor-pointer' onClick={() => dispatch(logout)}>Logout</h3> : <Link to={'/login'}><h3>Login</h3></Link>}  
                
            </div>
            

        </div>
    </div>
  )
}

export default Announcement