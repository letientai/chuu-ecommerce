import React from 'react'
import './Products.scss'
import { Heart  } from "react-bootstrap-icons";
const product = ({ data }) => {
  return (
    <div className='col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 itemProduct' >
      <div className="itemProduct__img">
        {data.assets.map((item, i) => {
          return (
            <div 
            key={i}
            className='itemProduct__img__item' 
            style={{
              backgroundImage : 'url(' + item.url +')'
            }} 
            ></div>
          )
        })}
        <button className='itemProduct__btn--addCart'>
          add cart
        </button>
      </div>
      <div className='itemProduct__name' >
        <p>
          <span>{data.name}</span>
        </p>
      </div>
      <div className='d-flex itemProduct__price' >
        <span>${data.price}</span>
        <button className='itemProduct__price__btn'>
          <Heart/>
        </button>
      </div>
      <p>Lượt mua: {data.sort_oder}</p>
    </div>
  )
}

export default product
