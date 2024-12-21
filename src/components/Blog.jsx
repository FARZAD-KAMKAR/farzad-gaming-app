import React from "react";
import "./Latestnews.css";
import racetitlewraper from "../assets/GamerX-Images/blog-vector.png";

export const Blog = ({id, category, description, url, date}) => {
  return (
    <div className="mt-3 px-2 " id="news-box">
      <a className="text-decoration-none text-light" href="">
        <div className="position-relative" id="news-category-image">
          <img className="img-fluid" src={racetitlewraper} alt="" />
          <h5 id="news-category">{category}</h5>
        </div>
        <div className="position-relative" id="news-image">
          <div className="position-absolute top-0 start-0 end-0 bottom-0 bg-black opacity-25"></div>
          <img className="img-fluid" src={url} alt={description} />
          <div className="position-absolute bottom-0 start-0 p-4">
            <h6>{date}</h6>
            <h5>{description}</h5>
          </div>
        </div>
      </a>
    </div>
  );
};
