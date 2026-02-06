
import { Navlinks } from '../../Constant/Navlink'
import { logo } from '../../image'

type ResponsiveMenuProps={
    showMenu:boolean
}

const ResponsiveMenu = ({showMenu} : ResponsiveMenuProps) => {
  return (
    <div className={`${showMenu? "left-0":"left-[-100%]"}
    fixed top-0 flex-col bg-gray-500 h-screen w-[75%] dark:bg-gray-900 px-8 pt-15 
    ` }>
      <div>
        <img src={logo} alt="" className='w-16' />
      </div>
      <div>
        <ul className='flex flex-col gap-4'>
            {Navlinks.map((item)=>(
                <li key={item.id}>
                    <a href={item.link} className='capitalize'>{item.name}</a>
                </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default ResponsiveMenu
