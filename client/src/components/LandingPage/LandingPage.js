import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

import rectangle1 from "../../Images/LandingPageImg/landing-page-rectangle-1@2x.png";
import rectangle2 from "../../Images/LandingPageImg/landing-page-rectangle-copy-2@2x.png";
import rectangle3 from "../../Images/LandingPageImg/landing-page-rectangle-copy-3@2x.png";
import rectangle7 from "../../Images/LandingPageImg/landing-page-rectangle-copy-7@2x.png";
import rectangle8 from "../../Images/LandingPageImg/landing-page-rectangle-copy-8@2x.png";
import rectangle9 from "../../Images/LandingPageImg/landing-page-rectangle-copy-9@2x.png";
import rectangle13 from "../../Images/LandingPageImg/landing-page-rectangle-copy-13@2x.png";
import rectangle14 from "../../Images/LandingPageImg/landing-page-rectangle-copy@2x.png";

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

function LandingPage() {
  return (
    <div style={firstDivStyle}>
      <input id="anPageName" name="page" type="hidden" value="landingpage" />
      <div className="landingpage anima-word-break ">
        <div style={startStyle}>
          <div className="grouped">Grouped</div>
          <div className="asafeandeasyplac">
            A Safe and Easy Place to Find and Create Events Near You
          </div>

          <Link to="/register">
            <div className="register anima-smart-layers-pointers ">
              Register
            </div>
          </Link>
          <Link to="/login">
            <div className="login anima-smart-layers-pointers ">Login</div>
          </Link>

          <img
            alt="rectangle pic"
            anima-src={rectangle3}
            className="rectangle anima-animate-enter"
            src={rectangle3}
          />

          <img
            alt="rectangle pic"
            anima-src={rectangle14}
            className="rectanglecopy anima-animate-enter1"
            src={rectangle14}
          />

          <img
            alt="rectangle pic"
            anima-src={rectangle2}
            className="rectanglecopy2 anima-animate-enter2"
            src={rectangle2}
          />

          <img
            alt="rectangle pic"
            anima-src={rectangle3}
            className="rectanglecopy3"
            src={rectangle3}
          />

          <img
            alt="rectangle pic"
            anima-src={rectangle3}
            className="rectanglecopy4"
            src={rectangle3}
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
            anima-src={rectangle3}
            className="rectanglecopy5 anima-animate-enter6"
            src={rectangle3}
          />

          <img
            alt="rectangle pic"
            anima-src={rectangle3}
            className="rectanglecopy6 anima-animate-enter7"
            src={rectangle3}
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
        </div>
      </div>
    </div>
  );
}
export default LandingPage;
