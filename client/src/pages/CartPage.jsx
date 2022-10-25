import React from 'react'
import FeaturesBanner from '../components/FeaturesBanner'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { GrAddCircle, GrSubtractCircle } from 'react-icons/gr'
import { useSelector } from 'react-redux'
import StripeCheckout from'react-stripe-checkout'
import { useState } from 'react'
import logo from '../assets/attachment_123198503.png'
import { useEffect } from 'react'
import { userRequest } from '../requestMethods'
import { useNavigate } from 'react-router-dom'

const KEY = 'pk_test_51LvfOMGUYVibWiwZnH9RACuSUGfHH7ClJCozIhRwwEnZJGVBXsuer3LhkScqd7mvsfZXsIaBtC1YpGElq4HYJX0R00gWYBlhhf'

const CartPage = () => {
    const cart = useSelector(state => state.cart)
    const [stripeToken, setStripeToken] = useState(null);
    const navigate = useNavigate();
    

    const onToken = (token) => {
        setStripeToken(token)
    }
    console.log(stripeToken)
    useEffect(() => {
        const makeRequest = async () => {
            try{
                const res = await userRequest.post("/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: cart.total * 100,
                    
                })
                console.log(res.data)
                console.log(cart)
                navigate('/success', {state: {
                    stripeData: res.data,
                    products: cart
                }
                },);
            } catch(err){}
        }
        stripeToken &&  
        // cart.total > 0 && 
        makeRequest()


    }, [stripeToken, cart.total])

    return (
    <div className='w-full max-w-screen flex flex-col '>
        <Navbar />
        <FeaturesBanner />
        <div className='flex flex-col p-10'>
            <div className=''>
                <h2 className='flex justify-center text-4xl mb-8'>YOUR BAG</h2>
                
                <div className='flex flex-row  justify-between items-center mb-5'>
                    
                    <button className='bg-transparent cursor-pointer border-black border-2 w-fit p-1 hover:opacity-50 '>CONTINUE SHOPPING</button>
                    <div className='underline flex-col items-center hidden md:flex'>
                        <p className='hover:opacity-50'>Shopping Bag (2)</p>
                        <p className='hover:opacity-50'>Wishlist (0)</p>
                    </div>
                    <button className='bg-black text-white border-2 px-4 p-1 hover:bg-gray-900'>CHECKOUT NOW</button>
                </div>
            </div>
            
            {/* bottom */}
            <div className='flex flex-col md:flex-row justify-between items-center'>
                {/* info */}
                <div className='flex flex-col w-full md:w-2/3 mr-5'>
                    {/* product */}
                    {cart.products.map((product) => (
                        <div className='w-full flex flex-col md:flex-row items-center justify-between border-b-2' key={product._id}>
                            {/* product details */}
                            <div className='flex flex-col md:flex-row justify-between mb-3'>
                                <img className='md:w-[15vw]' src={product.img} alt="" />
                                <div className='flex flex-col items-center my-auto ml-[3vw] h-full'>
                                    <h2 className='text-2xl font-bold mb-6'>{product.title}</h2>
                                    <p className='mb-3'>{product._id}</p>
                                    <p>Size: US {product.size}</p>
                                </div>
                            </div>
                            {/* price details */}
                            <div className='mb-5'>
                                <div className='flex flex-row m-3'>
                                    <GrSubtractCircle size={30} className='m-2'/>
                                    <p className='m-2 text-2xl'>{product.quantity}</p>
                                    <GrAddCircle size={30} className='m-2' />
                                </div>
                                <p className='text-3xl flex justify-center'>${product.price * product.quantity}</p>
                            </div>
                        </div>
                    )) }
                </div>

                {/* summary */}
                <div className='h-full w-full flex flex-col items-center justify-center md:w-1/3 p-[3vw] border-2'>
                    <h1 className='text-4xl w-full mb-10'>Order Summary</h1>
                    <div className='w-full grid gap-3 mb-[5vh]'>
                        <div className='w-full flex flex-row justify-between items-start'>
                            <h2>Subtotal</h2>
                            <p className=' mr-[5vw]'>${cart.total}</p>
                        </div>
                        <div className='w-full flex flex-row justify-between items-start'>
                            <h2>Shipping</h2>
                            <p className=' mr-[5vw]'>$5.99</p>
                        </div>
                        <div className='w-full flex flex-row justify-between items-start'>
                            <h2>Shipping Discount</h2>
                            <p className=' mr-[5vw]'>-$5.99</p>
                        </div>
                        <div className='w-full flex flex-row justify-between items-start'>
                            <h2 className='font-medium text-2xl'>Total</h2>
                            <p className='font-medium mr-[5vw] text-2xl'>${cart.total}</p>
                        </div>
                    </div>
                    <StripeCheckout
                    name="Flight Club"
                    image={logo}
                    billingAddress
                    shippingAddress
                    description={`Your cart total is $${cart.total}`}
                    amount={cart.total * 100}
                    token={onToken}
                    stripeKey={KEY}>
                        <button className='w-full cursor-pointer bg-black text-white border-2 p-1 hover:bg-gray-900'>CHECKOUT NOW</button>
                    </StripeCheckout>
                </div>
            </div>

        </div>
        <Footer />
    </div>
  )
}

export default CartPage