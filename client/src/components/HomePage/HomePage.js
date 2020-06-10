import React from 'react';
import './style.css';


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



function HomePage(){
  return(
    <div style={firstDivStyle}>
        <input id="anPageName" name="page" type="hidden" value="home"/>
        <div class="home anima-word-break ">
            <div style={startStyle}>
                <img alt="Image" anima-src="./img/home-rectangle@2x.png" class="rectangle anima-animate-enter" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img alt="Image" anima-src="./img/home-rectangle-copy@2x.png" class="rectanglecopy anima-animate-enter1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img alt="Image" anima-src="./img/home-rectangle-copy-2@2x.png" class="rectanglecopy2 anima-animate-enter2" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img alt="Image" anima-src="./img/home-rectangle@2x.png" class="rectanglecopy3" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img alt="Image" anima-src="./img/home-rectangle@2x.png" class="rectanglecopy4" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img alt="Image" anima-src="./img/home-rectangle-1@2x.png" class="rectangle1 anima-animate-enter3" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img alt="Image" anima-src="./img/home-rectangle-copy-8@2x.png" class="rectanglecopy8 anima-animate-enter4" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img alt="Image" anima-src="./img/home-rectangle-copy-9@2x.png" class="rectanglecopy9 anima-animate-enter5" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img alt="Image" anima-src="./img/home-rectangle@2x.png" class="rectanglecopy5 anima-animate-enter6" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img alt="Image" anima-src="./img/home-rectangle-copy-6.png" class="rectanglecopy6 anima-animate-enter7" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img alt="Image" anima-src="./img/home-rectangle-copy-13@2x.png" class="rectanglecopy13 anima-animate-enter8" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img alt="Image" anima-src="./img/home-rectangle-copy-7@2x.png" class="rectanglecopy7 anima-animate-enter9" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <div class="grouped">
                    Grouped
                </div>
                <div class="home1 anima-smart-layers-pointers ">
                    Home
                </div>
                <div class="profile anima-smart-layers-pointers ">
                    Profile
                </div>
                <div class="about anima-smart-layers-pointers ">
                    About
                </div>
                <div class="createnewevent anima-smart-layers-pointers ">
                    Create New Event
                </div>
                <div class="searchevents anima-smart-layers-pointers ">
                    Search Events
                </div>
            </div>
        </div>
      </div>
  );
};
export default HomePage;