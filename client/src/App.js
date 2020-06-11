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
import Wrapper from "./components/Wrapper/Wrapper";

function App() {
  return (
        <Router>
          <Switch>
            <Route path="/" component={LandingPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/home" component={HomePage} />
            <Route path="/user" component={UserProfilePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/create" component={CreateEventPage} />
            <Route path="/search" component={SearchEventPage} />
          </Switch>
        </Router>
      
  );
};

export default App;
