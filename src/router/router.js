import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer } from "../components/layout/footer/footer";
import { Navbar } from "../components/layout/navbar/navbar";
import { Detail } from "../pages/detail/detail";
import { Home } from "../pages/home/home";

export const Routerr = () => {
  const [search, setSearch] = useState();
  const sentDataSearch = (data) => {
    setSearch(data);
  };
  return (
    <div>
      <Router>
        <Navbar sentDataSearch={sentDataSearch} />
        <Routes>
          <Route path="/" element={<Home search={search} />} />
          <Route path="/san-pham/:id" element={<Detail />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};
