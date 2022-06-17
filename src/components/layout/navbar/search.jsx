import React, { useState } from "react";
import icsearch from "../../../assets/img-navbar/search.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {setCurrentPage } from "../../../redux";
export const Search = (prop) => {
  const [data, setData] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const setSearch = (e) => {
    setData(e.target.value);
  };
  const handleSearch = (e) => {
    if (e.key === "Enter" && data !== "") {
      navigate("/");
      // Mỗi lần nhấn tìm kiếm thì phải set cái trang lại đứng đầu trang
      setTimeout(() => {
        dispatch(setCurrentPage(1))
      }, [1200]);
      if (data) {
        prop.sentData(data);
      } else {
        prop.sentData("");
      }
    }
  };
  const handleSearch1 = () => {
    navigate("/");
    if (data) {
      prop.sentData(data);
    } else {
      prop.sentData("");
    }
  };
  return (
    <div className="j-header-search my-2 d-flex justify-content-between">
      <input
        type="text"
        placeholder="Tìm kiếm..."
        className="header-search-input j-header-search-input"
        value={data}
        onChange={(e) => setSearch(e)}
        onKeyDown={(e) => handleSearch(e)}
      />
      <div className="search-btn " onClick={handleSearch1}>
        <img src={icsearch} alt="" className="my-1" />
      </div>
    </div>
  );
};
