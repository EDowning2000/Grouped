import  React from 'react';
import API from '../utils/Api';

export default class MyForm extends React.Component {

    state = {
        events: ['']
    }
    
    
    componentDidMount() {
    
    
// setter = (event) => {
//     this.setState = ({
//         events:
//     })
// }

    API.getEvents()
    .then(
        res => {
            console.log('hit')
            console.log(res)
            this.setState({events: res})
        }
    )
}
render(){ 
return(
    <>
    <div>testing</div>
    <ul>
        {this.state.events.map(event => <li key= {event.id}>{event.host}</li>)}
    </ul>
    </>
)
}
}
// const Event = () => {
//     return <div>Hi</div>
// } 
    
