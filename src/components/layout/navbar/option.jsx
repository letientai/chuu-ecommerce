import React from "react";
import iconCart from "../../../assets/img-navbar/icon/icon_cart.svg";
import iconBell from "../../../assets/img-navbar/icon/icon_bell.svg";
import iconChat from "../../../assets/img-navbar/icon/chat_normal.svg";
import iconShopping from "../../../assets/img-navbar/icon/icon_shopping-active.svg";
export const Option = () => {
  const option = [iconShopping, iconChat, iconBell, iconCart];
  return (
    <div className="options d-flex px-3">
      {option.map((item, index) => (
        <div className="header-right-dropdown-ctn my-3 mx-2">
          <img src={item} alt="" />
        </div>
      ))}
    </div>
  );
};
