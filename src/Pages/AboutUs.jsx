import React, { useEffect } from "react";
import { Topheader } from "../components/Topheader";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoBookOutline } from "react-icons/io5";
import aboutbannerpic from "../assets/GamerX-Images/about.png";


export const AboutUs = () => {
  useEffect(() => {
    document.title = "GamerX - AboutUs";
    document
      .querySelector("meta[name=description]")
      .setAttribute("content", "About Us");
  }, []);
  return (
    <>
      <Topheader
        title="About Us"
        path={[
          { title: "Home", url: "/" },
          { title: "About Us", url: "" },
        ]}
      />
      <section className="container-fluid my-5">
        <div className="row row-cols-1 row-cols-lg-3 px-3 px-lg-5 align-items-center ">
          <div className="col ">
            <h4 className="mb-4">Immerse Yourself in the Gaming Experience</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
              ad voluptates blanditiis nihil saepe nesciunt doloribus omnis
              accusamus assumenda eligendi.
            </p>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              ipsum cumque iusto ab laborum quis illo hic eligendi vero culpa?
            </p>
            <NavLink
              className="btn btn-succes fw-bold fs-5 py-2 px-3 rounded-0"
              id="about-banner-btn1"
              to={"aboutus"}
            >
              <span className="">Read More</span>
              <i className="ms-2">
                <IoBookOutline />
              </i>
            </NavLink>
          </div>
          <div className="col ms-5 ps-5 ms-lg-0 ps-lg-0">
            <img className="img-fluid" src={aboutbannerpic} alt="" />
          </div>
          <div className="col ">
            <h4 className="mb-4">
              Beyond Boundaries: Where Gaming Dreams Come True
            </h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
              ad voluptates blanditiis nihil saepe nesciunt doloribus omnis
              accusamus assumenda eligendi.
            </p>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              ipsum cumque iusto ab laborum quis illo hic eligendi vero culpa?
            </p>
            <NavLink
              className="btn btn-succes fw-bold fs-5 py-2 px-3 rounded-0"
              id="about-banner-btn2"
              to={"/Shop"}
            >
              <span className="">Shop Now</span>
              <i className="ms-2">
                <AiOutlineShoppingCart />
              </i>
            </NavLink>
          </div>
        </div>
      </section>
     
      
    </>
  );
};
