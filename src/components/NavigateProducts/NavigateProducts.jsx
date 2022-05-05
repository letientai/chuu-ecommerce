import React from 'react'
import './NavigateProducts.scss';
const NavigateProducts = () => {
    const category = ['mới', 'Đánh giá cao nhất', 'Đầm','Áo sơ mi','Áo thun','Quần','Váy']
  return (
    <div className="container" >
        <div className="bread-crumb" >
            <span>Trang chủ</span>/
            <span>Quần áo nữ</span>
        </div>
        <div className="top-info" >
            <div className="top-info__wrapper">
                <div className="top-info__main" >
                    <h2>Quần áo nữ </h2>
                    <p>351526 sản phẩm</p>
                </div>
                <div className="cloud-tags" >
                    <ul>
                        {category.map((item, i) =>{
                            return (
                                <li key={i} >{item}</li>
                            )}
                        )}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavigateProducts
