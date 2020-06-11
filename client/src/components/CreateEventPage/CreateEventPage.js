import React from "react";
import "./style.css";

import rectangle1 from "../../Images/CreateEventImg/create-event-rectangle-1@2x.png";
import rectangle2 from "../../Images/CreateEventImg/create-event-rectangle-2@2x.png";
import rectangle0 from "../../Images/CreateEventImg/create-event-rectangle-copy-2@2x.png";
import rectangle3 from "../../Images/CreateEventImg/create-event-rectangle-copy-3@2x.png";
import rectangle6 from "../../Images/CreateEventImg/create-event-rectangle-copy-6.png";
import rectangle7 from "../../Images/CreateEventImg/create-event-rectangle-copy-7@2x.png";
import rectangle8 from "../../Images/CreateEventImg/create-event-rectangle-copy-8@2x.png";
import rectangle9 from "../../Images/CreateEventImg/create-event-rectangle-copy-9@2x.png";
import rectangle13 from "../../Images/CreateEventImg/create-event-rectangle-copy-13@2x.png";
import rectangle14 from "../../Images/CreateEventImg/create-event-rectangle-copy@2x.png";

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

function CreateEventPage() {
  return (
    <div style={firstDivStyle}>
      <input id="anPageName" name="page" type="hidden" value="createevent" />
      <div className="createevent anima-word-break ">
        <div style={startStyle}>
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
            anima-src={rectangle0}
            className="rectanglecopy2 anima-animate-enter2"
            src={rectangle0}
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

          <div className="grouped">Grouped</div>
          <div className="home anima-smart-layers-pointers ">Home</div>
          <div className="profile anima-smart-layers-pointers ">Profile</div>
          <div className="about anima-smart-layers-pointers ">About</div>
          <div className="eventname">Event Name:</div>
          <div className="eventhost">Event Host:</div>
          <div className="maximumguests">Maximum Guests:</div>
          <div className="description">Description:</div>
          <div className="zipcode">Zip Code:</div>
          <div className="mmddyyyy">MM/DD/YYYY:</div>
          <div className="time">Time:</div>
          <img
            alt="rectangle pic"
            anima-src={rectangle2}
            className="rectangle2"
            src={rectangle2}
          />
          <div className="create anima-smart-layers-pointers">Create</div>
        </div>
      </div>
    </div>
  );
}
export default CreateEventPage;
