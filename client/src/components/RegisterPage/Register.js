import React from 'react';
import './style.css';

import rectangle1 from "../../registerImg/register-rectangle-1@2x.png";
import rectangle2 from "../../registerImg/register-rectangle-copy-2@2x.png";
import rectangle4 from "../../registerImg/register-rectangle-copy-4@2x.png";
import rectangle6 from "../../registerImg/register-rectangle-copy-6.png";
import rectangle7 from "../../registerImg/register-rectangle-copy-7@2x.png";
import rectangle8 from "../../registerImg/register-rectangle-copy-8@2x.png";
import rectangle9 from "../../registerImg/register-rectangle-copy-9@2x.png";
import rectangle11 from "../../registerImg/register-rectangle-copy-11.png";
import rectangle13 from "../../registerImg/register-rectangle-copy-13@2x.png";
import rectangle14 from "../../registerImg/register-rectangle-copy@2x.png";


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

  function Register(){
    return (
<div style={firstDivStyle}>
        <input id="anPageName" name="page" type="hidden" value="register"/>
        <div class="register anima-word-break ">
            <div style={startStyle}>

                <img alt="rectangle pic" anima-src={rectangle4} class="rectangle anima-animate-enter" src={rectangle4}/>

                <img alt="rectangle pic" anima-src={rectangle2} class="rectanglecopy anima-animate-enter1" src={rectangle2} />

                <img alt="rectangle pic" anima-src={rectangle2}  class="rectanglecopy2 anima-animate-enter2" src={rectangle2} />

                <img alt="rectangle pic" anima-src={rectangle4}  class="rectanglecopy3" src={rectangle4} />

                <img alt="rectangle pic" anima-src={rectangle4} class="rectanglecopy4" src={rectangle4}/>

                <img alt="rectangle pic" anima-src={rectangle1} class="rectangle1 anima-animate-enter3" src={rectangle1}/>

                <img alt="rectangle pic" anima-src={rectangle8} class="rectanglecopy8 anima-animate-enter4" src={rectangle8}/>

                <img alt="rectangle pic" anima-src={rectangle9} class="rectanglecopy9 anima-animate-enter5" src={rectangle9}/>

                <img alt="rectangle pic" anima-src={rectangle4} class="rectanglecopy5 anima-animate-enter6" src={rectangle4}/>

                <img alt="rectangle pic" anima-src={rectangle6} class="rectanglecopy6 anima-animate-enter7" src={rectangle6}/>

                <img alt="rectangle pic" anima-src={rectangle13} class="rectanglecopy13 anima-animate-enter8" src={rectangle13}/>

                <img alt="rectangle pic" anima-src={rectangle7} class="rectanglecopy7 anima-animate-enter9" src={rectangle7}/>

                <div class="joinus">
                    Join Us
                </div>
                <div class="rectangle2">
                </div>
                <div class="rectanglecopy10">
                </div>
                <img alt="rectangle pic" anima-src={rectangle11} class="rectanglecopy11" src={rectangle11}/>

                <div class="username">
                    username
                </div>
                <div class="password">
                    password
                </div>
                <div class="join anima-smart-layers-pointers ">
                    join
                </div>
                <div class="grouped">
                    Grouped
                </div>
                <div class="rectanglecopy101">
                </div>
                <div class="confirmpassword">
                    confirm password
                </div>
            </div>
        </div>
      </div>
    )
  }
  export default Register;