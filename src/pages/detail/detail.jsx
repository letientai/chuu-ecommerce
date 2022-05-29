import React, { useEffect } from "react";
import { ProductIntro } from "../../components/product-intro/productIntro";
import "./detail.scss";
import { useLocation } from "react-router-dom";
import datas from "../../assets/Data/datas";
export const Detail = () => {
  const location = useLocation();
  const Id = location.pathname.split("san-pham/")[1];
  const data = datas.filter((x) => x.id.toString() === Id);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  });
  
  return (
    <div className="j-goods-detail-v2">
      <div className="goods-detailv2">
        <div className="goods-detailv2__media">
          <div className="goods-detailv2__media-inner">
            <div className="bread-crumb j-bread-crumb d-flex">
              <div className="bread-crumb__item mx-1">Trang chủ / </div>
              <div className="bread-crumb__item mx-1">{data[0].type} / </div>
              <div className="bread-crumb__item mx-1">{data[0].name}</div>
            </div>
            <div className="product-intro">
              <ProductIntro data={data[0]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
