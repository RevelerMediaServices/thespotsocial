import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./NavBar";

import LandingPage from "../components/LandingPage";
import Login from "../components/authentication/Login";
import CommentSection from "../components/CommentSection";

export default class Main extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="mainViewer">
            <NavBar />
            <Switch>
              <Route path="/" component={LandingPage} exact={true} />
              <Route path="/login" component={Login} exact={true} />
              <Route
                path="/commentSection"
                component={CommentSection}
                exact={true}
              />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
