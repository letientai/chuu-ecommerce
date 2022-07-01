import React, { useState } from "react";
import Slider from "react-slick";
import { ProductIntroAdd } from "./productIntroAdd";
import { ProductIntroFreeshipping } from "./productIntroFreeshipping";
export const ProductIntro = ({ data }) => {
  const [optionSize, setOptionSize] = useState(0);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    autoplay: true,
  };
  const handleSize = (item) => {
    if (item === "S") {
      setOptionSize(1);
    } else if (item === "M") {
      setOptionSize(2);
    } else {
      setOptionSize(3);
    }
  };
  return (
    <div className="d-flex position-relative py-3">
      <div className="product-intro__galleryWrap col-xxl-5 col-6">
        <div className="product-image">
          <Slider {...settings}>
            {data?.assets?.map((item, index) => (
              <img key={index} src={item.url} alt="" />
            ))}
          </Slider>
        </div>
      </div>
      <div className="product-intro__info col-xxl-7 col-6">
        <div className="product-intro__info-sticky mx-5">
          <div className="product-intro__head">
            <h1 className="product-intro__head-name">{data.name}</h1>
            <div className="product-intro__head-sku-ctn">
              <div className="product-intro__head-sku">
                SKU: sw2203165595008040
              </div>
              <div className="product-intro__head-reviews">
                <span aria-label="Đánh giá trung bình 4.75 257 Nhận xét">
                  <div className="common-rate">
                    ❤️❤️❤️❤️❤️{" "}
                    <span style={{ color: "blue" }}>(257 nhận xét)</span>
                  </div>
                </span>
              </div>
            </div>
            <div className="product-intro__head-price py-3 d-flex">
              <span>{data.price}</span>
            </div>
          </div>
          <div className="product-intro__select-box">
            <div className="product-intro__size">
              <div className="product-intro__size-title">Kích thước</div>
              <div className="product-intro__size-choose d-flex my-2">
                <div
                  className={
                    optionSize === 1
                      ? "product-intro__size-check mx-2 px-4 py-2"
                      : "product-intro__size-radio mx-2 px-4 py-2"
                  }
                  onClick={(e) => handleSize("S")}
                >
                  S
                </div>
                <div
                  className={
                    optionSize === 2
                      ? "product-intro__size-check mx-2 px-4 py-2"
                      : "product-intro__size-radio mx-2 px-4 py-2"
                  }
                  onClick={(e) => handleSize("M")}
                >
                  M
                </div>
                <div
                  className={
                    optionSize === 3
                      ? "product-intro__size-check mx-2 px-4 py-2"
                      : "product-intro__size-radio mx-2 px-4 py-2"
                  }
                  onClick={(e) => handleSize("L")}
                >
                  L
                </div>
              </div>
              <div className="product-intro__size-tips">
                <span style={{ color: "rgb(153, 153, 153)" }}>
                  Giới hạn mua hàng: 2 qty
                </span>
              </div>
            </div>
          </div>
          <ProductIntroAdd data={data}/>
          <ProductIntroFreeshipping />
        </div>
      </div>
    </div>
  );
};
