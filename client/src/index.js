import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import CreateEventPage from './components/CreateEventPage/CreateEventPage';
import LandingPage from './components/LandingPage/LandingPage';
import SearchEventPage from './components/SearchEventPage/SearchEventPage';
import UserProfilePage from './components/UserProfilePage/UserProfilePage'

ReactDOM.render(
  <React.StrictMode>
<BrowserRouter>
  <Route path ='/' component={App}/>
  <Route path ='/login' component={LoginPage}/>
  <Route path ='/register' component={RegisterPage}/>
  <Route path ='/home' component={HomePage}/>
  <Route path ='/user' component={UserProfilePage}/>
  <Route path ='/landingPage' component={LandingPage}/>
  <Route path ='/about' component={AboutPage}/>
  <Route path ='/create' component={CreateEventPage}/>
  <Route path ='/search' component={SearchEventPage}/>
</BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);


