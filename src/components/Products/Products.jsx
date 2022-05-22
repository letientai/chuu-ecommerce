import React, { useState } from 'react'
import datas from '../../assets/Data/datas'
import Pagination from './Pagination/Pagination'
import Product from './Product'
const Products = () => {
  const [loading , setLoading] = useState(false);
  const [currentPage , setCurrentPage] = useState(1);
  const [cardPerPage] = useState(12);
  const indexLastPage = currentPage *  cardPerPage;
  const indexFirstPage = indexLastPage - cardPerPage;
  const currentCardInPage = datas.slice(indexFirstPage , indexLastPage);
  return (
    <div className='col-xxl-10 col-lg-9 col-md-9' >
      {
        loading?
        <div className='row loading' >
          <h3>Loading</h3>
        </div>
        :
        <div className='row' >
            {currentCardInPage.map((data , item) =>{
              return (
                <Product key={data.id} data={data} ></Product>
              )
            })}
        </div>
      }
      <div className='row' >
          <Pagination  
          cardPerPage={cardPerPage}
          totalProducts={datas.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setLoading={setLoading}
          />
      </div>
    </div>
  )
}

export default Products
