import React from 'react';
import './style.css';

import rectangle0 from '../../UserProfileImg/user-profile--photo@2x.png';
import rectangle1 from '../../UserProfileImg/user-profile--rectangle-1@2x.png';
import rectangle2 from '../../UserProfileImg/user-profile--rectangle-copy-2@2x.png';
import rectangle4 from '../../UserProfileImg/user-profile--rectangle-copy-4@2x.png';
import rectangle6 from '../../UserProfileImg/user-profile--rectangle-copy-6.png';
import rectangle7 from '../../UserProfileImg/user-profile--rectangle-copy-7@2x.png';
import rectangle8 from '../../UserProfileImg/user-profile--rectangle-copy-8@2x.png';
import rectangle9 from '../../UserProfileImg/user-profile--rectangle-copy-9@2x.png';
import rectangle13 from '../../UserProfileImg/user-profile--rectangle-copy-13@2x.png';
import rectangle14 from '../../UserProfileImg/user-profile--rectangle-copy@2x.png';

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

function UserProfilePage(){
  return(
    <div style={firstDivStyle}>
        <input id="anPageName" name="page" type="hidden" value="userprofile"/>
        <div className="userprofile anima-word-break ">
            <div style={startStyle}>

                <img alt="rectangle pic" anima-src="./img/user-profile--rectangle-copy-4@2x.png" className="rectangle anima-animate-enter" src="data:rectangle pic/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>

                <img alt="rectangle pic" anima-src="./img/user-profile--rectangle-copy@2x.png" className="rectanglecopy anima-animate-enter1" src="data:rectangle pic/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>

                <img alt="rectangle pic" anima-src="./img/user-profile--rectangle-copy-2@2x.png" className="rectanglecopy2 anima-animate-enter2" src="data:rectangle pic/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>

                <img alt="rectangle pic" anima-src="./img/user-profile--rectangle-copy-4@2x.png" className="rectanglecopy3" src="data:rectangle pic/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>

                <img alt="rectangle pic" anima-src="./img/user-profile--rectangle-copy-4@2x.png" className="rectanglecopy4" src="data:rectangle pic/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>

                <img alt="rectangle pic" anima-src="./img/user-profile--rectangle-1@2x.png" className="rectangle1 anima-animate-enter3" src="data:rectangle pic/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>

                <img alt="rectangle pic" anima-src="./img/user-profile--rectangle-copy-8@2x.png" className="rectanglecopy8 anima-animate-enter4" src="data:rectangle pic/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>

                <img alt="rectangle pic" anima-src="./img/user-profile--rectangle-copy-9@2x.png" className="rectanglecopy9 anima-animate-enter5" src="data:rectangle pic/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>

                <img alt="rectangle pic" anima-src="./img/user-profile--rectangle-copy-4@2x.png" className="rectanglecopy5 anima-animate-enter6" src="data:rectangle pic/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>

                <img alt="rectangle pic" anima-src="./img/user-profile--rectangle-copy-6.png" className="rectanglecopy6 anima-animate-enter7" src="data:rectangle pic/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>

                <img alt="rectangle pic" anima-src="./img/user-profile--rectangle-copy-13@2x.png" className="rectanglecopy13 anima-animate-enter8" src="data:rectangle pic/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>

                <img alt="rectangle pic" anima-src="./img/user-profile--rectangle-copy-7@2x.png" className="rectanglecopy7 anima-animate-enter9" src="data:rectangle pic/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>

                <div className="about anima-smart-layers-pointers ">
                    About
                </div>
                <div className="grouped">
                    Grouped
                </div>
                <img alt="rectangle pic" anima-src="./img/user-profile--profile-photo@2x.png" className="profilephoto" src="data:rectangle pic/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>

                <div className="rectangle2">
                </div>
                <div className="rectanglecopy10">
                </div>
                <div className="name">
                    Name:
                </div>
                <div className="zipcode">
                    zip code:
                </div>
                <div className="home anima-smart-layers-pointers ">
                    Home
                </div>
                <div className="profile anima-smart-layers-pointers ">
                    Profile
                </div>
            </div>
        </div>
      </div>
  );
};
export default UserProfilePage;