import React, {useState} from 'react'
import flightClub from '../assets/flightclub.png'
import { AiOutlineStock, AiOutlineHome, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { GiReceiveMoney } from 'react-icons/gi'
import { CgProfile } from 'react-icons/cg'
import { BiStoreAlt } from 'react-icons/bi'
import { BiDollar, BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { VscGraph } from 'react-icons/vsc'
import { HiOutlineMail } from 'react-icons/hi'
import { MdEmail } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { FiUserPlus } from 'react-icons/fi'
import { GiRunningShoe } from 'react-icons/gi'


const Sidebar = () => {
  const [open, setOpen] = useState(true)
  const navigate = useNavigate()

  return (
    <div className={`bg-[#1C1C1C] flex min-h-screen md:flex ${open ? 'w-[24vw]' : 'w-[5vw]'} text-white duration-1000`}>
      
      <div className={`bg-[#1C1C1C] z-10 h-fit w-fit absolute cursor-pointer ${open ? 'left-[17.9vw] top-[8.5vh]' : 'left-[3.6vw] top-[8.5vh]'}  border-dark-purple
           border-2 rounded-full duration-1000 ${!open && "rotate-180"}`} onClick={() => setOpen(!open)}>
        <BiChevronLeft size={40} />
      </div>

      {/* // #############
      // ## Open SIDEBAR##
      // ################# */}
      <div className='w-full flex justify-center'>
      {open ? (
            <div className='w-full m-5 mx-12'>
              {/* Header */}
              <div className="mb-24 flex flex-row items-center">
                <img src={flightClub} className='w-40 h-10 bg-transparent'/>

              </div>
              
      
              {/* Menu section 1 */}
              <div>
                <h3 className='mb-1 text-white opacity-40 '>Dashboard</h3>
                <ul>
                  <li onClick={() => navigate('/')} className='flex flex-row py-1 px-2 rounded-lg duration-500 items-center cursor-pointer hover:bg-[#2e2e2ee1]'>
                    <div>
                      <AiOutlineHome size={27}/>
                    </div>
                    <p className='ml-3 font-semibold '>Home</p>
                  </li>
                  <li onClick={() => navigate('/')} className='flex flex-row py-1 px-2 rounded-lg duration-500 items-center cursor-pointer hover:bg-[#2e2e2ee1]'>
                    <div>
                      <AiOutlineStock size={27}/>
                    </div>
                    <p className='ml-3 font-semibold'>Analytics</p>
                  </li>
                  <li onClick={() => navigate('/')} className='flex flex-row py-1 px-2 rounded-lg duration-500 items-center cursor-pointer hover:bg-[#2e2e2ee1]'>
                    <div>
                      <GiReceiveMoney size={27}/>
                    </div>
                    <p className='ml-3 font-semibold'>Sales</p>
                  </li>
                </ul>
              </div>
      
              <div>
                <h3 className='mb-1 mt-3 text-white opacity-40'>Menu</h3>
                <ul>
                  <li onClick={() => navigate('/users')} className='flex flex-row py-1 px-2 rounded-lg duration-500 items-center cursor-pointer hover:bg-[#2e2e2ee1]'>
                    <div>
                      <CgProfile size={27}/>
                    </div>
                    <p className='ml-3 font-semibold'>Users</p>
                  </li>
                  <li onClick={() => navigate('/products')} className='flex flex-row py-1 px-2 rounded-lg duration-500 items-center cursor-pointer hover:bg-[#2e2e2ee1]'>
                    <div>
                      <BiStoreAlt size={27}/>
                    </div>
                    <p className='ml-3 font-semibold'>Products</p>
                  </li>
                  <li onClick={() => navigate('/newUser')} className='flex flex-row py-1 px-2 rounded-lg duration-500 items-center cursor-pointer hover:bg-[#2e2e2ee1]'>
                    <div>
                      <FiUserPlus size={27}/>
                    </div>
                    <p  className='ml-3 font-semibold whitespace-nowrap'>Create User</p>
                  </li>
                  <li onClick={() => navigate('/newproduct')} className='flex flex-row py-1 px-2 rounded-lg duration-500 items-center cursor-pointer hover:bg-[#2e2e2ee1]'>
                    <div>
                      <GiRunningShoe size={27}/>
                    </div>
                    <p className='ml-3 font-semibold whitespace-nowrap'>Create Product</p>
                  </li>
                </ul>
              </div>
      
              <div>
                <h3 className='mb-1 mt-3 text-white opacity-40'>Contact</h3>
                <ul>
                  <li onClick={() => window.open('https://github.com/gsahlieh/')} className='flex flex-row py-1 px-2 rounded-lg duration-500 items-center cursor-pointer hover:bg-[#2e2e2ee1]'>
                    <div>
                      <AiFillGithub size={27}/>
                    </div>
                    <p className='ml-3 font-semibold'>GitHub</p>
                  </li>
                  <li onClick={() => window.open('https://www.linkedin.com/in/gabriel-sahlieh-46534621b/')} className='flex flex-row py-1 px-2 rounded-lg duration-500 items-center cursor-pointer hover:bg-[#2e2e2ee1]'>
                    <div>
                      <AiFillLinkedin size={27}/>
                    </div>
                    <p className='ml-3 font-semibold'>LinkedIn</p>
                  </li>
                  <li onClick={() => window.open('mailto:gsahlieh@outlook.com')} className='flex flex-row py-1 px-2 rounded-lg duration-500 items-center cursor-pointer hover:bg-[#2e2e2ee1]'>
                    <div>
                      <MdEmail size={27}/>
                    </div>
                    <p className='ml-3 font-semibold'>Email</p>
                  </li>
      
                </ul>
              </div>
            </div>

      // ##################
      // ##CLOSED SIDEBAR##
      // ##################
      ) : (
        <div className='w-full m-5'>
        {/* Header */}
        <div className="mb-14 flex flex-row items-center pt-10">
          <img src={flightClub} className='w-full bg-transparent'/>

        </div>
        

        {/* Menu section 1 */}
        <div>
          <h3 className='invisible mb-1 text-white opacity-40 '>Dashboard</h3>
          <ul>
            <li onClick={() => navigate('/')} className='w-fit mx-auto flex flex-row py-1 px-2 rounded-lg duration-500 items-center cursor-pointer hover:bg-[#2e2e2ee1]'>
              <div>
                <AiOutlineHome size={27}/>
              </div>
              
            </li>
            <li onClick={() => navigate('/')} className='w-fit mx-auto flex flex-row py-1 px-2 rounded-lg duration-500 items-center cursor-pointer hover:bg-[#2e2e2ee1]'>
              <div>
                <AiOutlineStock size={27}/>
              </div>
            </li>
            <li onClick={() => navigate('/')} className='w-fit mx-auto flex flex-row py-1 px-2 rounded-lg duration-500 items-center cursor-pointer hover:bg-[#2e2e2ee1]'>
              <div>
                <GiReceiveMoney size={27}/>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h3 className='invisible mb-1 mt-3 text-white opacity-40'>Menu</h3>
          <ul>
            <li onClick={() => navigate('/users')} className='w-fit mx-auto flex flex-row py-1 px-2 rounded-lg duration-500 items-center cursor-pointer hover:bg-[#2e2e2ee1]'>
              <div>
                <CgProfile size={27}/>
              </div>
            </li>
            <li onClick={() => navigate('/products')} className='w-fit mx-auto flex flex-row py-1 px-2 rounded-lg duration-500 items-center cursor-pointer hover:bg-[#2e2e2ee1]'>
              <div>
                <BiStoreAlt size={27}/>
              </div>
            </li>
            <li onClick={() => navigate('/newUser')} className='w-fit mx-auto flex flex-row py-1 px-2 rounded-lg duration-500 items-center cursor-pointer hover:bg-[#2e2e2ee1]'>
              <div>
                <FiUserPlus size={27}/>
              </div>
            </li>
            <li onClick={() => navigate('/newproduct')} className='w-fit mx-auto flex flex-row py-1 px-2 rounded-lg duration-500 items-center cursor-pointer hover:bg-[#2e2e2ee1]'>
              <div>
                <GiRunningShoe size={27}/>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h3 className='invisible mb-1 mt-3 text-white opacity-40'>Contact</h3>
          <ul>
            <li onClick={() => window.open('https://github.com/gsahlieh/')} className='w-fit mx-auto flex flex-row py-1 px-2 rounded-lg duration-500 items-center cursor-pointer hover:bg-[#2e2e2ee1]'>
              <div>
                <AiFillGithub size={27}/>
              </div>
            </li>
            <li onClick={() => window.open('https://www.linkedin.com/in/gabriel-sahlieh-46534621b/')} className='w-fit mx-auto flex flex-row py-1 px-2 rounded-lg duration-500 items-center cursor-pointer hover:bg-[#2e2e2ee1]'>
              <div>
                <AiFillLinkedin size={27}/>
              </div>
            </li>
            <li onClick={() => window.open('mailto:gsahlieh@outlook.com')} className='w-fit mx-auto flex flex-row py-1 px-2 rounded-lg duration-500 items-center cursor-pointer hover:bg-[#2e2e2ee1]'>
              <div>
                <MdEmail size={27}/>
              </div>
            </li>

          </ul>
        </div>
      </div>
      )}
    </div>

    </div>
  )
}

export default Sidebar