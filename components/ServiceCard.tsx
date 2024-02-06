import { IService } from '@/type'
import React, { FunctionComponent } from 'react'

const ServiceCard:FunctionComponent<{service:IService}> = ({service:{Icon, about, title}}) => {

    const markup = ()=>{
        return{
            __html:about
        }
    }

  return (
    <div className='flex items-center p-2 space-x-3'>
      <Icon className='w-20 h-20'/>
      <div>
        <h4 className='mb-2 font-bold'>{title}</h4>
        <p dangerouslySetInnerHTML={markup()}/>
      </div>
    </div>
  )
}

export default ServiceCard
