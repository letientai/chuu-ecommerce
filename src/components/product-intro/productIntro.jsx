import React from "react";

export const ProductIntro = () => {
  return (
    <div className="d-flex position-relative py-3">
      <div className="product-intro__galleryWrap col-5">
        <div className="product-image">
          <img
            src="https://img.ltwebstatic.com/images3_pi/2022/03/29/1648534447c44053a949f13cd3d7c47ca72bb71650_thumbnail_600x.webp"
            alt=""
          />
        </div>
      </div>
      <div className="product-intro__info col-7">
        <div className="product-intro__info-sticky mx-5">
          <div className="product-intro__head">
            <h1 className="product-intro__head-name">
              Honeyspot Áo khoác nữ Nút đôi Túi giả Kẻ sọc Thanh lịch
            </h1>
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
            <div className="product-intro__head-price"><span>378000₫</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};
