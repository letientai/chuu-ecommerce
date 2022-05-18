import React from "react";
import "../layout.scss";
import bkHeader from "../../../assets/img-navbar/header.gif";
import { Option } from "./option";
import { Search } from "./search";
import { useNavigate } from "react-router-dom";
export const Header1 = () => {
  return (
    <div
      className="config-top-banners"
      style={{ backgroundImage: `url(${bkHeader})` }}
    ></div>
  );
};

export const Header2 = () => {
  const category = ["NỮ", "PLUS SIZE", "TRẺ EM", "NAM", "ĐỜI SỐNG"];
  const navigate = useNavigate();

  const moveToHome = () => {
    navigate("/");
  };
  return (
    <div className="header-height j-header-height">
      <div className="header-nav j-header-fixer row justify-content-between">
        <div className="col-5 header-left j-cm-header-left-outer d-flex px-3">
          {category.map((item, index) => (
            <div key={index} className="option my-3 mx-2">
              {item}
            </div>
          ))}
        </div>
        <div className="col-2 she-text-center header-logo " onClick={moveToHome}>
          <h1 className="iconfont-critical icon-sheinlogo my-2">SHEIN</h1>
        </div>
        <div className="col-5 header-right she-text-right">
          <Option />
        </div>
      </div>
    </div>
  );
};

export const Header3 = () => {
  const category = [
    "HÀNG MỚI",
    "XU HƯỚNG",
    "SALE",
    "TRANG PHỤC",
    "ĐẦM",
    "ĐỒ LÓT & ĐỒ MẶC NHÀ",
    "ĐỒ ĐI BIỂN",
    "GIÀY DÉP & PHỤ KIỆN",
  ];
  return (
    <div className="c-nav2 row d-flex">
      <div className="header-v2__two col-9 d-flex">
        {category.map((item, index) => (
          <div key={index} className="mx-3 py-3 header-v2__nav2-item">
            <span>{item}</span>
          </div>
        ))}
      </div>
      <div className="header-search col-3">
        <Search />
      </div>
    </div>
  );
};
