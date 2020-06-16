import React, { Component } from "react";
import classnames from "classnames";
import "./style.css";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../authActions/authActions";

import rectangle1 from "../../Images/registerImg/register-rectangle-1@2x.png";
import rectangle2 from "../../Images/registerImg/register-rectangle-copy-2@2x.png";
import rectangle4 from "../../Images/registerImg/register-rectangle-copy-4@2x.png";
import rectangle6 from "../../Images/registerImg/register-rectangle-copy-6.png";
import rectangle7 from "../../Images/registerImg/register-rectangle-copy-7@2x.png";
import rectangle8 from "../../Images/registerImg/register-rectangle-copy-8@2x.png";
import rectangle9 from "../../Images/registerImg/register-rectangle-copy-9@2x.png";
import rectangle11 from "../../Images/registerImg/register-rectangle-copy-11.png";
import rectangle13 from "../../Images/registerImg/register-rectangle-copy-13@2x.png";

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

class RegisterPage extends Component() {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) this.props.history.push("/dashboard");
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) this.props.history.push("/dashboard");

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };

    // console.log(newUser);
    this.props.registerUser(newUser, this.props.history);
  };
  render() {
    // <div style={firstDivStyle}>
    //   <input id="anPageName" name="page" type="hidden" value="register" />
    //   <div className="register anima-word-break ">
    //     <div style={startStyle}>
    //       <img
    //         alt="rectangle pic"
    //         anima-src={rectangle4}
    //         className="rectangle anima-animate-enter"
    //         src={rectangle4}
    //       />

    //       <img
    //         alt="rectangle pic"
    //         anima-src={rectangle2}
    //         className="rectanglecopy anima-animate-enter1"
    //         src={rectangle2}
    //       />

    //       <img
    //         alt="rectangle pic"
    //         anima-src={rectangle2}
    //         className="rectanglecopy2 anima-animate-enter2"
    //         src={rectangle2}
    //       />

    //       <img
    //         alt="rectangle pic"
    //         anima-src={rectangle4}
    //         className="rectanglecopy3"
    //         src={rectangle4}
    //       />

    //       <img
    //         alt="rectangle pic"
    //         anima-src={rectangle4}
    //         className="rectanglecopy4"
    //         src={rectangle4}
    //       />

    //       <img
    //         alt="rectangle pic"
    //         anima-src={rectangle1}
    //         className="rectangle1 anima-animate-enter3"
    //         src={rectangle1}
    //       />

    //       <img
    //         alt="rectangle pic"
    //         anima-src={rectangle8}
    //         className="rectanglecopy8 anima-animate-enter4"
    //         src={rectangle8}
    //       />

    //       <img
    //         alt="rectangle pic"
    //         anima-src={rectangle9}
    //         className="rectanglecopy9 anima-animate-enter5"
    //         src={rectangle9}
    //       />

    //       <img
    //         alt="rectangle pic"
    //         anima-src={rectangle4}
    //         className="rectanglecopy5 anima-animate-enter6"
    //         src={rectangle4}
    //       />

    //       <img
    //         alt="rectangle pic"
    //         anima-src={rectangle6}
    //         className="rectanglecopy6 anima-animate-enter7"
    //         src={rectangle6}
    //       />

    //       <img
    //         alt="rectangle pic"
    //         anima-src={rectangle13}
    //         className="rectanglecopy13 anima-animate-enter8"
    //         src={rectangle13}
    //       />

    //       <img
    //         alt="rectangle pic"
    //         anima-src={rectangle7}
    //         className="rectanglecopy7 anima-animate-enter9"
    //         src={rectangle7}
    //       />

    //       <div className="joinus">Join Us</div>
    //       <div className="rectangle2"></div>
    //       <div className="rectanglecopy10"></div>
    //       <img
    //         alt="rectangle pic"
    //         anima-src={rectangle11}
    //         className="rectanglecopy11"
    //         src={rectangle11}
    //       />

    //       <div className="username">username</div>
    //       <div className="password">password</div>
    //       <div className="join anima-smart-layers-pointers ">join</div>
    //       <Link to="/">
    //         <div className="grouped">Grouped</div>
    //       </Link>
    //       <div className="rectanglecopy101"></div>
    //       <div className="confirmpassword">confirm password</div>
    //     </div>
    //   </div>
    // </div>
    const { errors } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Register</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  name="name"
                  type="text"
                  className={classnames("", { invalid: errors.name })}
                />
                <label htmlFor="name">Name</label>
                <span className="red-text">{errors.name}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  name="email"
                  type="email"
                  className={classnames("", { invalid: errors.email })}
                />
                <label htmlFor="email">Email</label>
                <span className="red-text">{errors.email}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  name="password"
                  type="password"
                  className={classnames("", { invalid: errors.password })}
                />
                <label htmlFor="password">Password</label>
                <span className="red-text">{errors.password}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  name="password2"
                  type="password"
                  className={classnames("", { invalid: errors.password2 })}
                />
                <label htmlFor="password2">Confirm Password</label>
                <span className="red-text">{errors.password2}</span>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                  }}
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(
  withRouter(RegisterPage)
);
