import React from 'react'
import AllProducts from '../../components/AllProducts/AllProducts'
import NavigateProducts from '../../components/NavigateProducts/NavigateProducts'

export const Home = () => {
  return (
    <div className='container-fluid' >
        <NavigateProducts/>
        <AllProducts/>
    </div>
  )
}
