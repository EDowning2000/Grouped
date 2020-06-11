import  React from 'react';
import API from '../utils/Api';

export default class Eventdisplay extends React.Component {

    state = {
        events: ['']
    }
    
    
    componentDidMount() {
    API.getEvents()
    .then(
        res => {
            console.log('hit')
            console.log(res)
            this.setState({events: res})
        }
    )
}