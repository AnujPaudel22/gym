
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { logo } from '../../image'
import { Navlinks } from '../../Constant/Navlink'

const Footer = () => {
  return (
    <div className='w-full bg-gray-500 dark:bg-gray-700 dark:text-white page-container'>
      <div >
        <div className='grid grid-cols-1 md:grid-cols-3 items-center'>
        <div className='flex items-center justify-center gap-5'>
            <img src={logo} alt="logo" className='w-16' />
            <a href="#" ><FaInstagram className='text-3xl'/></a>
            <a href="#"><FaFacebook className='text-3xl'/></a>
            <a href="#"><FaLinkedin className='text-3xl'/></a>
        </div>
        <div className='hidden md:block'>Contact: +977-9861611322</div>
        <div>
            <ul className='hidden md:flex justify-center gap-8'>
                {Navlinks.map((items)=>(
                    <li key={items.id}><a href={items.link} className='font-semibold text-lg cursor-pointer hover:text-primary duration-500'>{items.name}</a></li>
                ))}
            </ul>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer
