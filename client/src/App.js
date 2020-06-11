import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import UserProfilePage from "./components/UserProfilePage/UserProfilePage";
import Wrapper from "./components/Wrapper/Wrapper";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <LandingPage></LandingPage>
      </Wrapper>
    </div>
  );
}

export default App;
