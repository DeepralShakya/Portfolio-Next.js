import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FunctionComponent, useEffect, useState } from 'react'

const NavItem: FunctionComponent<{ name: string; route: string; isActive: boolean }> = ({ name, route, isActive }) => {
  return (
    <Link href={route}>
      <span
        className={`font-bold hover:text-red-500 ${isActive ? 'text-red-500 border-b-4' : ''}`}
        aria-label={name}
      >
        {name}
      </span>
    </Link>
  )
}

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>('')
  const { pathname } = useRouter()

  useEffect(() => {
    const page = pathname === '/' ? 'About' : pathname === '/projects' ? 'Projects' : pathname === '/resume' ? 'Resume' : ''
    setActiveItem(page)
  }, [pathname])

  return (
    <div className='flex justify-between py-5 my-2 px-7'>
      <div className='flex space-x-8 text-lg'>
        <NavItem name='About' route='/' isActive={activeItem === 'About'} />
        <NavItem name='Projects' route='/projects' isActive={activeItem === 'Projects'} />
        <NavItem name='Resume' route='/resume' isActive={activeItem === 'Resume'} />
      </div>
    </div>
  )
}

export default Navbar
