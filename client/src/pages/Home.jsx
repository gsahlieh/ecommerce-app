import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import FeaturesBanner from '../components/FeaturesBanner'
import MainBanner from '../components/MainBanner'
import Announcement from '../components/Announcement'
import Sections from '../components/Sections'
import TextBanner from '../components/TextBanner'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import ProductsShowcase from '../components/ProductsShowcase'


const Home = () => {
    useEffect(() => {
      window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className='w-full max-w-screen flex'>
      <div className=''>
        {/* empty banner except for sign in etc. on right */}
        <Announcement />

        {/* main navbar */}
        <Navbar />
        {/* auto cycle small banner for free shipping etc */}
        <FeaturesBanner />

        {/* main banner */}
        <MainBanner />

        <TextBanner />

        {/* text banner */}
        <Sections />

        {/* <ProductsShowcase /> */}
        <ProductsShowcase />

        {/* corresponding product display grid */}
        <Newsletter />

        {/* footer */}
        <Footer />

      </div>
    </div>
  )
}

export default Home