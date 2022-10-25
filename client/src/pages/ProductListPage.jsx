import React from 'react'
import Navbar from '../components/Navbar'
import FeaturesBanner from '../components/FeaturesBanner'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import ProductsShowcase from '../components/ProductsShowcase'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

const ProductListPage = () => {
    const category = useParams();
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("popularity");

    const handleFilters = (e) => {
        const value = e.target.value
        setFilters({
            ...filters,
            [e.target.name]: value
        })
        
        
    }

    console.log(filters)
    return (
    <div className='w-full max-w-screen flex flex-col '>
        <Navbar />
        <FeaturesBanner />
        <div className='md:px-[3vw] px-[5vw] pb-[5vh]'>
            <h2 className='text-4xl font-bold '>Products</h2>
            <div className='flex flex-col md:flex-row items-center justify-between py-7 '>
                <div className='flex flex-row items-center md:mb-0 mb-5'>
                    <label htmlFor="form" className='text-xl mr-5'>Filter Products: </label>
            
                    <form name='form' action="">
                        <select name="brand" id="" className='text-xl mr-5' 
                        onChange={handleFilters}
                        >
                            <option value="">Brand</option>
                            <option value="nike">Nike</option>
                            <option value="adidas">Adidas</option>
                            <option value="jordan">Jordan</option>
                            <option value="puma">Puma</option>
                            <option value="reebok">Reebok</option>
                        </select>
                        <select name="Size" id="" className='text-xl mr-5' 
                        onChange={handleFilters}
                        >
                            <option value="">Size</option>
                            <option value="7">US 7</option>
                            <option value="8">US 8</option>
                            <option value="9">US 9</option>
                            <option value="10">US 10</option>
                            <option value="11">US 11</option>
                            <option value="12">US 12</option>
                            <option value="13">US 13</option>
                        </select>
                    </form>
                </div>
                <div className=''>
                    <label htmlFor="sort" className='text-xl mr-5'>Sort By: </label>
                    <select name="sort" id="" className='text-xl mr-5' 
                    onChange={e => {
                        setSort(e.target.value)
                    }}
                    >
                        <option value="newest">Newest</option>
                        <option value="alphabetical">Alphabetical (A to Z)</option>
                        <option value="price L->H">Price (Low to High)</option>
                        <option value="price H->L">Price (High to Low)</option>
                    </select>
                </div>
            </div>
        <ProductsShowcase 
        category={category} filters={filters} sort={sort}
        />
        </div>
        
        <Newsletter />
        <Footer />
    </div>
  )
}

export default ProductListPage