import React from "react";
import "./Pagefooter.css";
import { NavLink } from "react-router-dom";
import { FaRegPaperPlane } from "react-icons/fa";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { SlSocialInstagram } from "react-icons/sl";
import { BsSnapchat } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { SocialMediaLinks } from "./SocialMediaLinks";
import { Footerslider } from "./Footerslider";
import footerlogo from "../assets/GamerX-Images/logo.png";

export const Pagefooter = () => {
  return (
    <section className="container-fluid page-footer mt-5">
      <Footerslider />
      <div className="row row-cols-1 row-cols-lg-4 py-4 px-3 px-lg-5">
        <div className="col-8 col-lg-3">
          <a href="">
            <img src={footerlogo} alt="GamerX. LOGO" />
          </a>
          <p className="my-4 footer-text-color footer-text-color-grey">
            Everyone enjoys the sweet taste of victory and the feeling of
            accomplishing a goal, especially in a video game. Enhance your
            gaming experience with us.
          </p>
          <h4 className="fs-3 footer-text-color mb-4">
            Subscribe Our Newsletter
          </h4>
          <div className="col-6 ms-1 input-group row justify-content-between align-items-center align-content-center bg-dark">
            <input
              type="email"
              placeholder="Your Email"
              className="col-8 text-light border-0 lh-lg bg-dark footer-email-button p-3"
            />
            <button type="submit" className="col-4 border-0 bg-dark text-light">
              <i className="fs-4 d-flex justify-content-center align-items-center">
                <FaRegPaperPlane />
              </i>
            </button>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-2 flex-column offset-lg-1 mt-5 mt-lg-2">
          <div className="text-nowrap">
            <h4 className="fs-3 footer-text-color">Quick Links</h4>
          </div>
          <div>
            <ul className="list-group ">
              <li className="list-group-item bg-transparent border-0 p-0 mt-3 ">
                <h6>
                  <NavLink
                    className="footer-text-color-grey text-decoration-none footer-hover-color"
                    to={"/"}
                  >
                    Home
                  </NavLink>
                </h6>
              </li>
              <li className="list-group-item bg-transparent border-0 p-0 mt-1">
                <h6>
                  <NavLink
                    className="footer-text-color-grey text-decoration-none footer-hover-color"
                    to={"aboutus"}
                  >
                    About Us
                  </NavLink>
                </h6>
              </li>
              <li className="list-group-item bg-transparent border-0 p-0 mt-1">
                <h6>
                  <NavLink
                    className="footer-text-color-grey text-decoration-none footer-hover-color"
                    to={"Shop"}
                  >
                    Products
                  </NavLink>
                </h6>
              </li>
              <li className="list-group-item bg-transparent border-0 p-0 mt-1">
                <h6>
                  <NavLink
                    className="footer-text-color-grey text-decoration-none footer-hover-color"
                    to={"contactus"}
                  >
                    Contact Us
                  </NavLink>
                </h6>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-2 offset-lg-1 mt-5 mt-lg-2">
          <div>
            <h4 className="fs-3 footer-text-color">GENRES</h4>
          </div>
          <div>
            <ul className="list-group">
              <li className="list-group-item bg-transparent border-0 p-0 mt-3">
                <h6>
                  <a
                    href=""
                    className="footer-text-color-grey text-decoration-none footer-hover-color mt-1"
                  >
                    PUBG MOBILE
                  </a>
                </h6>
              </li>
              <li className="list-group-item bg-transparent border-0 p-0">
                <h6>
                  <a
                    href=""
                    className="footer-text-color-grey text-decoration-none footer-hover-color mt-1"
                  >
                    CS GO
                  </a>
                </h6>
              </li>
              <li className="list-group-item bg-transparent border-0 p-0 mt-1">
                <h6>
                  <a
                    href=""
                    className="footer-text-color-grey text-decoration-none footer-hover-color"
                  >
                    CODE 2
                  </a>
                </h6>
              </li>
              <li className="list-group-item bg-transparent border-0 p-0 mt-1">
                <h6>
                  <a
                    href=""
                    className="footer-text-color-grey text-decoration-none footer-hover-color"
                  >
                    FORTNITE
                  </a>
                </h6>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-lg-3 mt-5 mt-lg-2">
          <div>
            <h4 className="fs-3 mb-3 footer-text-color">GENRES</h4>
            <ul className="list-group">
              <li className="flex list-group-item bg-transparent border-0 p-0 text-light">
                <span className="flex">
                  <i className="fs-5 me-2 footer-text-color-grey">
                    <IoLocationOutline />
                  </i>
                  <h6 className="d-inline footer-text-color-grey">
                    Tehran, IRAN.
                  </h6>
                </span>
              </li>
              <li className="flex list-group-item bg-transparent border-0 p-0 text-light ">
                <a
                  href="tel:+989391468042"
                  className="text-light text-decoration-none "
                >
                  <i className="fs-5 me-2 footer-text-color-grey footer-hover-color">
                    <FiPhone />
                  </i>
                  <span className="footer-text-color-grey footer-hover-color">
                    +98 939 146 8042
                  </span>
                </a>
              </li>
              <li className="flex list-group-item bg-transparent border-0 p-0 text-light">
                <a href="mailto:kamkar.farzad92@gmail.com" className="flex text-light text-decoration-none">
                  <i className="fs-5 me-2 footer-text-color-grey footer-hover-color">
                    <CiMail />
                  </i>
                  <span className="footer-text-color-grey footer-hover-color">
                    kamkar.farzad92@gmail.com
                  </span>
                </a>
              </li>
            </ul>
            <div className="hstack mt-2">
              <SocialMediaLinks url={"https://www.facebook.com"}>
                <FiFacebook />
              </SocialMediaLinks>
              <SocialMediaLinks url={"https://www.twitter.com"}>
                <FiTwitter />
              </SocialMediaLinks>
              <SocialMediaLinks url={"https://www.instagram.com"}>
                <SlSocialInstagram />
              </SocialMediaLinks>
              <SocialMediaLinks url={"https://www.snapchat.com"}>
                <BsSnapchat />
              </SocialMediaLinks>
            </div>
            <div className="mt-4">
              <p className="footer-text-color-grey">
                ©2024 GamerX. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
