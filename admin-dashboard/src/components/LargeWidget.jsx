import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import profilePic from '../assets/image.jpg'
import { userRequest } from '../requestMethods'
import { format } from 'timeago.js'

const LargeWidget = () => {
  const [orders, setOrders] = useState([])
  
  useEffect(() => {
    const getOrders = async () => {
        try {

            const res = await userRequest.get('orders')
            setOrders(res.data)
        } catch {}
    }
    getOrders()
  }, [])
  

  const Button = (type) => {
        if (type = 'approved') {
          return (<button className='bg-green-300 text-gray-900 px-3 py-1 rounded-lg'>Approved</button>)
        }else if (type = 'pending') {
          return <button className='bg-blue-300 text-gray-900 px-3 py-1 rounded-lg'>Pending</button>
        } else if (type = 'declined') {
          return <button className='bg-red-300 text-gray-900 px-3 py-1 rounded-lg'>Declined</button>
        }
      

        return <button>Click me</button>
    }
  
    return (
    <div className='md:w-3/5 w-full ml-10'>
        <h2 className='text-2xl mb-3 px-3'>Recent Transactions</h2>
        
        <table className="w-full text-center">
        <tr className="">
          <th className="">Customer</th>
          <th className="">Date</th>
          <th className="">Amount</th>
          <th className="">Status</th>
        </tr>
        {orders.map((order) => (
          <tr key={order._id} className="rounded-[16px] duration-500 hover:bg-gray-200 cursor-pointer">
            <td className="flex flex-row justify-start pl-4 py-2">
              <img
                src={profilePic}
                className="w-14 rounded-full mr-5"
              />
              <p className="flex items-center text-lg">{order.userId}</p>
            </td>
            <td className="">{format(order.createdAt)}</td>
            <td className="">{order.amount}</td>
            <td className="">
              <Button type={order.status}/>
            </td>
          </tr>
        ))}

        
        </table>
    </div>
  )
}

export default LargeWidget