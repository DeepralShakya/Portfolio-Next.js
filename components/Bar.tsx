import { ISkill } from '@/type'
import React, { FunctionComponent } from 'react'

const Bar:FunctionComponent<{
    data:ISkill
}> = ({data:{Icon, level, name}}) => {
  return (
    <div className='my-2 text-white rounded-full bg-cyan-700'>
      <div className='flex items-center px-2 py-1 rounded-full bg-gradient-to-r from-orange-600 to-orange-100' style={{width:level}}>
        <Icon className='m-2'/>
        {name}
      </div>
    </div>
  )
}

export default Bar

