import React from 'react'
import FeaturesBanner from '../components/FeaturesBanner'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import ProductsShowcase from '../components/ProductsShowcase'
import { GrAddCircle, GrSubtractCircle } from 'react-icons/gr'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/cartRedux'
import axios from 'axios';

const ProductPage = () => {
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState('')
    const productId = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        const getProductById = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/products/find/${productId.id}`)
                setProduct(res.data)
            } catch(e){}
        }
        getProductById()
  
    }, [])

    const handleClick = () => {
        product.size = size
        dispatch(addProduct({ ...product, quantity, size }))
    }
  
    return (
    <div className='w-full max-w-screen flex flex-col '>
        <Navbar />
        <FeaturesBanner />

        {product == null ? <div>Wait</div> : 
        <div className='w-full flex flex-col md:flex-row px-[3vw]'>
            <div className=''>
                <img className='object-cover' src={product.img} alt="" />
            </div>
            <div className='p-[5vw] flex flex-col px-[3vw] md:w-1/2'>
                <h1 className='text-5xl font-bold my-5'>{product.title}</h1>
                <p className='mb-3'>{product.desc}
                </p>
                <p className='font-medium text-4xl'>${product.price}</p>
                <div className='flex flex-row items-center my-[5vh] justify-between'>
                        <div className='border-2 p-2 mr-[3vw]'>
                            <label htmlFor="Size" className='text-xl'>Size:</label>
                            <select name="Size" id="" className='text-xl' onChange={(e) => setSize(e.target.value)}>
                                <option value="">Please Select</option>
                                <option value="7">US 7</option>
                                <option value="8">US 8</option>
                                <option value="9">US 9</option>
                                <option value="10">US 10</option>
                                <option value="11">US 11</option>
                                <option value="12">US 12</option>
                                <option value="13">US 13</option>
                            </select>
                        </div>
                        <div className='m-0'>
                            <div className='flex md:flex-row'>
                                <div className='flex flex-row m-3'>
                                    <GrSubtractCircle size={30} className='m-2 hover:opacity-50 cursor-pointer' onClick={() => { quantity > 0 ? setQuantity(quantity - 1) : setQuantity(0)}}/>
                                    <p className='m-2 text-2xl select-none'>{quantity}</p>
                                    <GrAddCircle size={30} className='m-2 hover:opacity-50 cursor-pointer' onClick={() => setQuantity(quantity + 1)}/>
                                </div>
                                <button className='bg-transparent cursor-pointer border-black border-2 w-fit p-1 hover:opacity-50 select-none' onClick={handleClick}>ADD TO CART</button>
                            </div>
                        </div>
                </div>
            </div>
        </div>}
        
        <ProductsShowcase />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default ProductPage