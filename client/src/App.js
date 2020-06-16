import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./authActions/authActions";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/AboutPage/AboutPage";
import CreateEventPage from "./components/CreateEventPage/CreateEventPage";
import LandingPage from "./components/LandingPage/LandingPage";
import SearchEventPage from "./components/SearchEventPage/SearchEventPage";
import UserProfilePage from "./components/UserProfilePage/UserProfilePage";
import PrivateRoute from './components/PrivateRoute'

if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);

  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "./login";
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/register" exact component={RegisterPage} />
            <Switch>
              
          <PrivateRoute path="/home" exact component={HomePage} />
          <PrivateRoute path="/user" exact component={UserProfilePage} />
          <PrivateRoute path="/about" exact component={AboutPage} />
          <PrivateRoute path="/create" exact component={CreateEventPage} />
          <PrivateRoute path="/search" exact component={SearchEventPage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
