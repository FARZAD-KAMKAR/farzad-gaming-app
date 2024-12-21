import React from "react";
import "./Innerbanner.css";
import { IoBookOutline } from "react-icons/io5";
import innerbannerlogo from "../assets/GamerX-Images/tl-2.png";
import innerbannerp1 from "../assets/GamerX-Images/streamer-12.png";
import innerbannerp2 from "../assets/GamerX-Images/streamer-2.png";

export const Innerbanner = () => {
  return (
    <section className="container-fluid" id="inner-banner">
      <div className="row mt-4">
        <div className="col-md-3 col-lg-4 d-flex justify-content-center">
          <img className="img-fluid" src={innerbannerp1} alt="" />
        </div>
        <div
          className="col-md-6 flex-column col-lg-4 d-flex text-center pt-5 z-3"
          id="inner-banner-bg"
        >
          <div className="my-5">
            <img
              className="img-fluid"
              id="inner-banner-logo"
              src={innerbannerlogo}
              alt=""
            />
          </div>
          <h2 className="fs-1 text-wrap">
            Who Will <span id="inner-banner-span">Be the Best?</span>
          </h2>
          <p className="opacity-75 mb-5 px-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aut
            repellat, harum ea nobis officiis laudantium.
          </p>
          <div className="mb-5">
            <a
              href=""
              className="btn btn-succes fw-bold fs-5 py-2 px-3 rounded-0"
              id="banner-btn"
            >
              <span className="">Read More</span>
              <i className="ms-2">
                <IoBookOutline />
              </i>
            </a>
          </div>
        </div>
        <div className="col-md-3 col-lg-4 d-flex justify-content-center">
          <img className="img-fluid" src={innerbannerp2} alt="" />
        </div>
      </div>
    </section>
  );
};
