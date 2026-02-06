
import { FaPhoneAlt } from 'react-icons/fa'
import logo from '../../assets/images/logo.png'
import { Navlinks } from '../../Constant/Navlink'
import DarkMode from './DarkMode'
import { IoMdClose } from 'react-icons/io'
import { CiMenuBurger } from 'react-icons/ci'
import ResponsiveMenu from './ResponsiveMenu'
import { useState } from 'react'

const Navbar = () => {
  const [showMenu, setMenu]= useState(false)
  const handleMenuToggle=()=>setMenu(!showMenu)
  return (
    <div className='sticky top-0 z-50 bg-gray-500 dark:bg-black dark:text-white'>
      <div className='page-container'>
        <div className='flex justify-between'>
        <div className=' md:flex hidden items-center '>
            <FaPhoneAlt className='text-primary ml-5 dark:text-white'/>
            <span className='text-primary dark:text-white'>+977-9861611322</span>
        </div>
        <div>
          <img src={logo} alt="Logo" className='w-22'/>
        </div>
        <nav className='hidden md:flex items-center text-primary dark:text-white '>
          <ul className='flex gap-8 m-5'>
            {Navlinks.map((item)=>(
              <li key={item.id}>
                <a href={item.link} className='font- font-semibold text-lg'>{item.name}</a>
                
              </li>
             
            ))}
             <DarkMode/>
          </ul>
        </nav>
        <div className='md:hidden flex px-5 gap-10'>
          <DarkMode/>
          {showMenu ? (
            <IoMdClose onClick={handleMenuToggle}/>
          ):(
            <CiMenuBurger onClick={handleMenuToggle}/>
          )}
        </div>
      </div>
      </div>
      <ResponsiveMenu showMenu={showMenu}/>
    </div>
  )
}

export default Navbar
