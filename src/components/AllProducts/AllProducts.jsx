import React from 'react'
import Category from '../Category/Category'
import Products from '../Products/Products'
import './AllProducts.scss';
const AllProducts = ({search}) => {
  return (
      <div className='all__product' >
        <div className='row'>
          <Category/>
          <Products search={search}/>
        </div>
      </div>
    
  )
}

export default AllProducts
