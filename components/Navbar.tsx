
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FunctionComponent, useEffect, useState } from 'react'

const NavItem: FunctionComponent<{
  activeItem: string,
  setActiveItem: Function,
  name: string,
  route: string
}> = ({ activeItem, setActiveItem, name, route }) => {
  return (
    <Link href={route}>
      <span
        onClick={() => setActiveItem(name)}
        className={`font-bold hover:text-red-500 ${activeItem === name ? 'text-red-500 border-b-4' : ''}`}
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
    if (pathname === '/') setActiveItem('About')
    if (pathname === '/projects') setActiveItem('Projects')
    if (pathname === '/resume') setActiveItem('Resume')
  }, [pathname])

  return (
    <div className='flex justify-between py-5 my-2 px-7'>
      <div className='flex space-x-8 text-lg'>
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='About' route='/' />
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Projects' route='/projects' />
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Resume' route='/resume' />
      </div>
    </div>
  )
}

export default Navbar