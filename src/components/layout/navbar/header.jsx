import React from "react";
import "../layout.scss";
import bkHeader from "../../../assets/img-navbar/header.gif";
export const Header1 = () => {
  return (
    <div
      className="config-top-banners"
      style={{ backgroundImage: `url(${bkHeader})` }}
    ></div>
  );
};

export const Header2 = () => {
  return (
    <div className="header-height j-header-height">
      <div className="header-nav j-header-fixer d-flex">
        <div className="col-5 header-left j-cm-header-left-outer d-flex">
          <div className="option my-3 mx-2">NỮ</div>
          <div className="option my-3 mx-2">PLUS SIZE</div>
          <div className="option my-3 mx-2">TRẺ EM</div>
          <div className="option my-3 mx-2">NAM</div>
          <div className="option my-3 mx-2">ĐỜI SỐNG</div>
        </div>
        <div className="col-2 she-text-center header-logo">
          <h1 className="iconfont-critical icon-sheinlogo my-2">SHEIN</h1>
        </div>
        <div className="col-5 header-right she-text-right">a</div>
      </div>
    </div>
  );
};
