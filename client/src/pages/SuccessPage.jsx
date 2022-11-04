import React from 'react'
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { userRequest } from '../requestMethods';
import { Link } from 'react-router-dom'

const SuccessPage = (stripeData, products) => {
  const location = useLocation()

  const data = location.state.stripeData;
  const cart = location.state.cart;

  console.log(location.state.stripeData)
  console.log(location.state.products)

  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);
  
  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        setOrderId(res.data._id);
      } catch {}
    };
    data && createOrder();
  }, [cart, data, currentUser]);
  
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successful. Your order is being prepared...`}
      <Link to={'/'} style={{ padding: 10, marginTop: 20 }}>Go to Homepage</Link>
    </div>
  );
}

export default SuccessPage