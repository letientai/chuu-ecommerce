import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import datas from "../../assets/Data/data";
import Pagination from "./Pagination/Pagination";
import Product from "./Product";
const Products = ({ search }) => {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage, setCardPerPage] = useState(12);
  const [data, setData] = useState(datas);

  const indexLastPage = currentPage * cardPerPage;
  const indexFirstPage = indexLastPage - cardPerPage;
  const currentCardInPage = data.slice(indexFirstPage, indexLastPage);

  useEffect(() => {
    setData(
      datas.filter((item) =>
        item?.name?.toLocaleLowerCase()?.includes(search?.toLocaleLowerCase())
      )
    );
    setLoading(true);
    window.scrollTo(0, 200);
    setTimeout(() => {
      setLoading(false);
    }, [500]);
  }, [search]);

  useEffect(() => {
    setData(datas);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, [1200]);
  }, []);
  return (
    <div className="col-xxl-10 col-lg-9 col-md-9">
      {loading ? (
        <div className="row loading">
          <Spinner animation="border" variant="danger" />
        </div>
      ) : (
        <div className="row">
          {currentCardInPage.length !== 0 ? (
            currentCardInPage.map((data, item) => {
              return <Product key={data.id} data={data}></Product>;
            })
          ) : (
            <h3>Không tìm thấy sản phẩm</h3>
          )}
        </div>
      )}
      <div className="row">
        <Pagination
          cardPerPage={cardPerPage}
          totalProducts={data.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setLoading={setLoading}
        />
      </div>
    </div>
  );
};

export default Products;
