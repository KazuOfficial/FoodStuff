import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./common/PrivateRoute";

import { Provider } from "react-redux";
import store from "../store";
import { loadProducts } from "../actions/product";

import ManagerPanel from "./manager/ManagerPanel";

import Header from "./layout/Header";
import Dashboard from "./main/Dashboard";
import Footer from "./layout/Footer";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadProducts());
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Header />
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/manager" component={ManagerPanel} />
            </Switch>
            <Footer />
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
