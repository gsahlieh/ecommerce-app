import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'

const Newsletter = () => {
  return (
    <div className='h-[50vh] bg-gray-300'>
        <div className='flex flex-col items-center justify-center h-full mx-auto'>
            <h1 className='text-5xl font-bold mb-10 text-center'>Join our Newsletter</h1>
            <p className='mb-6'>Be notified of updates to your favourite products</p>
            <form action="" className='flex-row flex items-center justify-center w-1/2'>
                <input type="text" placeholder='Your email' className='w-full px-3 py-1' />
                <button className='bg-gray-500 p-1'>
                    <AiOutlineMail  size={25} className='text-white'/>
                </button>
            </form>
        </div>
    </div>
  )
}

export default Newsletter