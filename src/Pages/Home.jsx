import React, { useEffect } from "react";

import "../components/Tournament.css";
import { Banner } from "../components/Banner";
import { Latestnews } from "../components/Latestnews";
import { Aboutbanner } from "../components/Aboutbanner";
import { Innerbanner } from "../components/Innerbanner";
import { Ourshop } from "../components/Ourshop";
import "../components/Latestnews.css";
import racepic1 from "../assets/GamerX-Images/b-1.png";
import racepic2 from "../assets/GamerX-Images/b-2.png";
import racepic3 from "../assets/GamerX-Images/b-3.png";
import { Tournament } from "../components/Tournament";
import AOS from "aos";
import "aos/dist/aos.css";
const { useState } = React;

export const Home = () => {
  const tournamentData = [
    {
      id: 1,
      pic: "./GamerX-Images/tl-1.png",
      title: "PUBG",
      level: "A-Tier",
      reward: "50.000",
      location: "Asia",
    },
    {
      id: 2,
      pic: "./GamerX-Images/tl-2.png",
      title: "CS GO",
      level: "B-Tier",
      reward: "30.000",
      location: "AFRICA",
    },
    {
      id: 3,
      pic: "./GamerX-Images/tl-3.png",
      title: "FORTNITE",
      level: "A-Tier",
      reward: "50.000",
      location: "USA",
    },
    {
      id: 4,
      pic: "./GamerX-Images/tl-4.png",
      title: "DOTA2",
      level: "C-Tier",
      reward: "20.000",
      location: "EUROPE",
    },
    {
      id: 5,
      pic: "./GamerX-Images/tl-1.png",
      title: "PUBG",
      level: "A-Tier",
      reward: "50.000",
      location: "Asia",
    },
    {
      id: 6,
      pic: "./GamerX-Images/tl-2.png",
      title: "CS GO",
      level: "B-Tier",
      reward: "30.000",
      location: "AFRICA",
    },
    {
      id: 7,
      pic: "./GamerX-Images/tl-3.png",
      title: "FORTNITE",
      level: "A-Tier",
      reward: "50.000",
      location: "USA",
    },
    {
      id: 8,
      pic: "./GamerX-Images/tl-4.png",
      title: "DOTA2",
      level: "C-Tier",
      reward: "20.000",
      location: "EUROPE",
    },
  ];

  const [tournaments, setTournaments] = useState(tournamentData);

  const [titles, setTitles] = useState(["ALL"]);

  useEffect(() => {
    setTitles(["ALL", ...new Set(tournamentData.map((item) => item.title))]);
    AOS.init();

    document
      .querySelector("meta[name=description]")
      .setAttribute("content", "Home Page Description");
  }, []);

  const filterTournaments = (type) => {
    if (type === "ALL") {
      setTournaments(tournamentData);
    } else {
      setTournaments(tournamentData.filter((item) => item.title === type));
    }
  };

  const [visible, setVisible] = useState(4);

  const loadMore = () => {
    setVisible((firstValue) => firstValue + 4);
  };

  return (
    <>
      <Banner />
      <Aboutbanner />
      <section
        className="container-fluid my-5 px-3 px-lg-5"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="700"
      >
        <div className="row px-2 my-5">
          <div className="col-12 col-lg-6">
            <h2 className="fs-1 ps-2 mb-5">Tournament</h2>
          </div>
          <div className="col-12 col-lg-6 text-center text-lg-end pe-5">
            <div className="" id="tournament-btns">
              {titles.map((item, i) => (
                <button
                  type="button"
                  className="btn btn-primary px-3 py-2 rounded-0 fs-5 "
                  id="tour-btn"
                  key={i}
                  onClick={() => filterTournaments(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="row px-2 my-5">
          {tournaments.slice(0, visible).map((item) => (
            <Tournament
              key={item.id}
              id={item.id}
              pic={item.pic}
              title={item.title}
              level={item.level}
              reward={item.reward}
              location={item.location}
            />
          ))}
          <button
            className="btn fw-bold fs-5 py-2 px-3 rounded-0 me-3 mb-5"
            id="load-more-btn"
            onClick={loadMore}
          >
            Load More
          </button>
        </div>
       
      </section>
      <Innerbanner />
      <section
        className="container-fluid"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="700"
      >
        <div className="row py-3 m-0 px-3 px-lg-5 mt-5">
          <h2 className="fs-1">Our Shop</h2>
          <Ourshop />
        </div>
      </section>
      <section
        className="container-fluid pb-5"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="700"
      >
        <div className="row py-3 m-0 px-3 px-lg-5">
          <h2 className="mb-5 p-0 fs-1 mt-5">Latest News</h2>
          <div className="col-12 col-md-6 col-lg-4">
            <Latestnews
              category={"Racing Games"}
              date={"Aug 10, 2023"}
              overview={
                "Gaming Community Spotlight: Inspiring Stories and Achievements"
              }
              pic={racepic1}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <Latestnews
              category={"Fighting Games"}
              date={"Aug 12, 2023"}
              overview={
                "Gaming Community Spotlight: Inspiring Stories and Achievements"
              }
              pic={racepic2}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <Latestnews
              category={"Sports Games"}
              date={"Aug 13, 2023"}
              overview={
                "Gaming Community Spotlight: Inspiring Stories and Achievements"
              }
              pic={racepic3}
            />
          </div>
        </div>
      </section>
    </>
  );
};
