import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

import rectangle1 from "../../Images/AboutImg/about-rectangle-1@2x.png";
import rectangle2 from "../../Images/AboutImg/about-rectangle-copy-2@2x.png";
import rectangle4 from "../../Images/AboutImg/about-rectangle-copy-4@2x.png";
import rectangle6 from "../../Images/AboutImg/about-rectangle-copy-6.png";
import rectangle7 from "../../Images/AboutImg/about-rectangle-copy-7@2x.png";
import rectangle8 from "../../Images/AboutImg/about-rectangle-copy-8@2x.png";
import rectangle9 from "../../Images/AboutImg/about-rectangle-copy-9@2x.png";
import rectangle13 from "../../Images/AboutImg/about-rectangle-copy-13@2x.png";
import rectangle14 from "../../Images/AboutImg/about-rectangle-copy@2x.png";

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

const kyleStyle={
  top:'274px',
  left:'460px'
};


function AboutPage() {
  return (
    <div style={firstDivStyle}>
      <input id="anPageName" name="page" type="hidden" value="about" />
      <div className="about anima-word-break ">
        <div style={startStyle}>
          <img
            alt="rectangle Pic"
            anima-src={rectangle4}
            className="rectangle anima-animate-enter"
            src={rectangle4}
          />

          <img
            alt="rectangle Pic"
            anima-src={rectangle14}
            className="rectanglecopy anima-animate-enter1"
            src={rectangle14}
          />

          <img
            alt="rectangle Pic"
            anima-src={rectangle2}
            className="rectanglecopy2 anima-animate-enter2"
            src={rectangle2}
          />

          <img
            alt="rectangle Pic"
            anima-src={rectangle4}
            className="rectanglecopy3"
            src={rectangle4}
          />

          <img
            alt="rectangle Pic"
            anima-src={rectangle4}
            className="rectanglecopy4"
            src={rectangle4}
          />

          <img
            alt="rectangle Pic"
            anima-src={rectangle1}
            className="rectangle1 anima-animate-enter3"
            src={rectangle1}
          />

          <img
            alt="rectangle Pic"
            anima-src={rectangle8}
            className="rectanglecopy8 anima-animate-enter4"
            src={rectangle8}
          />

          <img
            alt="rectangle Pic"
            anima-src={rectangle9}
            className="rectanglecopy9 anima-animate-enter5"
            src={rectangle9}
          />

          <img
            alt="rectangle Pic"
            anima-src={rectangle4}
            className="rectanglecopy5 anima-animate-enter6"
            src={rectangle4}
          />

          <img
            alt="rectangle Pic"
            anima-src={rectangle6}
            className="rectanglecopy6 anima-animate-enter7"
            src={rectangle6}
          />

          <img
            alt="rectangle Pic"
            anima-src={rectangle13}
            className="rectanglecopy13 anima-animate-enter8"
            src={rectangle13}
          />

          <img
            alt="rectangle Pic"
            anima-src={rectangle7}
            className="rectanglecopy7 anima-animate-enter9"
            src={rectangle7}
          />

          <div className="grouped">Grouped</div>
          <Link to="/home">
            <div className="home1 anima-smart-layers-pointers ">Home</div>
          </Link>
          <Link to="/user">
            <div className="profile anima-smart-layers-pointers ">Profile</div>
          </Link>
          <Link to="/about">
            <div className="about1 anima-smart-layers-pointers ">About</div>
          </Link>
          <div className="designers">Designers</div>
          <a className="emersondowning anima-smart-layers-pointers" href="https://github.com/EDowning2000" target="blank">Emerson Downing</a>
        <a className="emersondowning anima-smart-layers-pointers" href="https://github.com/Kiyole" target='blank' style={kyleStyle}>Kyle Smith</a>
          <div className="technologies">Technologies</div>
          <div className="htmlcssjavascript">
            Html
            <br />
            Css
            <br />
            JavaScript
            <br />
            React
            <br />
            Node
          </div>
          <a className="sourcecode anima-smart-layers-pointers" href="https://github.com/EDowning2000/Project3" target="blank">
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
