import React from "react";
import search from "../../../assets/img-navbar/search.png"
export const Search = () => {
  return (
    <form className="j-header-search my-2 d-flex justify-content-between">
      <input
        type="text"
        placeholder="Tìm kiếm..."
        className="header-search-input j-header-search-input"
      />
      <div className="search-btn ">
          <img src={search} alt="" className="my-1"/>
      </div>
    </form>
  );
};
