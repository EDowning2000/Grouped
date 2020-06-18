import React from 'react';
import { Link } from "react-router-dom";
import "./style.css";
export default class Header extends React.Component {
    render() {

        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="navbar-brand">Grouped</div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse flex-row-reverse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link to='/home'><div className="nav-item nav-link active mr-auto">Home <span className="sr-only">(current)</span></div></Link>
      <Link to ='/user'><div className="nav-item nav-link">Profile</div></Link>
      <Link to ='/about'><div className="nav-item nav-link">About</div></Link>
      
    </div>
  </div>
</nav>
        ) 
    }
}
// <div>
            //     <ul className="list">
            // <li className="">
            //     <Link to="/home">
            //   <div className="home1 rectangle anima-smart-layers-pointers">Home</div>
            // </Link>
            // </li>
            // <li className=""><Link to="/user">
            //   <div className="profile anima-smart-layers-pointers ">Profile</div>
            // </Link>
            // </li>
            // <li className="">
            // <Link to="/about">
            //   <div className="about1 anima-smart-layers-pointers ">About</div>
            // </Link>
            // </li>
            // </ul>
            // </div>