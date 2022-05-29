import React from 'react'
import {Trash3} from 'react-bootstrap-icons'
const ItemCart = ({item}) => {
  return (
    <div className="item__cart" >
      <div className="item__cart--left" >
          <img 
          className="item__cart__img" 
          src={item.image}
          ></img>
      </div>
      <div className="item__cart--right" >
          <p className="item__cart__name" >{item.name}</p>
          <p className="item__cart__price" >{item.price}</p>
          <div className="item__cart__quantity d-flex" >
            <ul className='cart__quantity--left d-flex' >
              <li>-</li>
              <li>{1}</li>
              <li>+</li>
            </ul>
            <div className='cart__quantity--right'>
              <button>
                <Trash3/>
              </button>
            </div>
          </div>
          <div className="item__cart__price--total" >
            <p>Tổng giá: 12123123</p>
          </div>
      </div>
    </div>
  )
}

export default ItemCart
