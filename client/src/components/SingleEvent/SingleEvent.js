import React, {useParams , Component}  from 'react';
import API from '../../utils/API'
import './style.scss'
import rectangle1 from "../../Images/HomePageImg/home-rectangle-1@2x.png";
import rectangle6 from "../../Images/HomePageImg/home-rectangle-copy-6.png";
import rectangle7 from "../../Images/HomePageImg/home-rectangle-copy-7@2x.png";
import rectangle8 from "../../Images/HomePageImg/home-rectangle-copy-8@2x.png";
import rectangle9 from "../../Images/HomePageImg/home-rectangle-copy-9@2x.png";
import rectangle13 from "../../Images/HomePageImg/home-rectangle-copy-13@2x.png";
import rectangle14 from "../../Images/HomePageImg/home-rectangle-copy@2x.png";
import rectangle15 from "../../Images/HomePageImg/home-rectangle@2x.png";


export default class SingleEvent extends Component{
constructor(props) {
    super(props)
    this.state = {
        singleEvent: {}
    }
}
componentDidMount() {
    let {id} = this.props.match.params;
    this.receiveEvent(id);
}


receiveEvent = (id) => {
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
    let event = this.state.singleEvent;
    return(
        <div class="jumbotron">
              <h1 class="display-4">{event.name}</h1>
              <h2>A little about our event !</h2>
              <h2>{event.description}</h2>
              <h2>Where you can find us :</h2>
              <h3>Address:</h3>
              <h3>{event.address}</h3>
              <h3>Zipcode:</h3>
              <h2>{event.zipCode}</h2>
              <h2>When!?</h2>
              <h2>{event.date}</h2>
              <h2>Our guest limit is {event.maxGuests}</h2>
              <h2>Host:</h2>
              <h2>{event.host}</h2>
        
            </div>
    )
}
}