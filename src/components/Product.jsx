import React from "react";
import "./Product.css";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Product = ({ prod }) => {
  const addToCart = (id) => {
    if (!localStorage.getItem("cart")) {
      localStorage.setItem("cart", JSON.stringify([]));
    }
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart.filter((item) => item.id === id).length > 0) {
      const newCart = cart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      );
      localStorage.setItem("cart", JSON.stringify(newCart));
    } else {
      localStorage.setItem(
        "cart",
        JSON.stringify([...cart, { id: id, count: 1 }])
      );
    }
  };
  return (
    <>
      {prod.map((item) => (
        <div className="col" key={item.id}>
          <div className="p-0" id="product-card-bg">
            <div className="d-flex justify-content-between align-items-center">
              <h6 className=" fs-4 p-3">Sale</h6>
              <i className=" btn bg-transparent text-light fs-2 border-0">
                <IoMdHeartEmpty />
              </i>
            </div>
            <Link
              to={`/ProductDetail/${item.name}`}
              className="text-decoration-none"
            >
              <div>
                <h5 className="ms-3 fs-3" id="product-item-title">
                  {item.name}
                </h5>
              </div>
              <div className="text-center">
                <img className="img-fluid " src={item.url} alt="" />
              </div>
            </Link>

            <div className="d-flex mx-3  justify-content-between align-items-center">
              <h4 className="fs-1 me-2">${item.price}</h4>
              <button
                className="p-1 px-2 my-2 text-decoration-none d-flex align-items-center"
                id="product-btn"
                onClick={() => {
                  addToCart(item.id, item.price, item.name);
                }}
              >
                <span className="fs-5 ">Add to Cart</span>
                <i className="fs-3 ms-2 ">
                  <AiOutlineShoppingCart />
                </i>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
