import React from 'react'
import { FaShippingFast } from 'react-icons/fa'
import { BiPaperPlane } from 'react-icons/bi'

const FeaturesBanner = () => {
  return (
    <div className='h-[9vh] bg-white flex flex-row items-center justify-between'>
        <div className='bg-gray-200 h-[6vh] m-5 w-full md:w-1/2 flex items-center justify-center font-bold gap-3 cursor-pointer duration-300'>
            <FaShippingFast size={20}/>
            <h3>Free Shipping on orders over $100</h3>
        </div>
        <div className='bg-gray-200 h-[6vh] m-5 hidden md:w-1/2 md:flex items-center justify-center font-bold gap-3 cursor-pointer duration-300'>
            <BiPaperPlane size={20}/>
            <h3>Free returns</h3>
        </div>
    </div>  
  )
}

export default FeaturesBanner