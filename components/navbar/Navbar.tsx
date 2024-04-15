
import Link from "next/link"
import { RiHomeSmile2Line } from "react-icons/ri";
import { ActiveLink } from "../active-link/ActiveLink";

const navItems = [
    { path: '/about', text: 'About' },
    { path: '/pricing', text: 'Pricing' },
    { path: '/contact', text: 'Contact' },
]

export const Navbar = () => {
  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m2 rounded'>
        <Link className="flex items-center" href={'/'}>
            {/* <HomeIcon className='mr-2'/> */}
            <RiHomeSmile2Line className='mr-2'/>
            <span>
                Home
            </span>
        </Link>
        
        <div className='flex flex-1'></div>
            {
                navItems.map(navItems => (
                    <ActiveLink key={navItems.text} {...navItems} />
                ))
            }
    </nav>
  )
}
