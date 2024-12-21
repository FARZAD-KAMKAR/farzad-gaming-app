import React from "react";
import "./Ourshop.css";
import { NavLink } from "react-router-dom";
import { IoMdHeartEmpty } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ourshopmainpic1 from "../assets/GamerX-Images/p-2.png";

export const Ourshop = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const shopData = [
    {
      id: "1",
      title: "Gamepad Game Controller",
      url: "/GamerX-Images/p-1.png",
      price: "$20.00",
      stat: "SALE",
    },
    {
      id: "2",
      title: "Keyboard With RGB Light",
      url: "/GamerX-Images/p-2.png",
      price: "$40.00",
      stat: "NEW",
    },
    {
      id: "3",
      title: "Fusion Gaming Headphone",
      url: "/GamerX-Images/p-3.png",
      price: "$60.00",
      stat: "NEW",
    },
    {
      id: "4",
      title: "Keyboard With RGB Light",
      url: "/GamerX-Images/p-2.png",
      price: "$20.00",
      stat: "SALE",
    },
  ];

  return (
    <>
      <div className="mt-5 row flex-nowrap overflow-hidden d-md-none">
        <div className="p-0" id="ourshop-card-bg">
          <div className="d-flex justify-content-between align-items-center">
            <h6 className=" fs-4 p-3">Sale</h6>
            <i
              className=" btn bg-transparent text-light fs-2"
              id="ourshop-heart"
            >
              <IoMdHeartEmpty />
            </i>
          </div>
          <div>
            <h5 className="ms-3" id="shop-item-title">
              <NavLink
                className="text-decoration-none  fs-2 "
                id="shop-item-title"
                to={"Shop"}
              >
                Gamepad Controller
              </NavLink>
            </h5>
          </div>
          <div className="text-center">
            <NavLink to={"Shop"}>
              <img className="img-fluid " src={ourshopmainpic1} alt="" />
            </NavLink>
          </div>
          <div className="d-flex mx-3  justify-content-between align-items-center">
            <h4 className="fs-1 ">$20.00</h4>
            <a
              className="p-3 mb-3 text-decoration-none d-flex align-items-center"
              href=""
              id="ourshop-btn"
            >
              <span className="fs-4 ">Add to Cart</span>
              <i className="fs-3 ms-2 ">
                <AiOutlineShoppingCart />
              </i>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-5 row  d-none d-md-flex">
        <Slider {...settings}>
          {shopData.map((item, i) => (
            <div className="p-3 " id="ourshop-card-bg" key={item.id}>
              <div className="d-flex justify-content-between align-items-center">
                <h6 className=" ">{item.stat}</h6>
                <i className=" btn bg-transparent text-light fs-4">
                  <IoMdHeartEmpty />
                </i>
              </div>
              <div>
                <h5 id="shop-item-title">
                  <NavLink
                    className="text-decoration-none  "
                    id="shop-item-title"
                    to={"Shop"}
                  >
                    {item.title}
                  </NavLink>
                </h5>
              </div>
              <div className="  p-0 m-0">
                <NavLink to={"Shop"}>
                  <img className="img-fluid " src={item.url} alt="" />
                </NavLink>
              </div>
              <div className="d-flex   justify-content-between align-items-center">
                <h4 className="">{item.price}</h4>
                <a
                  className="  text-decoration-none d-flex align-items-center"
                  href=""
                  id="ourshop-btn"
                >
                  <span className="p-1">Add to Cart</span>
                  <i className=" p-2 fs-5">
                    <AiOutlineShoppingCart />
                  </i>
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
