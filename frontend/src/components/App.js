import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";

import Header from "./layout/Header";
import Dashboard from "./main/Dashboard";
import Footer from "./layout/Footer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Header />
            <Route exact path="/" component={Dashboard} />
            <Footer />
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
