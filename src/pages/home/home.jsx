import React from 'react'
import AllProducts from '../../components/AllProducts/AllProducts'
import { Footer } from '../../components/layout/footer/footer'
import { Navbar } from '../../components/layout/navbar/navbar'
import NavigateProducts from '../../components/NavigateProducts/NavigateProducts'

export const Home = () => {
  return (
    <div className='container-fluid' >
        <NavigateProducts/>
        <AllProducts/>



        
    </div>
  )
}
