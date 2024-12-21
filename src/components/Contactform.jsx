import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const Contactform = () => {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <div className="my-3 row">
        <div className="col-12 mt-4 col-md-6">
          <div>
            <input
              type="text"
              placeholder="your Name"
              className="form-control py-3"
              aria-describedby="emailHelp"
              id="yourName"
              name="yourName"
              {...register("yourName", { required: true })}
            />
          </div>
          {errors.yourName?.type === "required" && (
            <div id="emailHelp" className="form-text text-danger">
              Name Required !
            </div>
          )}
        </div>

        <div className="col-12 mt-4 col-md-6">
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="form-control py-3"
              aria-describedby="emailHelp"
              id="yourEmail"
              name="yourEmail"
              {...register("yourEmail", { required: true })}
            />
          </div>
          {errors.yourEmail?.type === "required" && (
            <div id="emailHelp" className="form-text text-danger">
              Email Required !
            </div>
          )}
        </div>

        <div className="col-12 mt-4">
          <div>
            <input
              type="text"
              placeholder="Phone Number"
              className="form-control py-3"
              aria-describedby="emailHelp"
              id="phoneNumber"
              name="phoneNumber"
              {...register("phoneNumber", { required: true })}
            />
          </div>
          {errors.yourEmail?.type === "required" && (
            <div id="phoneNumber" className="form-text text-danger">
              Phone Number Required !
            </div>
          )}
        </div>

        <div className="col-12 mt-4">
          <textarea
            className="form-control py-3"
            placeholder="Write your message here"
            rows="4"
            id="yourMessage"
            name="yourMessage"
            {...register("yourMessage", { required: true })}
          ></textarea>
        </div>
        <div className="col-12 mt-4">
          <button
            className="btn col-12 p-0 m-0 border-0 fw-bold fs-5 py-2 px-3 rounded-0 me-3 mb-5"
            id="load-more-btn"
          >
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
};
