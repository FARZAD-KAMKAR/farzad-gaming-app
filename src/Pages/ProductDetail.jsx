import React, { useEffect, useState } from "react";
import { Topheader } from "../components/Topheader";
import { NavLink, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import axios from "axios";

export const ProductDetail = () => {
  useEffect(() => {
    document.title = "GamerX - Cart";
    document
      .querySelector("meta[name=description]")
      .setAttribute("content", "Cart");
  }, []);

  const { productId } = useParams();

  const [ProductDetail, setProductDetail] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://668a40522c68eaf3211c4bf8.mockapi.io/api/v1/products/${productId}`
      )
      .then((res) => {
        setProductDetail(res.data);
      });
  }, []);

  return (
    <>
      <Topheader
        title="Product Detail"
        path={[
          { title: "Home", url: "/" },
          { title: "Product Detail", url: "" },
        ]}
      />
      <div className="container fs-1">
        <h2 className="fs-1">{ProductDetail.name}</h2>
        <div className="mt-5">
          <NavLink
            className="text-decoration-none fw-bold fs-5 py-2 px-3 me-3 border-0 mb-4"
            to={"/Shop"}
          >
            <i className="me-2 text-white fs-3">
              <IoIosArrowBack />
            </i>
            <span className="cart-green fs-5">Continue Shopping</span>
          </NavLink>
        </div>
      </div>
    </>
  );
};
