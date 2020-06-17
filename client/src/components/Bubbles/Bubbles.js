import React from 'react';
import './style.css'
import rectangle1 from "../../Images/registerImg/register-rectangle-1@2x.png";
import rectangle2 from "../../Images/registerImg/register-rectangle-copy-2@2x.png";
import rectangle4 from "../../Images/registerImg/register-rectangle-copy-4@2x.png";
import rectangle6 from "../../Images/registerImg/register-rectangle-copy-6.png";
import rectangle7 from "../../Images/registerImg/register-rectangle-copy-7@2x.png";
import rectangle8 from "../../Images/registerImg/register-rectangle-copy-8@2x.png";
import rectangle9 from "../../Images/registerImg/register-rectangle-copy-9@2x.png";
import rectangle11 from "../../Images/registerImg/register-rectangle-copy-11.png";
import rectangle13 from "../../Images/registerImg/register-rectangle-copy-13@2x.png";
import rectangle14 from "../../Images/HomePageImg/home-rectangle-copy@2x.png";
import rectangle15 from "../../Images/HomePageImg/home-rectangle@2x.png";
export default class Bubbles extends React.Component {
    render() {
        return (
            <div>
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
          </div>
        )
    }
}