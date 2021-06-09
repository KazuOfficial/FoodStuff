import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./common/PrivateRoute";

import { Provider } from "react-redux";
import store from "../store";
import { loadProducts } from "../actions/product";

import ProductPanel from "./manager/products/ProductPanel";

import Dashboard from "./main/Dashboard";
import SellsPanel from "./manager/sells/SellsPanel";
import UserPanel from "./manager/users/UserPanel";
import Login from "./account/Login";
import Wrapper from "./shoppingCart/Wrapper";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/manager" component={ProductPanel} />
              <Route exact path="/manager/sells" component={SellsPanel} />
              <Route exact path="/manager/users" component={UserPanel} />
              <Route exact path="/manager/login" component={Login} />
              <Route exact path="/cart" component={Wrapper} />
            </Switch>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
