import { Category } from '@/type'
import React, { FunctionComponent } from 'react'

export const NavItem: FunctionComponent<{value: Category | 'All', handlerFilterCategory:Function,active:string}> = ({value, handlerFilterCategory, active}) => {
  
  let className='px-3 font-bold cursor-pointer hover:text-red-500'
  if(active === value) 
    className += " text-red-500"
  
    return (
    <li className={className} onClick={()=>handlerFilterCategory(value)}>
      {value}
    </li>
  )
}


const ProjectsNavbar:FunctionComponent<{handlerFilterCategory:Function, active:string}> = (props) => {
  return (
    <div className='flex list-none'>
      <NavItem value='All' {...props}/>
      <NavItem value='React' {...props}/>
      <NavItem value='PHP & MySQL' {...props}/>
      <NavItem value='Python' {...props}/>
      <NavItem value='Android Development' {...props}/>
      <NavItem value='NextJs' {...props}/>
    </div>
  )
}

export default ProjectsNavbar
