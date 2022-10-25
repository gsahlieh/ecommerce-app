import React from 'react'
import flightclub from '../assets/flightclub.png'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { MdOutlineClose } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { Badge } from '@mui/material'



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const quantity = useSelector(state => state.cart.quantity)
  
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className='sticky top-0 w-full h-[6vh] md:h-[6vh] bg-black text-white flex items-center z-10'>
      <div className='w-full flex justify-between items-center '>
        {/* logo */}
        <div>
          <Link to={'/'}><img src={flightclub} alt="" className='w-40 h-10 bg-transparent mx-5'/></Link>
        </div>
        {/* Menu/otherpages */}
        {menuOpen &&
        (<div className='w-full md:hidden absolute flex-col bg-gradient-to-b from-black to-gray-900 rounded-b-lg transition-all ease-in-out duration-1000 mt-[32vh] pt-5'>
          <ul className='text-xl mb-5'>
            <Link to={'/products/newReleases'} onClick={() => setMenuOpen(!menuOpen)}><li className='hover:bg-gray-700 duration-700 rounded-lg px-3 py-1 mb-5'>New Releases</li></Link>
            <Link to={'/products/men'}><li className='hover:bg-gray-700 duration-700 rounded-lg px-3 py-1 mb-5'>Men</li></Link>
            <Link to={'/products/women'}><li className='hover:bg-gray-700 duration-700 rounded-lg px-3 py-1 mb-5'>Women</li></Link>
            <Link to={'/products/sale'}><li className='hover:bg-gray-700 duration-700 rounded-lg px-3 py-1 mb-5'>Sale</li></Link>
          </ul>
        </div>)}
        <div>
          <ul className='flex-row gap-5 hidden md:flex'>
            <Link to={'/products/newReleases'}><li className='hover:bg-gray-700 duration-700 rounded-lg px-3 py-1'>New Releases</li></Link>
            <Link to={'/products/men'}><li className='hover:bg-gray-700 duration-700 rounded-lg px-3 py-1'>Men</li></Link>
            <Link to={'/products/women'}><li className='hover:bg-gray-700 duration-700 rounded-lg px-3 py-1'>Women</li></Link>
            <Link to={'/products/sale'}><li className='hover:bg-gray-700 duration-700 rounded-lg px-3 py-1'>Sale</li></Link>
          </ul>
        </div>
        
        {/* search, cart */}
        <div className='flex-row items-center gap-4 flex mx-3'>
          <div className='hidden md:flex '>
            <input  type="text" placeholder='Search' className='pl-3'/>
          </div>
          <Link to={'/cart'}>
            <div className='hover:bg-gray-700 duration-700 rounded-lg p-2 hidden md:flex cursor-pointer'>
              <Badge badgeContent={quantity} color='primary'>
                <AiOutlineShoppingCart size={25}/>
              </Badge>
            </div>
          </Link>
          <div className='cursor-pointer static md:hidden' onClick={handleMenuToggle}>
            {menuOpen ? <MdOutlineClose size={30}/> : <GiHamburgerMenu size={30}/>}
          </div>
        </div>
      </div>
    </div>

  )
}

export default Navbar