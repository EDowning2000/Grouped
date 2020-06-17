import 'react-dates/initialize';
import React from "react";
import "./style.css";
import API from "../../utils/API"
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import Header from '../Header/Header';
// import { Link } from "react-router-dom";

// import rectangle1 from "../../Images/CreateEventImg/create-event-rectangle-1@2x.png";
// import rectangle2 from "../../Images/CreateEventImg/create-event-rectangle-2@2x.png";
// import rectangle0 from "../../Images/CreateEventImg/create-event-rectangle-copy-2@2x.png";
// import rectangle3 from "../../Images/CreateEventImg/create-event-rectangle-copy-3@2x.png";
// import rectangle6 from "../../Images/CreateEventImg/create-event-rectangle-copy-6.png";
// import rectangle7 from "../../Images/CreateEventImg/create-event-rectangle-copy-7@2x.png";
// import rectangle8 from "../../Images/CreateEventImg/create-event-rectangle-copy-8@2x.png";
// import rectangle9 from "../../Images/CreateEventImg/create-event-rectangle-copy-9@2x.png";
// import rectangle13 from "../../Images/CreateEventImg/create-event-rectangle-copy-13@2x.png";
// import rectangle14 from "../../Images/CreateEventImg/create-event-rectangle-copy@2x.png";


export default class CreateEventPage extends React.Component {

  state = {
    eventName: '',
    eventHost: '',
    address: '',
    zipCode: '',
    maxGuests: '',
    description: '',
    date: '',
    time: ''
  }


  handleSubmit = (e) => {
    e.preventDefault();
    console.log('hit')
    API.saveEvent(this.state).then(res => {
      console.log(res)
    }).catch(err => console.log(err));
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {

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
    // const groupedLogo = {
    //   position: "absolute"

    // }

    const formStyle = {
      color: 'white'
    };

    return (

      <div style={firstDivStyle}>
        <Header></Header>
        <input id="anPageName" name="page" type="hidden" value="createevent" />
        <div className="createevent anima-word-break ">
          <div style={startStyle}>



            {/* <div className="grouped">Grouped</div>

            <Link to="/home">
              <div className="home1 anima-smart-layers-pointers ">Home</div>
            </Link>

            <Link to="/user">
              <div className="profile anima-smart-layers-pointers ">Profile</div>
            </Link>

            <Link to="/about">
              <div className="about1 anima-smart-layers-pointers ">About</div>
            </Link> */}

            <div className="wrapper">

              <form>


                <div style={formStyle} className="form-group">
                  <label htmlFor="eventHost">What is the name of the event host?</label>
                  <input onChange={this.handleChange} type="text" className="form-control" name="eventHost" value={this.state.host}></input>
                </div>
                <div style={formStyle} className="form-group">
                  <label htmlFor="eventName">What is the name of the event?</label>
                  <input onChange={this.handleChange} type="text" className="form-control" name="eventName" value={this.state.title}></input>
                </div>
                <div style={formStyle} className="form-group">
                  <label htmlFor="eventAddress">What is address of the event?</label>
                  <input onChange={this.handleChange} type="text" className="form-control" name="address" value={this.state.address}></input>
                </div>
                <div style={formStyle} className="form-group">
                  <label htmlFor="eventZip">What is the zipcode of the event?</label>
                  <input onChange={this.handleChange} type="number" className="form-control" name="zipCode" value={this.state.zip}></input>
                </div>

                <div style={formStyle} className="form-group">
                  <label htmlFor="eventGuests">What is the maximum number of guests for the event?</label>
                  <input onChange={this.handleChange} type="number" className="form-control" name="maxGuests" value={this.state.maxGuests}></input>
                </div>
                <div style={formStyle} className="form-group">
                  <label htmlFor="description">What is a description of the event?</label>
                  <input onChange={this.handleChange} type="text" className="form-control" name="description" value={this.state.description}></input>
                </div>
                <div style={formStyle} className="form-group">
                  <label htmlFor="eventDate">What date will the event be held?</label>
                  <br></br>
                  <SingleDatePicker
                    date={this.state.date}
                    onDateChange={date => this.setState({ date: date })}
                    focused={this.state.focused}
                    onFocusChange={({ focused }) => this.setState({ focused })}
                  /></div>
                <button type="button" onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
              </form>
            </div>

            {/* <div className="eventname">Event Name:</div>
           <div className="eventhost">Event Host:</div>
           <div className="maximumguests">Maximum Guests:</div>
           <div className="description">Description:</div>
           <div className="zipcode">Zip Code:</div>
           <div className="mmddyyyy">MM/DD/YYYY:</div>
           <div className="time">Time:</div> */}
            {/* <img
             alt="rectangle pic"
             anima-src={rectangle2}
             className="rectangle2"
             src={rectangle2}
           /> */}
            {/* <div className="create anima-smart-layers-pointers">Create</div> */}
          </div>
        </div>
      </div>
    );
  }
}
//  export default CreateEventPage;
