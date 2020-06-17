import React, { Component } from "react";
import classnames from "classnames";
import "./style.scss";
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
const buttonStyle = {
  backgroundcolor: 'rgba(255, 255, 255, 0)',
  top: '583px',
  height: '51px',
  width: '326px',
  position: 'absolute',
  margin: 0,
  left: '350px',
  transform: 'rotate(0deg)',
  opacity: 1
}

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) this.props.history.push("/home");
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) this.props.history.push("/home");

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
    const { errors } = this.state;
    console.log(errors)
    console.log({errors})

    return (
      <div style={firstDivStyle}>
        <input id="anPageName" name="page" type="hidden" value="register" />
        <div className="register anima-word-break ">
          <div style={startStyle}>
            <img
              alt="rectangle pic"
              anima-src={rectangle4}
              className="rectangle anima-animate-enter"
              src={rectangle4}
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
              anima-src={rectangle4}
              className="rectanglecopy3"
              src={rectangle4}
            />

            <img
              alt="rectangle pic"
              anima-src={rectangle4}
              className="rectanglecopy4"
              src={rectangle4}
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
              anima-src={rectangle4}
              className="rectanglecopy5 anima-animate-enter6"
              src={rectangle4}
            />

            <img
              alt="rectangle pic"
              anima-src={rectangle6}
              className="rectanglecopy6 anima-animate-enter7"
              src={rectangle6}
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

            <div className="joinus">Join Us</div>

            <img
              alt="rectangle pic"
              anima-src={rectangle11}
              className="rectanglecopy11"
              src={rectangle11}
            />

            <p className="grey-text text-darken-1 alreadyhasacct">
              Already have an account? <Link to="/login">Login</Link>
            </p>

            <form noValidate onSubmit={this.onSubmit}>
              <input
                onChange={this.onChange}
                value={this.state.name}
                error={errors.name}
                name="name"
                type="text"
                placeholder="name"
                className={classnames("name", { invalid: errors.name })}
              />
              <span className="red-text">{errors.name}</span>
              <input
                onChange={this.onChange}
                value={this.state.email}
                error={errors.email}
                name="email"
                type="email"
                placeholder="email"
                className={classnames("username", { invalid: errors.email })}
              />
              <span className="red-text">{errors.email}</span>
              <input
                onChange={this.onChange}
                value={this.state.password}
                error={errors.password}
                name="password"
                type="password"
                placeholder="password"
                className={classnames("password", { invalid: errors.password })}
              />

              <span className="red-text">{errors.password}</span>
              <input
                onChange={this.onChange}
                value={this.state.password2}
                error={errors.password2}
                name="password2"
                type="password"
                placeholder="confirm password"
                className={classnames("confirmpassword", {
                  invalid: errors.password2,
                })}
              />
              <span className="red-text">{errors.password2}</span>
              <button className="join anima-smart-layers-pointers " type="submit" style={buttonStyle}>
                join
              </button>
            </form>

            <Link to="/">
              <div className="grouped">Grouped</div>
            </Link>
          </div>
        </div>
      </div>
    );
  };
};

RegisterPage.propTypes = {
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

