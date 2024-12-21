import React from "react";
import "./Topheader.css";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export const Topheader = ({ title, path }) => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row vh-70 align-items-end pb-5">
            <div className="col-12 col-lg-6 pb-5">
              <NavLink
                className="btn bg-succes fw-bold fs-5 py-2 px-3 rounded-0 me-3 border-0 mb-4"
                id="topheader-btn"
                to={"/"}
              >
                <i className="me-2">
                  <IoIosArrowBack />
                </i>
                <span>Back to Home</span>
              </NavLink>

              <h1 className="pb-3">{title}</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                quia? Incidunt magnam perferendis asperiores adipisci dolores
                natus.
              </p>
            </div>
            <div className="col-12 col-lg-6 pb-5">
              <nav aria-label="breadcrumb ">
                <ol className="breadcrumb justify-content-lg-end justify-content-start">
                  <li className="me-3">
                    <FaHome />
                  </li>
                  {path.map((item, i) => (
                    <li className="breadcrumb-item" key={i}>
                      <NavLink
                        className="text-decoration-none link-light"
                        to={item.url}
                      >
                        {item.title} .
                      </NavLink>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
