import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";

export const Error = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className="mt-5 pt-5">
          <p className="my-5 py-5 ms-5 text-danger opacity-75 fs-5">
            The requested page not found
          </p>
          <NavLink
            className="btn bg-succes fw-bold fs-5 py-2 px-3 rounded-0 ms-5 border-0 "
            id="topheader-btn"
            to={"/"}
          >
            <i className="me-2">
              <IoIosArrowBack />
            </i>
            <span>Back to Home</span>
          </NavLink>
        </div>
      </div>
    </section>
  );
};
