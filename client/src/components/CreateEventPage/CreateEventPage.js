import React , {Component, useRef}from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import "react-dates/initialize";
import API from "../../utils/API";
import { SingleDatePicker } from "react-dates";
import Header from '../Header/Header';
import "react-dates/lib/css/_datepicker.css";

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


class CreateEventPage extends Component {
    //imageUploader = useRef(null)
   // uploadedImage = useRef(null)
  
    state = {
    eventName: "",
    eventHost: "",
    address: "",
    zipCode: "",
    maxGuests: "",
    description: "",
    date: "",
    time: "",
    picRef: this.uploadedImage

  };


  handleSubmit = (e) => {
    e.preventDefault();
    console.log("hit");
    API.saveEvent(this.state)
      .then((res) => {
        console.log(res);
        document.getElementById('evtForm').reset();
      })
      .catch((err) => console.log(err));
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  
  handleImgUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      console.log(file)
      const reader = new FileReader();
      const {current} = this.uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result
      }
      reader.readAsDataURL(file)
    }
  }
  render() {
    return (
      <div style={firstDivStyle}>
        <Header></Header>
        <input id="anPageName" name="page" type="hidden" value="createevent" />
        <div className="createevent anima-word-break ">
          <div style={startStyle}>
          
            {/* <div className="grouped">Grouped</div> */}

            {/* <Link to="/home">
              <div className="home1 anima-smart-layers-pointers ">Home</div>
            </Link>

            <Link to="/user">
              <div className="profile anima-smart-layers-pointers ">
                Profile
              </div>
            </Link>

            <Link to="/about">
              <div className="about1 anima-smart-layers-pointers ">About</div>
            </Link> */}

            <div className="wrapper">
<<<<<<< HEAD
              <form className="evtForm">
                <div style={formStyle} className="form-group">
=======
              
              <form>
                <div className="one  form-group">
>>>>>>> 399078085d9f2918bd8f5505f6e211b80e12f682
                  <label htmlFor="eventHost">
                    {/* Event Host Name */}
                  </label>
                  <input
                    onChange={this.handleChange}
                    type="text"
                    className="form-control formStyle"
                    name="eventHost"
                    value={this.state.host}
                    placeholder="Host Name"
                  ></input>
                </div>
                
                <div className="two form-group">
                  <label htmlFor="eventName">
                    {/* Event Name */}
                  </label>
                  <input
                    onChange={this.handleChange}
                    type="text"
                    className="form-control formStyle"
                    name="eventName"
                    value={this.state.title}
                    placeholder="Event Name"
                  ></input>
                </div>
                <div className="three form-group">
                  <label htmlFor="eventAddress">
                    {/* Event Address */}
                  </label>
                  <input
                    onChange={this.handleChange}
                    type="text"
                    className="form-control formStyle"
                    name="address"
                    value={this.state.address}
                    placeholder="Address"
                  ></input>
                </div>
                <div className="four form-group">
                  <label htmlFor="eventZip">
                    {/* Event Zip code */}
                  </label>
                  <input
                    onChange={this.handleChange}
                    type="text"
                    className="form-control formStyle"
                    name="zipCode"
                    value={this.state.zip}
                    placeholder="zip code"
                  ></input>
                </div>

                <div className="five form-group">
                  <label htmlFor="eventGuests">
                    {/* Maximum Guests */}
                  </label>
                  <input
                    onChange={this.handleChange}
                    type="text"
                    className="form-control formStyle"
                    name="maxGuests"
                    value={this.state.maxGuests}
                    placeholder="max guests"
                  ></input>
                </div>
                <div className="six form-group">
                  <label htmlFor="description">
                    {/* Event Description */}
                  </label>
                  <input
                    onChange={this.handleChange}
                    type="text"
                    className="form-control formStyle"
                    name="description"
                    value={this.state.description}
                    placeholder="description"
                  ></input>
                </div>
                <div className="seven form-group">
                  <label htmlFor="eventDate">
                    
                  </label>
                  <br></br>
                  <SingleDatePicker
                    date={this.state.date}
                    onDateChange={(date) => this.setState({ date: date })}
                    focused={this.state.focused}
                    onFocusChange={({ focused }) => this.setState({ focused })}
                    className="formStyle"
                  />
                </div>
<<<<<<< HEAD
                <div style={formStyle} className = 'form-group'>
                <label htmlFor='eventImg'>
                  Add event Image here 
                
                </label>
                <input type= 'file' accept='image/*' multiple='false'
                onChange={this.handleImgUpload} ref = {this.imageUploader}
                style={{
                  display: "none"
                }}>

                </input>
                </div>
                <Link to= '/'><button
=======
                
                <button
>>>>>>> 399078085d9f2918bd8f5505f6e211b80e12f682
                  type="button"
                  onClick={this.handleSubmit}
                  className="create anima-smart-layers-pointers"
                  
                >
<<<<<<< HEAD
                  Submit
                </button></Link>
=======
                  Create
                </button>
>>>>>>> 399078085d9f2918bd8f5505f6e211b80e12f682
              </form>
            </div>

            {/* <div className="eventname">Event Name:</div>
          <div className="eventhost">Event Host:</div>
          <div className="maximumguests">Maximum Guests:</div>
          <div className="description">Description:</div>
          <div className="zipcode">Zip Code:</div>
          <div className="mmddyyyy">MM/DD/YYYY:</div>
          <div className="time">Time:</div> */}
<<<<<<< HEAD
            {/* <div className="create anima-smart-layers-pointers">Create</div> */}
=======
            <img
              alt="rectangle pic"
              anima-src={rectangle2}
              className="rectangle2"
              src={rectangle2}
            />
            
>>>>>>> 399078085d9f2918bd8f5505f6e211b80e12f682
          </div>
        </div>
      </div>
    );
  }
}
<<<<<<< HEAD
export default CreateEventPage;
=======
>>>>>>> 399078085d9f2918bd8f5505f6e211b80e12f682
