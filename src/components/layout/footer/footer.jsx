import React from "react";
import "../layout.scss";
import fb from "../../../assets/img-footer/fb.png";
import ig from "../../../assets/img-footer/ig.png";
import bell from "../../../assets/img-footer/bell.png";
import p from "../../../assets/img-footer/p.png";
import tiktok from "../../../assets/img-footer/tiktok.png";
import tw from "../../../assets/img-footer/tw.png";
import youtube from "../../../assets/img-footer/youtube.png";
import apple from "../../../assets/img-footer/apple.png";
import android from "../../../assets/img-footer/android.png";

import payment1 from "../../../assets/img-footer/paynent/1.png";
import payment2 from "../../../assets/img-footer/paynent/2.png";
import payment3 from "../../../assets/img-footer/paynent/3.png";
import payment4 from "../../../assets/img-footer/paynent/4.png";
import payment5 from "../../../assets/img-footer/paynent/5.png";
import payment6 from "../../../assets/img-footer/paynent/6.png";
import payment7 from "../../../assets/img-footer/paynent/7.png";

export const Footer = () => {
  const listInfo = [
    {
      title: "THÔNG TIN CÔNG TY",
      content: [
        "Giới Thiệu Shein",
        "Chương Trình Affiliate",
        "Blogger Thời Trang",
      ],
    },
    {
      title: "HỖ TRỢ KHÁCH HÀNG",
      content: [
        "Phí Vận Chuyển",
        "Trả Lại",
        "Hướng Dẫn Đặt Hàng",
        "Hướng Dẫn Kích Thước",
        "Trách Nhiệm Xã Hội",
        "SHEIN VIP",
      ],
    },
    {
      title: "DỊCH VỤ KHÁCH HÀNG",
      content: ["Liên Hệ Chúng Tôi", "Phương Thức Thanh Toán", "Điểm Thưởng"],
    },
  ];

  const iconContact = [fb, ig, bell, p, tiktok, tw, youtube];
  const payment = [
    payment1,
    payment2,
    payment3,
    payment4,
    payment5,
    payment6,
    payment7,
  ];
  return (
    <div className="c-footer container-fluid-1200 ">
      <div className="container-fluid-1200 j-footer ">
        <div className="row">
          <div className="col-6 ft-left">
            <div className="row">
              {listInfo.map((item, index) => (
                <div key={index} className="col-3 ft-left-list">
                  <h6>{item.title}</h6>
                  <ul className="my-2">
                    {item.content.map((item, index) => (
                      <li key={index}>
                        <a href="#">{item}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="col-6 ft-right">
            <div className="row">
              <div className="col-8">
                <h6>KẾT NỐI VỚI CHÚNG TÔI</h6>
                <ul className="ft-right-et j-app-icon ">
                  {iconContact.map((item, index) => (
                    <li key={index}>
                      <img src={item} alt="" />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-4">
                <h6>APP</h6>
                <ul className="ft-right-et j-app-icon">
                  <li>
                    <img src={apple} alt="" />
                  </li>
                  <li>
                    <img src={android} alt="" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="ft-right-email">
              <h6>ĐĂNG KÝ NHẬN TIN TỪ SHEIN</h6>
              <div className="ft-right-input d-flex">
                <div className="c-input">
                  <input
                    type="email"
                    className="j-footer-subscribe"
                    placeholder="Địa chỉ email của bạn"
                  />
                </div>
                <div className="ft-right-btn">
                  <button className="she-btn-black j-subscribe-submit">
                    <div className="j-footer-submit">ĐĂNG KÝ</div>
                  </button>
                </div>
              </div>
            </div>
            <div className="ft-right-payment">
              <h6>chúng tôi chấp nhận</h6>
              <div>
                {payment.map((item, index) => (
                  <img key={index} src={item} alt="" />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="row"></div>
      </div>
    </div>
  );
};
