import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Events from './pages/Events';
import PostEvents from './pages/PostEvents';
import './App.css';

function App() {


  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={['/']}>
            {/* <Home /> */}
          </Route>
          <Route exact path={['/events']}>
            <Events />
          </Route>
          <Route exact path={ ['/event/create']}>
            <PostEvents />
          </Route>





        </Switch>
      </Router>
    </div>
  );
}

export default App;