import React from 'react'
import {IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { mainBannerSlides } from '../assets/constants'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const MainBanner = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
        console.log(direction)
        console.log(slideIndex)
        console.log(slideIndex * -100)
        console.log(`translate-x-[${slideIndex * -100}vw]`)
    }
  
    return (
    <div className='w-full h-[100vh] md:flex overflow-hidden hidden z-0'>
        <div className='w-[10vh] h-[10vh] bg-[#fcf1f1] rounded-full flex items-center justify-center absolute top-0 bottom-0 left-2 m-auto cursor-pointer opacity-50' direction='left' onClick={() => handleClick('left')}>
            <IoIosArrowBack size={75} className='text-black'/>
        </div>
        <div className={`h-[100vh] flex flex-row transition-all duration-150 ease-in translate-x-[${slideIndex * -100}vw]`}>
            {mainBannerSlides.map((slide) => (
                <div key={slide.index} className={`w-[100vw] h-[100vh] flex items-center ${slide.backgroundColor} text-white`}>
                    <div className='h-[100vh] '>
                        <img className='h-[80vh] w-full' src={slide.image} alt="" />
                    </div>
                    <div className=' p-[5vw] flex-1 flex flex-col gap-8'>
                        <h1 className='mx-auto text-6xl font-bold'>{slide.title}</h1>
                        <p className='mx-auto'>{slide.description}</p>
                        <Link to={'/products/mens'}><p className='mx-auto bg-transparent cursor-pointer border-white border-2 w-fit p-3 hover:opacity-50'>{slide.buttonText}</p></Link>
                    </div>
                </div>
            ))}
        </div>
        <div className='w-[10vh] h-[10vh] bg-[#fcf1f1] rounded-full flex items-center justify-center absolute top-0 bottom-0 right-2 m-auto cursor-pointer opacity-50 ' direction='right' onClick={() => handleClick('right')}>
            <IoIosArrowForward size={75} className='text-black'/>
        </div>
    </div>
  )
}

export default MainBanner