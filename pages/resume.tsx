import Bar from '@/components/Bar'
import { languages, tools } from '@/data'
import React from 'react'

const resume = () => {
  return (
    <div className='px-8'>
      <div className='grid gap-4 md:grid-cols-2'>
        {/* education */}
        <div>
          <h1 className='p-2 text-2xl font-bold'>Education</h1>
          <div className='p-2'>
            <h2>BCA</h2>
            <p>Currently running BCA from D.A.V College</p>
          </div>
        </div>  

        {/* experience */}
        <div>
          <h1 className='p-2 text-2xl font-bold'>Experience</h1>
          <div className='p-2'>
            <h2>Internship in frontend (Next.js)</h2>
          </div>
        </div>
      </div>

       {/* languages */}
       <div className='grid gap-4 md:grid-cols-2'>
        <div>
          <h1 className='p-1 mt-4 text-2xl font-bold'>Languages and Frameworks</h1>
          <div className='p-1'>
            {
              languages.map(Language=> <Bar data={Language} key={Language.name}/>)
            }
          </div>
        </div> 

        {/* Tools*/}
        <div>
          <h1 className='p-1 mt-4 text-2xl font-bold'>Tools</h1>
          <div className='p-1'>
            {
              tools.map(Tool=> <Bar data={Tool} key={Tool.name}/>)
            }
          </div>
        </div> 
       </div>
    </div>
  )
}

export default resume
