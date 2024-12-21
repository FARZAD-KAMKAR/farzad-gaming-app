import React, { useEffect } from "react";
import { Topheader } from "../components/Topheader";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { Contactform } from "../components/Contactform";

export const ContactUs = () => {
  useEffect(() => {
    document.title = "GamerX - ContactUs";
    document
      .querySelector("meta[name=description]")
      .setAttribute("content", "Contact Us");
  }, []);
  return (
    <>
      <Topheader
        title="Contact Us"
        path={[
          { title: "Home", url: "/" },
          { title: "Contact Us", url: "" },
        ]}
      />
      <section>
        <div className="container">
          <h3 className="fs-1">Let's Get in Touch</h3>
          <div className="row">
            <div className="col-lg-4 bg-dark text-center text-lg-start py-3 mb-3">
              <span className="flex">
                <i className="fs-3 me-2">
                  <IoLocationOutline />
                </i>
                <h6 className="d-inline fs-5">
                Tehran, IRAN.
                </h6>
              </span>
            </div>
            <div className="col-lg-4 bg-dark text-center  py-3 mb-3">
              <a href="tel:+989391468042" className="text-light text-decoration-none ">
                <i className="fs-3 me-2 footer-hover-color">
                  <FiPhone />
                </i>
                <span className="footer-hover-color fs-5">+98 939 146 8042</span>
              </a>
            </div>
            <div className="col-lg-4 bg-dark text-center text-lg-end py-3 mb-3">
              <a href="mailto:kamkar.farzad92@gmail.com" className="flex text-light text-decoration-none">
                <i className="fs-3 me-2 footer-hover-color">
                  <CiMail />
                </i>
                <span className="footer-hover-color fs-5">
                  kamkar.farzad92@gmail.com
                </span>
              </a>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-xl-6 col-lg-8 col-md-10 offset-xl-3 offset-lg-2 offset-md-1">
              <h3 className="fs-1">Contact Form</h3>
              <Contactform/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
