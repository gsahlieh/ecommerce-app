import React, { useEffect, useState } from 'react'
import { HiArrowNarrowDown, HiArrowNarrowUp } from 'react-icons/hi'
import { userRequest } from '../requestMethods'

const FeaturedInfo = () => {
  const [income, setIncome] = useState([])
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
        try{
            const res = await userRequest.get('orders/income')
            setIncome(res.data)
            setPercentage((res.data[-1].sales*100) / res.data[-2].sales - 100)
        }catch {}

    }
    getIncome()
  }, [])
  
    return (
    <div className='w-full flex flex-col md:flex-row mb-10'>
        <div className='bg-[#E3F5FF] w-full flex flex-col mr-0 md:mr-5 mb-5 md:mb-0 rounded-[16px] p-2'>
            <h1 className='text-3xl text-center mb-4 font-semibold '>Revenue</h1>
            <div className='flex flex-row justify-center mb-2'>
                <h2 className='text-center text-3xl'>${income[-1]?.sales}</h2>
                <div className='flex flex-row pl-4 items-center '>
                    <span className='mr-1'>{Math.floor(percentage)}% </span>
                    {percentage < 0 ? <HiArrowNarrowDown size={20} color='red'/> : <HiArrowNarrowUp size={20} color='green'/>}
                </div>
            </div>
            <span className='text-center'>
                Compared to last month
            </span>
        </div>
        <div className='bg-[#E5ECF6] w-full flex flex-col mr-0 md:mr-5 mb-5 md:mb-0 rounded-[16px] p-2'>
            <h1 className='text-3xl text-center mb-4 font-semibold'>Sales</h1>
            <div className='flex flex-row justify-center mb-2'>
                <h2 className='text-center text-3xl'>$2000</h2>
                <div className='flex flex-row pl-4 items-center'>
                    <span  className='mr-1'>-11% </span>
                    <HiArrowNarrowDown size={20} color='red'/>
                </div>
            </div>
            <span className='text-center'>
                Compared to last month
            </span>
        </div>
        <div className='bg-[#E3F5FF] w-full flex flex-col  mb-5 md:mb-0 rounded-[16px] p-2'>
            <h1 className='text-3xl text-center mb-4 font-semibold'>Cost</h1>
            <div className='flex flex-row justify-center mb-2'>
                <h2 className='text-center text-3xl'>$2000</h2>
                <div className='flex flex-row pl-4 items-center'>
                    <span className='mr-1'>-11% </span>
                    <HiArrowNarrowDown size={20} color='red'/>
                </div>
            </div>
            <span className='text-center'>
                Compared to last month
            </span>
        </div>
    </div>
  )
}

export default FeaturedInfo