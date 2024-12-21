import React, { useEffect } from "react";
import Signuppic from "../assets/GamerX-Images/signup.png";
import { Topheader } from "../components/Topheader";
import { useForm } from "react-hook-form";
import googlepic from "../assets/GamerX-Images/Google.png";
import facebookpic from "../assets/GamerX-Images/facebook-icon.png";
import { NavLink } from "react-router-dom";

export const Signup = () => {
  useEffect(() => {
    document.title = "GamerX - Signup";
    document
      .querySelector("meta[name=description]")
      .setAttribute("content", "Signup");
  }, []);

  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  return (
    <>
      <Topheader
        title="Signup"
        path={[
          { title: "Home", url: "/" },
          { title: "Signup", url: "" },
        ]}
      />
      <section className="container-fluid">
        <div className="row">
          <div className="col-xl-6">
            <div className="row">
              <div className="col-xxl-8 offset-xxl-2 col-xl-10 offset-xl-1 col-md-8 offset-md-2">
                <div>
                  <h5 className="text-center fs-1">Signup</h5>
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
                    <h6 className="text-center mt-3">
                      Sign Up with your Email Address
                    </h6>
                  </div>
                  <form
                  id="signup-form"
                    onSubmit={handleSubmit((data) => {
                      console.log(data);
                    })}
                  >
                    <div className="my-3 row">
                      <div className="col-12 mt-4 col-md-6">
                        <div>
                          <input
                            type="text"
                            placeholder="First Name"
                            className="form-control py-3"
                            aria-describedby="emailHelp"
                            id="firstName"
                            name="firstName"
                            {...register("firstName", { required: true })}
                          />
                        </div>
                        {errors.firstName?.type === "required" && (
                          <div id="emailHelp" className="form-text text-danger">
                            Firstname Required !
                          </div>
                        )}
                      </div>

                      <div className="col-12 mt-4 col-md-6">
                        <div>
                          <input
                            type="text"
                            placeholder="Last Name"
                            className="form-control py-3"
                            aria-describedby="emailHelp"
                            id="lastName"
                            name="lastName"
                            {...register("lastName", { required: true })}
                          />
                        </div>
                        {errors.lastName?.type === "required" && (
                          <div id="emailHelp" className="form-text text-danger">
                            Lastname Required !
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="mb-4">
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
                    <div className="mb-2">
                      <input
                        type="password"
                        className="form-control border-0 lh-lg"
                        placeholder="Enter Password"
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
                    <div className="mb-4">
                      <input
                        type="password"
                        className="form-control border-0 lh-lg"
                        placeholder="Confirm Your Password"
                        id="conPassWord"
                        name="conPassWord"
                        {...register("conPassWord", {
                          required: true,
                          minLength: 10,
                        })}
                      />
                      {errors.conPassWord?.type === "required" && (
                        <div id="emailHelp" className="form-text text-danger">
                          Password Confirmation Required !
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
                      Create Account
                    </button>
                  </form>
                  <h6 className="text-center mb-5">
                    Already have an account ?
                    <NavLink
                      className="text-decoration-none ms-2"
                      to={"/Login"}
                    >
                      Log in
                    </NavLink>
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="row">
              <img className="img-fluid" src={Signuppic} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
