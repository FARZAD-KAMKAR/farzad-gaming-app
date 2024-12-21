import React from "react";
import "./Banner.css";

import { IoIosArrowForward } from "react-icons/io";
import { IoBookOutline } from "react-icons/io5";

export const Banner = () => {
  return (
    <div className="navbar-banner vh-100 position-relative px-lg-5">
      <div
        className="position-absolute px-3 px-lg-5 text-light m-0 "
        id="nav-banner"
      >
        <div className="col-12 col-lg-6 p-4">
          <h4 id="banner-h4">Gaming Zone</h4>
          <h1 id="banner-h1">Game on - Thrilling Challenges</h1>
          <h6 className="my-3" id="banner-h6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias atque
            nulla pariatur adipisci nam nisi?
          </h6>

          <a
            href=""
            className="btn bg-succes fw-bold fs-5 py-2 px-3 rounded-0 me-3"
            id="banner-btn"
          >
            <span>Join Now</span>
            <i className="ms-2">
              <IoIosArrowForward />
            </i>
          </a>
          <a
            href=""
            className="btn btn-succes fw-bold fs-5 py-2 px-3 rounded-0"
            id="banner-btn2"
          >
            <span className="">Read More</span>
            <i className="ms-2">
              <IoBookOutline />
            </i>
          </a>
        </div>
      </div>
    </div>
  );
};
