import React, { useEffect, useState } from "react";
import "./Shoppingcart.css";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";

export const Shoppingcart = () => {
  const [original, setOriginal] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get("https://668a40522c68eaf3211c4bf8.mockapi.io/api/v1/products")
      .then((res) => {
        const cart = JSON.parse(localStorage.getItem("cart"));
        const finalCart = cart.map((item) => ({
          ...res.data.filter((p) => p.id === item.id)[0],
          count: item.count,
        }));
        setCart(finalCart);

        setOriginal(res.data);
      });
  }, []);

  const DeleteItem = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    localStorage.setItem(
      "cart",
      JSON.stringify(cart.filter((item) => item.id !== id))
    );
    cart = JSON.parse(localStorage.getItem("cart"));
    const finalCart = cart.map((item) => ({
      ...original.filter((p) => p.id === item.id)[0],
      count: item.count,
    }));
    setCart(finalCart);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += item.count * item.price;
    });
    return totalPrice;
  };

  const updateQuantity = (id, value) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, count: Math.max(item.count + value, 0) }
          : item
      )
    );
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-xl-8 row me-2">
            <h1 className="col fs-1 my-4 cart-green">Shopping Cart</h1>
            <h1 className="col text-end fs-1 my-4 cart-green">
              Items : {cart.length}
            </h1>
            <hr />

            <table className="table table-dark">
              <thead>
                <tr>
                  <th className="ps-2 fs-5">Product Details</th>
                  <th className="ps-2 fs-5">Quantity</th>
                  <th className="ps-2 fs-5">Price</th>
                  <th className="ps-2 fs-5">SubTotal</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td className="py-3">
                      <div className="d-flex align-items-center justify-content-start">
                        <div className="me-1 col-4 position-relative">
                          <img className="img-fluid " src={item.url} alt="" />
                          <button
                            className="position-absolute start-0"
                            id="delete-product"
                            onClick={() => {
                              DeleteItem(item.id);
                            }}
                          >
                            <i className="fs-5">
                              <RxCross2 />
                            </i>
                          </button>
                        </div>
                        <div className="col-8">
                          <h6 className="fs-5 ms-3">{item.name}</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex pt-5 mt-2 align-items-center justify-content-start">
                        <div>
                          <input
                            className="bg-transparent text-light px-2"
                            type="button"
                            value="-"
                            onClick={() => updateQuantity(item.id, -1)}
                            disabled={item.count === 0}
                          />
                        </div>
                        <div>
                          <span className="mx-3 fs-5">{item.count}</span>
                        </div>
                        <div>
                          <input
                            className="bg-transparent text-light px-2"
                            type="button"
                            value="+"
                            onClick={() => updateQuantity(item.id, 1)}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="fs-5 ">
                      <div className="pt-5 mt-2">${item.price}.00</div>
                    </td>
                    <td className="fs-4">
                      <div className="pt-5 mt-1">
                        ${item.count * item.price}.00
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
          <div className="col-xl-4 px-5 px-xl-3 bg-gradient px-2 mt-xl-5">
            <div className="py-4 mb-2 mt-xl-4">
              <h3 className="mb-3 pb-4 p-0 m-0 fs-1 cart-green">
                Order Summary
              </h3>
              <hr />
            </div>
            <div className="row">
              <div className="col ">
                <h5 className="fs-3">Total</h5>
              </div>
              <div className="col text-end">
                <h5 className="fs-3">${calculateTotalPrice()}.00</h5>
              </div>
            </div>
            <div className="row my-3">
              <input
                type="text"
                placeholder="Enter Your Promo Code"
                className="col-10 text-light border-0 bg-light lh-lg bg-dark footer-email-button p-3"
              />
              <input
                type="submit"
                value="APPLY"
                className="col-2 p-0 border-0 bg-transparent text-light fs-5"
              ></input>
            </div>
            <div className="row">
              <div className="col ">
                <h5 className="fs-3">discount</h5>
              </div>
              <div className="col text-end">
                <h5 className="fs-3">$0.00</h5>
              </div>
            </div>
            <hr />
            <div className="row my-4">
              <div className="col fw-bold fs-2">TOTAL COST</div>
              <div className="col fs-2 fw-bold text-end cart-green">
                ${calculateTotalPrice()}.00
              </div>
            </div>
            <div className="row my-4">
              <a
                href=""
                className="btn btn-lg btn-succes fw-bold fs-5 py-2 px-3 rounded-0"
                id="checkout-btn"
              >
                <span>Check Out</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
