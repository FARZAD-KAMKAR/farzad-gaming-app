import React, { useEffect, useState } from "react";
import { Topheader } from "../components/Topheader";
import { Blog } from "../components/Blog";
import axios from "axios";


export const Blogs = () => {
  useEffect(() => {
    document.title = "GamerX - Blogs";
    document
      .querySelector("meta[name=description]")
      .setAttribute("content", "Blogs");
  }, []);

  const [news, setNews] = useState([]);

  const getData = async () => {
    const response = await axios(
      "https://668a40522c68eaf3211c4bf8.mockapi.io/api/v1/Blogs"
    );
    setNews(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Topheader
        title="Blogs"
        path={[
          { title: "Home", url: "/" },
          { title: "Blogs", url: "" },
        ]}
      />

      <div className="container">
        <div className="row">
          <div>
            <h2>Latest News</h2>
          </div>
          <div>
            <form action=""></form>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {news.map((item) => (
            <div className="col" key={item.id}>
              <Blog {...item}/>
            </div>
          ))}
        </div>
      </div>
      
    </>
  );
};
