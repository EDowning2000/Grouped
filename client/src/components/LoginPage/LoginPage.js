import React, { Component } from "react";
import classnames from "classnames";
import { loginUser } from "../../authActions/authActions";
import "./style.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import rectangle1 from "../../Images/loginImg/login-rectangle-1@2x.png";
import rectangle2 from "../../Images/loginImg/login-rectangle-copy-2@2x.png";
import rectangle5 from "../../Images/loginImg/login-rectangle-copy-5@2x.png";
import rectangle7 from "../../Images/loginImg/login-rectangle-copy-7@2x.png";
import rectangle8 from "../../Images/loginImg/login-rectangle-copy-8@2x.png";
import rectangle9 from "../../Images/loginImg/login-rectangle-copy-9@2x.png";
import rectangle11 from "../../Images/loginImg/login-rectangle-copy-11.png";
import rectangle13 from "../../Images/loginImg/login-rectangle-copy-13@2x.png";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }
  componentDidMount() {
    if (this.props.auth.isAuthenticated) this.props.history.push("/dashboard");
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) this.props.history.push("/dashboard");
    if (nextProps.errors) {
      this.state({
        errors: nextProps.errors,
      });
    }
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventdefault();

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData);
  };
}

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
  const { errors } = this.state;
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

          {/* <div className="welcomeback">Welcome Back</div>
          <div className="rectangle2"></div>
          <div className="rectanglecopy10"></div>

          <form>
            <input className="username"></input>
            <input className="password"></input>
            <input className="login1 anima-smart-layers-pointers "></input>
          </form>

          <Link to="/">
            <div className="grouped">Grouped</div>
          </Link> */}

<div className="container">
                <div className="row" style={{ marginTop: "4rem" }}>
                    <div className="col s8 offset-s2">
                        <Link to="/" className="btn-flat waves-effect">
                            <i className="material-icons left">keyboard_backspace</i> Back to home
                        </Link>
                        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                            <h4>
                                <b>Login</b> below
                            </h4>
                            <p className="grey-text text-darken-1">
                                Don't have an account? <Link to="/register">Register</Link>
                            </p>
                        </div>
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="input-field col s12">
                                <input onChange={this.onChange} value={this.state.email} error={errors.email} name="email" type="email" className={classnames("", { invalid: errors.email || errors.emailnotfound })} />
                                <label htmlFor="email">Email</label>
                                <span className="red-text">
                                    {errors.email}
                                    {errors.emailnotfound}
                                </span>
                            </div>
                            <div className="input-field col s12">
                                <input onChange={this.onChange} value={this.state.password} error={errors.password} name="password" type="password" className={classnames("", { invalid: errors.password || errors.passwordincorrect })} />
                                <label htmlFor="password">Password</label>
                                <span className="red-text">
                                    {errors.password}
                                    {errors.passwordincorrect}
                                </span>
                            </div>
                            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                                <button className="btn btn-large waves-effect waves-light hoverable blue accent-3" style={{
                                    width: "150px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px",
                                    marginTop: "1rem"
                                }} type="submit">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>
      </div>
    </div>
  );
}

Login.propTypes ={
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state =>({
  auth: state.auth,
  errors:state.errors
})


export default connect(mapStateToProps, { loginUser })(Login);
