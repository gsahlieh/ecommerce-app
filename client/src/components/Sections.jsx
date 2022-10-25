import React from 'react'
import { sections } from '../assets/constants'
import { Link } from 'react-router-dom'

const Sections = () => {
  return (
    <div className='h-[90vh] bg-black text-black m-[1vh] flex flex-col md:flex-row justify-between gap-5'>
        {sections.map((section) => (
            <div className='relative h-full overflow-hidden'>
                <img className='md:h-full w-full md:static absolute md:object-cover z-0' src={section.image} alt="" />
                <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-end z-5 bg-transparent pb-[2vh]'>
                    <h1 className='text-8xl font-bold text-red-600 outline-black outline-4 hover:scale-105 mb-[1vh] duration-500'>{section.title}</h1>
                    <Link to={`/products/${section.title.toLowerCase()}`}><p className='text-2xl text-white bg-black cursor-pointer rounded-lg w-fit px-4 py-2 hover:scale-105 duration-200 font-semibold'>Shop</p></Link>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Sections