import React from "react";
import "./style.css";
import Bubbles from '../Bubbles/Bubbles';
import { Link } from "react-router-dom";
import API from '../../utils/API';
import Header from '../Header/Header'
// import rectangle1 from "../../Images/SearchEventImg/search-event-rectangle-1@2x.png";
// import rectangle2 from "../../Images/SearchEventImg/search-event-rectangle-2@2x.png";
// import rectangle0 from "../../Images/SearchEventImg/search-event-rectangle-copy-2@2x.png";
// import rectangle5 from "../../Images/SearchEventImg/search-event-rectangle-copy-5@2x.png";
// import rectangle6 from "../../Images/SearchEventImg/search-event-rectangle-copy-6.png";
// import rectangle7 from "../../Images/SearchEventImg/search-event-rectangle-copy-7@2x.png";
// import rectangle8 from "../../Images/SearchEventImg/search-event-rectangle-copy-8@2x.png";
// import rectangle9 from "../../Images/SearchEventImg/search-event-rectangle-copy-9@2x.png";
// import rectangle13 from "../../Images/SearchEventImg/search-event-rectangle-copy-13@2x.png";
// import rectangle14 from "../../Images/SearchEventImg/search-event-rectangle-copy@2x.png";

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
const cardStyle = {
  width: "200px",
  //flex: "right",
  margin: "5px",
  padding: "2px"
}


// handlePost = event => {

//     this.setState({eventbyPost: PostForm})
// }



// return(
//     <>
//     <div>testing</div>
//     <ul>
//         {this.state.events.map(event => <li key= {event.id}>{event.host}</li>)}
//     </ul>
//     </>
// )





export default class SearchEventPage extends React.Component {
  componentDidMount() {
    API.getEvents()
      .then(
        res => {
          // console.log('hit')
          // console.log(res)

          let data = res.data
          console.log(data)
          const eventInfo = data.map(event => {
            let name = event.eventName;
            let date = event.date;
            let host = event.eventHost;
            let description = event.description;
            let guests = event.maxGuests;
            let zip = event.zipCode;
            let id = event._id;
            console.log(name, host, date, description, guests)
            return { name, date, host, description, guests, zip, id }
          })
          this.setState({ events: eventInfo })
          //this.handleInfo(eventInfo);
        }
      ).catch(err => console.log(err));

  }
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    singleEvent: []
    }
  }
  // state = {
    
  // }
  // showEvent = (singleEvent) => {
  //   return (
  //     <div class="jumbotron">
  //             <h1 class="display-4">{singleEvent.name}</h1>
  //             <h2>{singleEvent.host}</h2>
  //             <hr class="my-4"></hr>

  //             <p class="lead">
  //               <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  //             </p>
  //           </div>
  //   )
  // }
  // handleInfo = (eventInfo) => {
  //  console.log(eventInfo)
  handleEvent = (id) => {
    console.log(id)
    API.getEvent(id).then(
      res => {
        let data = res.data;
        this.setState({ singleEvent: data })
      }
    )
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div style={firstDivStyle}>
        <Header></Header>
        <input id="anPageName" name="page" type="hidden" value="searchevent" />
        <div className="searchevent anima-word-break ">


          <div class="container">
            <div class="row">
              {
                this.state.events.map(event => {
                  return (

                    <div class="card col-sm-4" style={{ cardStyle }}>
                      <div class="card-body">
                        <h5 class="card-title">{event.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{event.host}</h6>
                        <p class="card-text">{event.description}</p>
                        <Link to = "/single"><button onClick={this.handleEvent(event.id)} class="btn btn lg">See full event!</button></Link>
                      </div>
                    </div>


                  )
                })
              }
            </div>
          </div>



          <div style={startStyle}>
            {/* <img 
            alt="rectangle pic"
            anima-src={rectangle5}
            className="rectangle anima-animate-enter"
            src={rectangle5}
          /> */}

            {/* <img
            alt="rectangle pic"
            anima-src={rectangle14}
            className="rectanglecopy anima-animate-enter1"
            src={rectangle14}
          />

          <img
            alt="rectangle pic"
            anima-src={rectangle0}
            className="rectanglecopy2 anima-animate-enter2"
            src={rectangle0}
          /> */}

            {/* <img
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
          /> */}

            {/* <img
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
          /> */}

            {/* <img
            alt="rectangle pic"
            anima-src={rectangle6}
            className="rectanglecopy6 anima-animate-enter7"
            src={rectangle6}
          /> */}

            {/* <img
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
          /> */}

            {/* <div className="grouped">Grouped</div> */}
            {/* <Link to="/home">
            <div className="home1 anima-smart-layers-pointers ">Home</div>
          </Link>
          <Link to="/user">
            <div className="profile anima-smart-layers-pointers ">Profile</div>
          </Link>
          <Link to="/about">
            <div className="about1 anima-smart-layers-pointers ">About</div>
          </Link> */}
            {/* <div className="enterzip">Enter Zip</div> */}
            {/* <img
            alt="rectangle pic"
            anima-src={rectangle2}
            className="rectangle2"
            src={rectangle2}
          /> */}

            <div className="search anima-smart-layers-pointers ">Search</div>

            {/* <div className="rectangle3"></div> */}
          </div>
        </div>
      </div>
    );
  }
}
//export default SearchEventPage;
