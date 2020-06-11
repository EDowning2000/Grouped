import React from 'react';
import './style.css';

  import rectangle1 from "../../loginImg/login-rectangle-1@2x.png";
  import rectangle2 from "../../loginImg/login-rectangle-copy-2@2x.png";
  import rectangle5 from "../../loginImg/login-rectangle-copy-5@2x.png";
  import rectangle7 from "../../loginImg/login-rectangle-copy-7@2x.png";
  import rectangle8 from "../../loginImg/login-rectangle-copy-8@2x.png";
  import rectangle9 from "../../loginImg/login-rectangle-copy-9@2x.png";
  import rectangle11 from "../../loginImg/login-rectangle-copy-11.png";
  import rectangle13 from "../../loginImg/login-rectangle-copy-13@2x.png";
  import rectangle14 from "../../loginImg/login-rectangle-copy@2x.png";

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

function LoginPage(){
  return (
    <div style={firstDivStyle}>
        <input id="anPageName" name="page" type="hidden" value="login"/>
        <div className="login anima-word-break ">
            <div style={startStyle}>
                <img alt="rectangle pic" anima-src={rectangle5} className="rectangle anima-animate-enter" src={rectangle5}/>

                <img alt="rectangle pic" anima-src={rectangle2} className="rectanglecopy anima-animate-enter1" src={rectangle2}/>

                <img alt="rectangle pic" anima-src={rectangle2} className="rectanglecopy2 anima-animate-enter2" src={rectangle2}/>

                <img alt="rectangle pic" anima-src={rectangle5} className="rectanglecopy3" src={rectangle5}/>

                <img alt="rectangle pic" anima-src={rectangle5} className="rectanglecopy4" src={rectangle5}/>

                <img alt="rectangle pic" anima-src={rectangle1} className="rectangle1 anima-animate-enter3" src={rectangle1}/>

                <img alt="rectangle pic" anima-src={rectangle8} className="rectanglecopy8 anima-animate-enter4" src={rectangle8}/>

                <img alt="rectangle pic" anima-src={rectangle9} className="rectanglecopy9 anima-animate-enter5" src={rectangle9}/>

                <img alt="rectangle pic" anima-src={rectangle5} className="rectanglecopy5 anima-animate-enter6" src={rectangle5}/>

                <img alt="rectangle pic" anima-src={rectangle5} className="rectanglecopy6 anima-animate-enter7" src={rectangle5}/>

                <img alt="rectangle pic" anima-src={rectangle13} className="rectanglecopy13 anima-animate-enter8" src={rectangle13}/>

                <img alt="rectangle pic" anima-src={rectangle7} className="rectanglecopy7 anima-animate-enter9" src={rectangle7}/>

                <div className="welcomeback">
                    Welcome Back
                </div>
                <div className="rectangle2">
                </div>
                <div className="rectanglecopy10">
                </div>
                

                <div className="username">
                    username
                </div>
                <div className="password">
                    password
                </div>
                <div className="login1 anima-smart-layers-pointers ">
                    login
                </div>
                <div className="grouped">
                    Grouped
                </div>
            </div>
        </div>
      </div>
  );
};
export default LoginPage;