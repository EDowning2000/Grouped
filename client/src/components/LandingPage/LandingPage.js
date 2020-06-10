import React from "react";
import "./style.css";
import rectangle1 from "../../LandingPageImg/desktop-rectangle-1@2x.png";
import rectangle2 from "../../LandingPageImg/desktop-rectangle-copy-2@2x.png";
import rectangle3 from "../../LandingPageImg/desktop-rectangle-copy-3@2x.png";
import rectangle4 from "../../LandingPageImg/desktop-rectangle-copy-4@2x.png";
import rectangle5 from "../../LandingPageImg/desktop-rectangle-copy-5@2x.png";
import rectangle6 from "../../LandingPageImg/desktop-rectangle-copy-6@2x.png";
import rectangle7 from "../../LandingPageImg/desktop-rectangle-copy-7@2x.png";
import rectangle8 from "../../LandingPageImg/desktop-rectangle-copy-8@2x.png";
import rectangle9 from "../../LandingPageImg/desktop-rectangle-copy-9@2x.png";
import rectangle13 from "../../LandingPageImg/desktop-rectangle-copy-13@2x.png";
import rectangle14 from "../../LandingPageImg/desktop-rectangle-copy@2x.png";
import rectangle15 from "../../LandingPageImg/desktop-rectangle@2x.png";


const firstDivStyle ={
margin:"0",
background: "rgba(22,24,56,1.0)"

};
const startStyle ={
  width: "1024px",
   height: "100%",
    position:"relative",
     margin:"auto"
};


function LandingPage(){
  return (
    <div style={firstDivStyle}>
        <input id="anPageName" name="page" type="hidden" value="desktop"/>
        <div className="desktop anima-word-break ">
            <div style={startStyle}>
                <div className="grouped">
                    Grouped
                </div>
                <div className="asafeandeasyplac">
                    A Safe and Easy Place to Find and Create Events Near You
                </div>
                <div className="register anima-smart-layers-pointers ">
                  

                    <a href="filler" className="span1">Register</a><span className="span2"><br /></span>
                </div>

                <a href="filler" className="login anima-smart-layers-pointers ">
                    Login
                </a>


                <img alt="Rectangle Pic"  anima-src={rectangle4} className="rectangle anima-animate-enter" src={rectangle4}/>

                <img alt="Rectangle Pic"  anima-src={rectangle14} className="rectanglecopy anima-animate-enter1" src={rectangle14}/>

                <img alt="Rectangle Pic"  anima-src={rectangle2} className="rectanglecopy2 anima-animate-enter2" src={rectangle2}/>

                <img alt="Rectangle Pic"  anima-src={rectangle4} className="rectanglecopy3" src={rectangle4}/>

                <img alt="Rectangle Pic"  anima-src={rectangle4} className="rectanglecopy4" src={rectangle4}/>

                <img alt="Rectangle Pic"  anima-src={rectangle1} className="rectangle1 anima-animate-enter3" src={rectangle1}/>

                <img alt="Rectangle Pic"  anima-src={rectangle8} className="rectanglecopy8 anima-animate-enter4" src={rectangle8}/>

                <img alt="Rectangle Pic"  anima-src={rectangle9} className="rectanglecopy9 anima-animate-enter5" src={rectangle9}/>

                <img alt="Rectangle Pic"  anima-src={rectangle4} className="rectanglecopy5 anima-animate-enter6" src={rectangle4}/>

                <img alt="Rectangle Pic"  anima-src={rectangle4} className="rectanglecopy6 anima-animate-enter7" src={rectangle4}/>

                <img alt="Rectangle Pic"  anima-src={rectangle13} className="rectanglecopy13 anima-animate-enter8" src={rectangle13}/>

                <img alt="Rectangle Pic"  anima-src={rectangle7} className="rectanglecopy7 anima-animate-enter9" src={rectangle7}/>
            </div>
        </div>
      </div>
  );
};
export default LandingPage;