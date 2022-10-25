import React from 'react'
import { productsToShowcase } from '../assets/constants'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

const ProductsShowcase = (
  {category, filters, sort}
  ) => {
    
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get( category === {} ? `http://localhost:5000/api/products?category=${category.category}` : `http://localhost:5000/api/products`);
        setProducts(res.data)

      } catch (err) {}
    }
    getProducts()
  }, [category])

  useEffect(() => {
    category && setFilteredProducts(products.filter((item) => Object.entries(filters).every(([key, value]) => item[key].includes(value))))

  }, [products, category, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "price L->H") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else if (sort === "price H->L") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      )
    } else if (sort === "alphabetical") {
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => b.title - a.title)
        );
    }
  }, [sort]);
  
  return (
    <div className='w-full'>
        <div className='w-full mt-4 grid gap-8 justify-between grid-cols-2 md:grid-cols-3'>
          {category ? 
          filteredProducts.map((product) => (
              <Link key={product._id} to={`/product/${product._id}`}>
                <div className='animate-slider-right border-2 hover:opacity-50 cursor-pointer duration-300'>
                  <img src={product.img} alt="image" className=" object-cover"/>
                  <p className='text-lg overflow-auto px-6 md:pb-7 font-bold'>{product.title}</p>
                </div>
              </Link>
          )) : (
            products.map((product) => (
              <Link key={product._id} to={`/product/${product._id}`}>
                <div className='animate-slider-right border-2'>
                  <img src={product.img} alt="image" className=" object-cover"/>
                  <p className='text-lg overflow-auto px-6 md:pb-7 font-bold'>{product.title}</p>
                </div>
              </Link>
          )))}
        </div>
    </div>
  )
}

export default ProductsShowcase