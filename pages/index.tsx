import ServiceCard from '@/components/ServiceCard'
import { services } from '@/data'
import React from 'react'

const index = () => {
  return (
    <div className='flex flex-col px-8 pt-2'>
      <h1 className='my-3 font-medium'>Aspiring Frontend Developer with a solid foundation in web development, proficient in HTML, CSS,
      JavaScript, React and NextJs. Equipped with hands-on experience in creating responsive and user-friendly interfaces.</h1>
      <div className='p-5 my-12 bg-orange-300 rounded' style={{marginLeft:'-1.5rem', marginRight:'-1.5rem'}}>
        <h4 className='mt-1 mb-6 text-xl font-bold '>Skills & Technologies</h4>
        <div className='grid gap-3 lg:grid-cols-2'>
          {services.map(service => (
          <div className='bg-orange-100 rounded-lg'>
          <ServiceCard service={service}/>
          </div>
          ))}
        </div>
      </div>
    </div>
    
  )
}

export default index
