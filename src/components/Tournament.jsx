import React from "react";
import aimlogo from "../assets/GamerX-Images/aim.png";
import tierlogo from "../assets/GamerX-Images/ti-1.png";
import dollarlogo from "../assets/GamerX-Images/dollar.png";

import "./Tournament.css";
import { IoIosArrowForward } from "react-icons/io";

export const Tournament = ({ id, pic, title, level, reward, location }) => {
  return (
    <div className="col-12 col-xl-6 my-2 py-5" id="tournament-card">
      <div className="row">
        <div className="col-2">
          <img src={pic} alt="" />
        </div>
        <div className="col-10 d-flex flex-column ps-3">
          <h4 className="fs-3">
            <a className="text-decoration-none text-light" href="">
              {title} - SPORT TOURNAMENT
            </a>
          </h4>
          <div className="d-flex pb-2">
            <div>
              <img src={tierlogo} alt="" />
              <span className="ms-2">{level}</span>
            </div>
            <div className="ms-5">
              <img src={dollarlogo} alt="" />
              <span className="ms-2">{reward}</span>
            </div>
            <div className="ms-5">
              <img src={aimlogo} alt="" />
              <span className="ms-2">{location}</span>
            </div>
          </div>
          <div className="">
            <a
              href=""
              className="btn bg-succes fw-bold fs-5 py-2 px-3 rounded-0 me-3 mb-1"
              id="banner-btn"
            >
              <span>Join Now</span>
              <i className="ms-2">
                <IoIosArrowForward />
              </i>
            </a>

            <a
              href=""
              className="btn bg-succes fw-bold fs-5 py-2 px-3 rounded-0 me-3"
              id="banner-btn3"
            >
              <span>Participate Now</span>
              <i className="ms-2">
                <IoIosArrowForward />
              </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
