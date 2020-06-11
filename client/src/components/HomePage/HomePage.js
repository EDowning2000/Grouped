import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

import rectangle1 from "../../Images/HomePageImg/home-rectangle-1@2x.png";
import rectangle6 from "../../Images/HomePageImg/home-rectangle-copy-6.png";
import rectangle7 from "../../Images/HomePageImg/home-rectangle-copy-7@2x.png";
import rectangle8 from "../../Images/HomePageImg/home-rectangle-copy-8@2x.png";
import rectangle9 from "../../Images/HomePageImg/home-rectangle-copy-9@2x.png";
import rectangle13 from "../../Images/HomePageImg/home-rectangle-copy-13@2x.png";
import rectangle14 from "../../Images/HomePageImg/home-rectangle-copy@2x.png";
import rectangle15 from "../../Images/HomePageImg/home-rectangle@2x.png";

const firstDivStyle = {
  margin: "0",
  background: "rgba(22,24,56,1.0)",
};
const startStyle = {
  width: "1024px",
  height: "100%",
  position: "relative",
  margin: "auto",
};

function HomePage() {
  return (
    <div style={firstDivStyle}>
      <input id="anPageName" name="page" type="hidden" value="home" />
      <div className="home anima-word-break ">
        <div style={startStyle}>
          <img
            alt="rectangle pic"
            anima-src={rectangle6}
            className="rectangle anima-animate-enter"
            src={rectangle6}
          />

          <img
            alt="rectangle pic"
            anima-src={rectangle14}
            className="rectanglecopy anima-animate-enter1"
            src={rectangle14}
          />

          <img
            alt="rectangle pic"
            anima-src={rectangle1}
            className="rectangle1 anima-animate-enter3"
            src={rectangle1}
          />

          <img
            alt="rectangle pic"
            anima-src={rectangle8}
            className="rectanglecopy8 anima-animate-enter4"
            src={rectangle8}
          />

          <img
            alt="rectangle pic"
            anima-src={rectangle9}
            className="rectanglecopy9 anima-animate-enter5"
            src={rectangle9}
          />

          <img
            alt="rectangle pic"
            anima-src={rectangle15}
            className="rectanglecopy5 anima-animate-enter6"
            src={rectangle15}
          />

          <img
            alt="rectangle pic"
            anima-src={rectangle6}
            className="rectanglecopy6 anima-animate-enter7"
            src={rectangle6}
          />

          <img
            alt="rectangle pic"
            anima-src={rectangle13}
            className="rectanglecopy13 anima-animate-enter8"
            src={rectangle13}
          />

          <img
            alt="rectangle pic"
            anima-src={rectangle7}
            className="rectanglecopy7 anima-animate-enter9"
            src={rectangle7}
          />
          <Link to="/">
            <div className="grouped">Grouped</div>
          </Link>
          <Link to="/home">
            <span className="home1">Home</span>
          </Link>
          <Link to="/user">
            <span className="profile">Profile</span>
          </Link>
          <Link to="/about">
            <span className="about1">About</span>
          </Link>
          <Link to="/create">
            <div className="createnewevent anima-smart-layers-pointers ">
              Create New Event
            </div>
          </Link>
          <Link to="/search">
            <div className="searchevents anima-smart-layers-pointers ">
              Search Events
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
