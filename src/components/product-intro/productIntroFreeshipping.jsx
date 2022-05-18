import React from "react";
import download from "../../assets/icon/download.svg";

export const ProductIntroFreeshipping = () => {
  const data = [
    {
      image: download,
      title: "Miễn phí vận chuyển",
      desc: "Giao hàng miễn phí với mức giá cố định cho các đơn hàng trên 499.000₫",
      p: "Giao hàng dự kiến vào ngày 27/05/2022 - 29/05/2022.",
    },
    {
      image: download,
      title: "Quy tắc COD",
      desc: "Dịch vụ thanh toán khi nhận hàng chỉ khả dụng khi tổng số tiền từ 0đ đến 4.618.000đ sau khi giảm giá(US$200 )",
      p: "Không cần chịu phí COD.",
    },
    {
      image: download,
      title: "Chính sách hoàn trả",
      desc: "Giao hàng miễn phí với mức giá cố định cho các đơn hàng trên 499.000₫",
      p: "Các mặt hàng nhận được trong vòng 15 ngày kể từ ngày giao hàng.",
    },
  ];
  return (
    <div className="product-intro__freeshipping">
      {data.map((item, index) => (
        <div key={index} className="product-intro__freeshipping-item d-flex">
          <div className="shipping">
            <img src={item.image} alt="" />
          </div>
          <div>
            <div className="freeshipping-title">{item.title}</div>
            <div className="freeshipping-desc">
            {item.desc}
              <p>{item.p}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
