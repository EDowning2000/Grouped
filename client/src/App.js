import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/AboutPage/AboutPage";
import CreateEventPage from "./components/CreateEventPage/CreateEventPage";
import LandingPage from "./components/LandingPage/LandingPage";
import SearchEventPage from "./components/SearchEventPage/SearchEventPage";
import UserProfilePage from "./components/UserProfilePage/UserProfilePage";
import SingleEvent from "./components/SingleEvent/SingleEvent"
function App() {
  return (
        <Router>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/register" exact component={RegisterPage} />
            <Route path="/home" exact component={HomePage} />
            <Route path="/user" exact component={UserProfilePage} />
            <Route path="/about" exact component={AboutPage} />
            <Route path="/create" exact component={CreateEventPage} />
            <Route path="/search" exact component={SearchEventPage} />
            <Route path="/single" exact component={SingleEvent} />
          </Switch>
        </Router>
      
  );
};

export default App;
