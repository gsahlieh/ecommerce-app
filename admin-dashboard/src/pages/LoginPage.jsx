import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../redux/apiCalls'
import { useNavigate, Link } from 'react-router-dom'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = async () => {
    await login(dispatch, { username, password })


    navigate('/')
    window.location.reload();
    


  }



  return (
    <div>
      <div className='flex justify-center '>
            <div className='h-full px-[7vw] py-[3vh] flex flex-col justify-center md:w-2/3 bg-[#F7F9FB] rounded-[16px] shadow-md'>
                
                <h1 className='h-full text-4xl font-bold mx-auto my-8 text-center'>Login</h1>
                <div className='mx-auto h-full flex flex-col justify-center'>
                  <div className=''>
                    <input type="text" placeholder='username' onChange={(e) => setUsername(e.target.value)} className='mx-auto border-2 md:w-full px-3 py-1 mb-4 md:mr-9 rounded-lg' />
                  </div>
                  <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} className='border-2 md:w-full mx-auto px-3 py-1 mb-4 md:mr-9 rounded-lg'/>
                  <Link to={'/'} onClick={handleClick} className=' rounded-lg cursor-pointer bg-green-600 text-white border-2 p-2 px-6 hover:bg-green-700 mx-auto mb-4 text-center'>Login</Link>
                </div>
            </div>
      </div>
    </div>
  )
}

export default LoginPage
