import React from 'react'
import './Category.scss';
const Category = () => {
  return (
    <div className='col-xxl-2 col-lg-3 col-md-3'>
        <div className='category' >
            <ul className='category__list'>
              <li className='category__list--item' >
                <span>Danh mục</span>
                <span>+</span>
              </li>
              <li className='category__list--item' >
                <span>Kích thước</span>
                <span>+</span>
              </li>
              <li className='category__list--item' >
                <span>Màu sắc</span>
                <span>+</span>
              </li>
              <li className='category__list--item' >
                <span>Vật liệu</span>
                <span>+</span>
              </li>
              <li className='category__list--item' >
                <span>Kiểu mẫu</span>
                <span>+</span>
              </li>
              <li className='category__list--item' >
                <span>Phong cách</span>
                <span>+</span>
              </li>
              <li className='category__list--item' >
                <span>Chi tiết</span>
                <span>+</span>
              </li>
              <li className='category__list--item' >
                <span>Sắp xếp giá cả</span>
                <span>+</span>
              </li>
            </ul>
        </div>
    </div>
  )
}

export default Category
