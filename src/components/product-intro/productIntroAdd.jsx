import React from "react";
import { useDispatch } from "react-redux";
import { setAddCart } from "../../redux";
export const ProductIntroAdd = ({ data }) => {
  const dispatch = useDispatch();
  const handeAddCart = (id) => {
    dispatch(setAddCart(data));
  };
  return (
    <div className="product-intro__add">
      <div className="she-clearfix d-flex">
        <div className="product-intro__add-btn">
          <button
            className="she-btn-black she-btn-xl"
            onClick={() => {
              handeAddCart(data.id);
            }}
          >
            Thêm Vào Giỏ Hàng
          </button>
        </div>
      </div>
      <div className="product-intro__add-tips">
        Kiếm <span>7</span> điểm SHEIN
      </div>
    </div>
  );
};
