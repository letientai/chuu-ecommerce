import React from 'react'
import Category from '../Category/Category'
import Products from '../Products/Products'
import './AllProducts.scss';
const AllProducts = () => {
  return (
      <div className='all__product' >
        <div className='row'>
          <Category/>
          <Products />
        </div>
      </div>
    
  )
}

export default AllProducts
