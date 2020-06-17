import React, { Component } from "react";
//import classnames from 'classnames';
//import {loginUser}  from '../../authActions/authActions';
import "./style.css";
import { Link } from "react-router-dom";

import rectangle1 from "../../Images/loginImg/login-rectangle-1@2x.png";
import rectangle2 from "../../Images/loginImg/login-rectangle-copy-2@2x.png";
import rectangle5 from "../../Images/loginImg/login-rectangle-copy-5@2x.png";
import rectangle7 from "../../Images/loginImg/login-rectangle-copy-7@2x.png";
import rectangle8 from "../../Images/loginImg/login-rectangle-copy-8@2x.png";
import rectangle9 from "../../Images/loginImg/login-rectangle-copy-9@2x.png";
import rectangle11 from "../../Images/loginImg/login-rectangle-copy-11.png";
import rectangle13 from "../../Images/loginImg/login-rectangle-copy-13@2x.png";

export default class Login extends Component{
  constructor(){
    super();
    this.state ={
      email: '',
      password: '',
      errors: {}
    };
  };
  componentDidMount(){
    if(this.props.auth.isAuthenticated) this.props.history.push('/dashboard');
  };
  componentWillReceiveProps(nextProps){
    if(nextProps.auth.isAuthenticated) this.props.history.push('/dashboard');
    if(nextProps.errors){
      this.state({
        errors: nextProps.errors
      });
    };
  };
  onChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };
  onSubmit = e =>{
    e.preventdefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
  };
};


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

function LoginPage() {
  return (
    <div style={firstDivStyle}>
      <input id="anPageName" name="page" type="hidden" value="login" />
      <div className="login anima-word-break ">
        <div style={startStyle}>
          <img
            alt="rectangle pic"
            anima-src={rectangle5}
            className="rectangle anima-animate-enter"
            src={rectangle5}
          />

          <img
            alt="rectangle pic"
            anima-src={rectangle2}
            className="rectanglecopy anima-animate-enter1"
            src={rectangle2}
          />

          <img
            alt="rectangle pic"
            anima-src={rectangle2}
            className="rectanglecopy2 anima-animate-enter2"
            src={rectangle2}
          />

          <img
            alt="rectangle pic"
            anima-src={rectangle5}
            className="rectanglecopy3"
            src={rectangle5}
          />

          <img
            alt="rectangle pic"
            anima-src={rectangle5}
            className="rectanglecopy4"
            src={rectangle5}
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
            anima-src={rectangle5}
            className="rectanglecopy5 anima-animate-enter6"
            src={rectangle5}
          />

          <img
            alt="rectangle pic"
            anima-src={rectangle5}
            className="rectanglecopy6 anima-animate-enter7"
            src={rectangle5}
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
          <img
            alt="rectangle Pic"
            anima-src={rectangle11}
            className="rectanglecopy11"
            src={rectangle11}
          />

          <div className="welcomeback">Welcome Back</div>
          <div className="rectangle2"></div>
          <div className="rectanglecopy10"></div>

        <form>
            <input className="username"></input>
            <input className="password"></input>
            <input className="login1 anima-smart-layers-pointers "></input>
        </form>

          <Link to="/">
            <div className="grouped">Grouped</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
//export default LoginPage;
