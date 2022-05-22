import React from "react";
import iconCart from "../../../assets/img-navbar/icon/icon_cart.svg";
import iconBell from "../../../assets/img-navbar/icon/icon_bell.svg";
import iconChat from "../../../assets/img-navbar/icon/chat_normal.svg";
import iconShopping from "../../../assets/img-navbar/icon/icon_shopping-active.svg";
import { useSelector } from "react-redux";
import { productsInCartSelector } from "../../../redux";
import ItemCart from "./ItemCart";
export const Option = () => {
  const productsInCart = useSelector(productsInCartSelector);
  return (
    <div className="options d-flex px-3">
        <div  className="header-right-dropdown-ctn option__shopping my-3 mx-2">
          <img src={iconShopping} alt="" />
        </div>
        <div  className="header-right-dropdown-ctn option__chat my-3 mx-2">
          <img src={iconChat} alt="" />
        </div>
        <div  className="header-right-dropdown-ctn option__bell my-3 mx-2">
          <img src={iconBell} alt="" />
        </div>
        <div  className="header-right-dropdown-ctn option__cart my-3 mx-2">
          <img src={iconCart} alt="" />
          <span className="quantity" >{productsInCart.length}</span>
          <div className="option__cart--customize" >
            <div className="option__cart__wrap"  >
              {productsInCart?productsInCart.map((item, index) =>{
                return (
                  <ItemCart 
                  key={index}
                  item={item}
                  />
                )
              })
              :
              <h2>Giỏ hàng trống</h2>}
            </div>
            <div className="option__cart__price--total" >
              <p>
                Tổng giá:<h4>24500000</h4>
              </p>
            </div>
            <div className="option__cart__checkout" >
              Xem giỏ hàng
            </div>
          </div>
        </div>
    </div>
  );
};
