import React, { useState, useMemo, useEffect } from 'react'
import { userRequest } from '../requestMethods'
import profilePic from '../assets/image.jpg'
import { HiOutlineMail } from 'react-icons/hi'
import { CgProfile } from 'react-icons/cg'
import { BiCake } from 'react-icons/bi'
import { BsPhone, BsUpload } from 'react-icons/bs'
import { BiCurrentLocation } from 'react-icons/bi'
import { Link, useParams } from 'react-router-dom'
import { productData } from '../assets/defaultData'
import Chart from '../components/Chart'
import { useSelector } from 'react-redux'




const ProductPage = () => {
  const productId = useParams();

  const [pStats, setPStats] = useState([]);

  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId.productId)
  );

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );


  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("orders/income?pid=" + productId);
        const list = res.data.sort((a,b)=>{
            return a._id - b._id
        })
        list.map((item) =>
          setPStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], Sales: item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [productId, MONTHS]);


  
  return (
    <div className='h-full p-10 flex flex-col w-full'>
      <div className='w-full flex flex-row justify-between items-center  mb-5'>
        <h1 className='text-3xl'>Product Information</h1>
        <div><Link to={'/newUser'} className='w-fit rounded-lg cursor-pointer bg-blue-600 text-white border-2 p-2 px-6 hover:bg-blue-700 mx-auto mb-4 disabled:cursor-not-allowed' >Create</Link></div>
      </div>
      
      {/* first row */}
      <div className='flex flex-col md:flex-row'>
        {/* first box */}
        <div className=' h-[30vh] w-full md:w-1/2 mb-16'>
          <Chart data={productData} title='Sales Performance' grid dataKey='Sales'/>
        </div>

        {/* second box */}
        <div className='w-full md:w-1/2 m-3 p-4 border-2 flex flex-col shadow-xl rounded-lg'>
          <div className='flex flex-row items-center'>
            <img src={product.img} alt="" className='w-[50px] h-[50px] rounded-full'/>
            <p className='ml-3 font-semibold'>{product.title}</p>
          </div>
          <div className='py-2 w-full'>
            <div className='flex flex-row w-full justify-between'>
              <p>id: {product._id}</p>
            </div>

            <div className='flex flex-row w-full justify-between'>
              <p>Brand: {product.brand.charAt(0).toUpperCase() + product.brand.slice(1)}</p>
            </div>

            <div className='flex flex-row w-full justify-between'>
              <p>Price: ${product.price}</p>
            </div>

            <div className='flex flex-row w-1/4 justify-between'>
              <p>in stock: {product.inStock ? 'yes' : 'no'}</p>
            </div>
          </div>
        </div>
      </div>

      {/* second row */}
      <div className='flex flex-col md:flex-row justify-between mt-5 p-3 border-2 shadow-xl rounded-lg'>
        <div>
          <h5 className='mb-2 text-gray-600 font-semibold text-xl'>Product Name</h5>
          <p>{product.title}</p>
          <div className='w-3/5 md:w-[20vw] mt-4 flex flex-row justify-start mb-3'>
            <div className="w-full flex flex-row  justify-between items-center">
              <label className=' px-1'>Active</label>
              <select className="w-2/3 ml-5 rounded-lg px-1 border-2" name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>

        </div>
          <div className='flex flex-col justify-center'>
            <div className='w-full flex justify-center'>
              <img src={product.img} alt="" className='w-[150px]'/>
            </div>
            
            <input type="file" id="file" className='text-transparent flex flex-col pl-[35%]'/>
            <button className='mt-4 w-fit rounded-lg cursor-pointer bg-green-600 text-white border-2 p-2 px-6 hover:bg-green-700 mx-auto mb-4'>CREATE PRODUCT</button>
        </div>
      </div>

    </div>
  )
}

export default ProductPage