import React from 'react';
import './style.scss'


export default class SingleEvent extends React.Component {
constructor(props) {
    super(props)
    
}
render(props) {
    let event = props.SingleEvent;
    return(
        <div class="jumbotron">
              <h1 class="display-4">{event.name}</h1>
              <h2>{event.host}</h2>
              <hr class="my-4"></hr>

              <p class="lead">
                <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
              </p>
            </div>
    )
}
}
© 2020 GitH