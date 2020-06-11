import React from 'react';
import './style.css'


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

function AboutPage(){
  return(
    <div style={firstDivStyle}>
        <input id="anPageName" name="page" type="hidden" value="about"/>
        <div className="about anima-word-break ">
            <div style={startStyle}>
                <img alt="Image" anima-src="./img/about-rectangle-copy-4@2x.png" className="rectangle anima-animate-enter" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img alt="Image" anima-src="./img/about-rectangle-copy@2x.png" className="rectanglecopy anima-animate-enter1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img alt="Image" anima-src="./img/about-rectangle-copy-2@2x.png" className="rectanglecopy2 anima-animate-enter2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img alt="Image" anima-src="./img/about-rectangle-copy-4@2x.png" className="rectanglecopy3" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img alt="Image" anima-src="./img/about-rectangle-copy-4@2x.png" className="rectanglecopy4" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img alt="Image" anima-src="./img/about-rectangle-1@2x.png" className="rectangle1 anima-animate-enter3" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img alt="Image" anima-src="./img/about-rectangle-copy-8@2x.png" className="rectanglecopy8 anima-animate-enter4" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img alt="Image" anima-src="./img/about-rectangle-copy-9@2x.png" className="rectanglecopy9 anima-animate-enter5" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img alt="Image" anima-src="./img/about-rectangle-copy-4@2x.png" className="rectanglecopy5 anima-animate-enter6" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img alt="Image" anima-src="./img/about-rectangle-copy-6.png" className="rectanglecopy6 anima-animate-enter7" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img alt="Image" anima-src="./img/about-rectangle-copy-13@2x.png" className="rectanglecopy13 anima-animate-enter8" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img alt="Image" anima-src="./img/about-rectangle-copy-7@2x.png" className="rectanglecopy7 anima-animate-enter9" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <div className="grouped">
                    Grouped
                </div>
                <div className="home anima-smart-layers-pointers ">
                    Home
                </div>
                <div className="profile anima-smart-layers-pointers ">
                    Profile
                </div>
                <div className="about1 anima-smart-layers-pointers ">
                    About
                </div>
                <div className="designers">
                    Designers
                </div>
                <div className="emersondowning">
                    Emerson Downing
                </div>
                <div className="kylesmith">
                    Kyle Smith
                </div>
                <div className="technologies">
                    Technologies
                </div>
                <div className="htmlcssjavascript">
                    Html<br />Css<br />JavaScript<br />React<br />Node
                </div>
                <div className="sourcecode anima-smart-layers-pointers ">
                    Source Code
                </div>
            </div>
        </div>
      </div>
  );
};
export default AboutPage;