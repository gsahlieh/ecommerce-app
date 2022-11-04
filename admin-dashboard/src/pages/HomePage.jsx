import React, { useState, useMemo, useEffect } from 'react'
import FeaturedInfo from '../components/FeaturedInfo'
import Chart from '../components/Chart'
import { userData } from '../assets/defaultData'
import SmallWidget from '../components/SmallWidget'
import LargeWidget from '../components/LargeWidget'
import { userRequest } from '../requestMethods'

const HomePage = () => {
  const [userStats, setUserStats] = useState([])

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    []
  )

    useEffect(() => {

      const getStats = async () => {
        try {
          const res = await userRequest.get('/users/stats')
          res.data.map((item) => setUserStats((prev) => [...prev, { name: MONTHS[item._id - 1], "Active User": item.total }]))
        } catch (err) {
          
        }
      }
      getStats()
    }, [MONTHS])

    console.log(userStats)

  return (
    <div className='w-full mx-auto overflow-clip p-5 max-w-[76vw]'>
      <FeaturedInfo />
      <div className='h-[50vh] bg-[#F7F9FB] rounded-[16px] p-2 shadow-md'>
        <Chart height={47} data={userData} title='User Analytics' grid dataKey='Active Users'/>
      </div>

      {/* Widgets */}
      <div className='flex flex-col md:flex-row px-[2vw] mt-16'>
        <SmallWidget />
        <LargeWidget />
      </div>


    </div>
  )
}

export default HomePage