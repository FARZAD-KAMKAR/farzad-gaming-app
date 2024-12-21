import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import navbarlogo from "../assets/GamerX-Images/logo.png";

export const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav-stick" id="nav-container">
        <nav className="navbar navbar-expand-lg navbar-dark ps-2 py-3 ms-5">
          <NavLink className="navbar-brand" to={"/"}>
            <img src={navbarlogo} alt="GamerX. LOGO" />
          </NavLink>
          <button
            className="navbar-toggler border-0 d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-around"
            id="collapsibleNavId"
          >
            <ul className="navbar-nav mt-2 mt-lg-0 ms-5">
              <li className="nav-item d-none d-lg-inline">
                <NavLink
                  className="nav-link active fs-5 px-4"
                  id="nav-home"
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item dropdown" id="nav-items">
                <NavLink
                  className="nav-link dropdown-toggle active fs-5 px-4"
                  id="dropdownId"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  to={""}
                >
                  Games
                </NavLink>

                <div
                  className="dropdown-menu"
                  id="nav-drop-menu"
                  aria-labelledby="dropdownId"
                >
                  <NavLink
                    className="dropdown-item py-2 py-2"
                    id="nav-drop-item"
                    to={"Blogs"}
                  >
                    BLOGS
                  </NavLink>
                </div>
              </li>
              <li className="nav-item dropdown" id="nav-items">
                <a
                  className="nav-link dropdown-toggle active  fs-5 px-4"
                  href="#"
                  id="dropdownId"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <div
                  className="dropdown-menu"
                  id="nav-drop-menu"
                  aria-labelledby="dropdownId"
                >
                  <NavLink
                    className="dropdown-item py-2"
                    id="nav-drop-item"
                    to={"Shop"}
                  >
                    SHOP
                  </NavLink>
                  <NavLink
                    className="dropdown-item py-2"
                    id="nav-drop-item"
                    to={"CART"}
                  >
                    CART
                  </NavLink>
                </div>
              </li>
              <li className="nav-item dropdown" id="nav-items">
                <a
                  className="nav-link dropdown-toggle active  fs-5 px-4"
                  href="#"
                  id="dropdownId"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <div
                  className="dropdown-menu"
                  id="nav-drop-menu"
                  aria-labelledby="dropdownId"
                >
                  <NavLink
                    className="dropdown-item py-2"
                    id="nav-drop-item"
                    to={"aboutus"}
                  >
                    ABOUT US
                  </NavLink>
                  <NavLink
                    className="dropdown-item py-2"
                    id="nav-drop-item"
                    to={"contactus"}
                  >
                    CONTACT US
                  </NavLink>
                </div>
              </li>
            </ul>

            <ul className="navbar-nav  mt-2 mt-lg-0">
              <li className="nav-item d-none d-lg-inline">
                <a
                  className="nav-link active "
                  href="#"
                  aria-current="page"
                  id="nav-icon"
                >
                  <i className="d-flex justify-content-center align-items-center">
                    <IoIosSearch size={20} />
                  </i>
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item ms-2 d-none d-lg-inline">
                <NavLink
                  className="nav-link active position-relative"
                  aria-current="page"
                  id="nav-icon"
                  to={"Cart"}
                >
                  <i className="d-flex justify-content-center align-items-center">
                    <AiOutlineShoppingCart size={20} />
                  </i>
                  <span className="visually-hidden">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item ms-2 d-none d-lg-inline">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  id="nav-icon"
                  to={"Login"}
                >
                  <i className="d-flex justify-content-center align-items-center">
                    <FaRegUser size={20} />
                  </i>
                  <span className="visually-hidden">(current)</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};
