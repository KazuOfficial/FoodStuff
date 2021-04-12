import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import store from "../store";
import { Provider } from "react-redux";
//import PrivateRoute from "./common/PrivateRoute";

import Navbar from "./layout/Navbar";
import Main from "./main/Main";
import Shop from "./main/Shop";
import Login from "./accounts/Login";
import Register from "./accounts/Register";

import "./custom/bootstrap.css";
import "./App.css";

class App extends Component {
  render() {
    $(document).ready(function () {
      $("body").fadeIn(500);
    });
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Navbar />
            <div className="container">
              <Route exact path="/" component={Main} />
              <Route exact path="/shop" component={Shop} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
            </div>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
