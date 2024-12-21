import React, { useEffect } from "react";
import { Topheader } from "../components/Topheader";
import loginpic from "../assets/GamerX-Images/login.png";
import googlepic from "../assets/GamerX-Images/Google.png";
import facebookpic from "../assets/GamerX-Images/facebook-icon.png";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

export const Login = () => {
  useEffect(() => {
    document.title = "GamerX - Login";
    document
      .querySelector("meta[name=description]")
      .setAttribute("content", "Login");
  }, []);

  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  return (
    <>
      <Topheader
        title="Login"
        path={[
          { title: "Home", url: "/" },
          { title: "Login", url: "" },
        ]}
      />
      <section className="container-fluid">
        <div className="row">
          <div className="col-xl-6">
            <div className="row">
              <div className="col-xxl-8 offset-xxl-2 col-xl-10 offset-xl-1 col-md-8 offset-md-2">
                <div>
                  <h5 className="text-center fs-1">Login</h5>
                  <div className="row mb-3 mt-5">
                    <div className="col-sm-6 ">
                      <a
                        href=""
                        className="text-decoration-none text-light d-flex py-3 px-1 align-items-center justify-content-center bg-dark"
                      >
                        <img
                          className="img-fluid me-3"
                          src={googlepic}
                          alt=""
                        />
                        <span className="fs-6">Sign up with Google</span>
                      </a>
                    </div>
                    <div className="col-sm-6 ">
                      <a
                        href=""
                        className="text-decoration-none text-light d-flex py-3 px-1 align-items-center justify-content-center bg-dark"
                      >
                        <img
                          className="img-fluid me-3"
                          src={facebookpic}
                          alt=""
                        />
                        <span className="fs-6">Sign up with Facebook</span>
                      </a>
                    </div>
                  </div>
                  <div className="row my-4">
                    <hr className="col-5 align-self-center m-0 p-0" />
                    <span className="col-2 text-center fs-4">or</span>
                    <hr className="col-5 align-self-center m-0 p-0" />
                  </div>
                  <form
                    id="Login-form"
                    onSubmit={handleSubmit((data) => {
                      console.log(data);
                    })}
                  >
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control border-0 lh-lg"
                        placeholder="Email"
                        id="emailAddress"
                        name="emailAddress"
                        {...register("emailAddress", { required: true })}
                        aria-describedby="emailHelp"
                      />
                      {errors.emailAddress?.type === "required" && (
                        <div id="emailHelp" className="form-text text-danger">
                          Email Required !
                        </div>
                      )}
                    </div>
                    <div className="mb-3">
                      <input
                        type="password"
                        className="form-control border-0 lh-lg"
                        placeholder="Password"
                        id="passWord"
                        name="passWord"
                        {...register("passWord", {
                          required: true,
                          minLength: 10,
                        })}
                      />
                      {errors.passWord?.type === "required" && (
                        <div id="emailHelp" className="form-text text-danger">
                          Password Required !
                        </div>
                      )}
                      {errors.passWord?.type === "minLength" && (
                        <div id="emailHelp" className="form-text text-danger">
                          At least 10 Characters Required !
                        </div>
                      )}
                    </div>
                    <button
                      className="btn col-12 p-0 m-0 border-0 fw-bold fs-5 py-2 px-3 rounded-0 me-0 mb-3"
                      id="load-more-btn"
                    >
                      Login
                    </button>
                  </form>
                  <div className="d-flex justify-content-between align-items-center m-0 mb-5">
                    <h6 className="m-0 p-0">
                      If you don't have an account?
                      <NavLink
                        className="text-decoration-none ms-1"
                        to={"/Signup"}
                      >
                        Register
                      </NavLink>
                    </h6>
                    <h6 className="m-0 p-0">
                      <a className="text-decoration-none" href="">
                        Forgot Password?
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="row">
              <img className="img-fluid" src={loginpic} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
