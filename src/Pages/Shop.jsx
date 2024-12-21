import React, { useEffect, useState } from "react";
import { Topheader } from "../components/Topheader";
import { Product } from "../components/Product";
import axios from "axios";
import "../components/Product.css";

export const Shop = () => {
  useEffect(() => {
    document.title = "GamerX - Shop";
    document
      .querySelector("meta[name=description]")
      .setAttribute("content", "Shop");
  }, []);

  const [prod, setProd] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [prodPerPage, setProdPerPage] = useState(6);

  useEffect(() => {
    axios
      .get("https://668a40522c68eaf3211c4bf8.mockapi.io/api/v1/products")
      .then((res) => {
        setProd(res.data);
      });
  }, []);

  const indexOfLastProd = currentPage * prodPerPage;
  const indexOfFirstProd = indexOfLastProd - prodPerPage;
  const currentProd = prod.slice(indexOfFirstProd, indexOfLastProd);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(prod.length / prodPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumbers) => setCurrentPage(pageNumbers);

  return (
    <>
      <Topheader
        title="Shop"
        path={[
          { title: "Home", url: "/" },
          { title: "Shop", url: "" },
        ]}
      />

      <section>
        <div className="container">
          <div className="row row-cols-md-2 row-cols-lg-3 g-4">
            <Product prod={currentProd} />
          </div>

          <nav aria-label="Page navigation example">
            <ul className="pagination mt-5 d-flex justify-content-center">
              {pageNumbers.map((number) => (
                <li
                  key={number}
                  className={`page-item me-2 rounded-0 ${
                    currentPage === number ? "active2" : ""
                  }`}
                >
                  <button
                    href="!#"
                    aria-current={currentPage === number ? "page" : undefined}
                    onClick={() => paginate(number)}
                    className="fs-3 px-3"
                    id="pagination"
                  >
                    {number}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
};
