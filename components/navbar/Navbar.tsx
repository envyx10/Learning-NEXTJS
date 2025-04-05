import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import { ActiveLink } from "../active-link/ActiveLink"

const navItems = [

  {path:'/about',   text: 'about'},
  {path:'/pricing', text: 'pricing'},
  {path:'/contact', text: 'contact'},

]

export const Navbar = () => {

  return (
    <div className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>

      <Link href={'/'} className="flex item-center">
        <HomeIcon size={16}  className="mr-2"/>
        <span>Home</span>
      </Link>

        <div className='flex flex-1'></div>

      {
        navItems.map(navItems => (
          <ActiveLink key={navItems.path} {...navItems} />
        ))
      }



 
    </div>
    )
}
