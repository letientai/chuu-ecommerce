import React from "react";
import { ProductIntro } from "../../components/product-intro/productIntro";
import "./detail.scss";
export const Detail = () => {
  return (
    <div className="j-goods-detail-v2">
      <div className="goods-detailv2">
        <div className="goods-detailv2__media">
          <div className="goods-detailv2__media-inner">
            <div className="bread-crumb j-bread-crumb d-flex">
              <div className="bread-crumb__item mx-1">Trang chủ / </div>
              <div className="bread-crumb__item mx-1">Thể loại / </div>
              <div className="bread-crumb__item mx-1">Tên</div>
            </div>
            <div className="product-intro">
              <ProductIntro />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
