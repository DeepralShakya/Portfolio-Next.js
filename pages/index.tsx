import { services } from '@/data'
import React from 'react'
import {GetStaticPropsContext} from 'next'

const index = ({services}) => {
  console.log('CLIENT', services)
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default index

export const getStaticProps = async (context: GetStaticPropsContext) =>{

  const res = await fetch('http://localhost:3000/api/services')
  const data = await res.json()

  return {
    props:{
      services: data.services,
    }
  }
}
