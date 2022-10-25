import React from 'react'
import { Link } from 'react-router-dom'

const TextBanner = () => {
  return (
    <div className='h-[30vh] bg-white flex flex-col items-center justify-center px-[4vw]'>
        <div>
            <p className=''>Up to</p>
            <h1 className='mb-[3vh] text-5xl font-bold'>40% OFF SELECTED ITEMS</h1>
            <Link to={'/products/mens'}><p className='flex mx-auto bg-transparent cursor-pointer border-black border-2 w-fit px-4 py-1 hover:opacity-50'>Shop Sale</p></Link>
        </div>
    </div>
  )
}

export default TextBanner