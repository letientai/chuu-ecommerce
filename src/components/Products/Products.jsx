import React, { useState } from 'react'
import { Spinner } from 'react-bootstrap'
import datas from '../../assets/Data/data'
import Pagination from './Pagination/Pagination'
import Product from './Product'
const Products = () => {
  const [loading , setLoading] = useState(false);
  const [currentPage , setCurrentPage] = useState(1);
  const [cardPerPage , setCardPerPage] = useState(12);
  const indexLastPage = currentPage *  cardPerPage;
  const indexFirstPage = indexLastPage - cardPerPage;
  const currentCardInPage = datas.slice(indexFirstPage , indexLastPage);
  return (
    <div className='col-xxl-10 col-lg-9 col-md-9' >
      {
        loading?
        <div className='row loading' >
           <Spinner animation="border" variant="danger" />
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
