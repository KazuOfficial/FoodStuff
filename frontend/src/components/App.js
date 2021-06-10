import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./common/PrivateRoute";

import { Provider } from "react-redux";
import store from "../store";
import { loadProducts } from "../actions/product";

import ProductPanel from "./manager/products/ProductPanel";

import Dashboard from "./main/Dashboard";
import SalesPanel from "./manager/sales/SalesPanel";
import UserPanel from "./manager/users/UserPanel";
import Login from "./account/Login";
import Wrapper from "./shoppingCart/Wrapper";
import PurchaseSuccessful from "./common/PurchaseSuccessful";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/manager" component={ProductPanel} />
              <Route exact path="/manager/sales" component={SalesPanel} />
              <Route exact path="/manager/users" component={UserPanel} />
              <Route exact path="/manager/login" component={Login} />
              <Route exact path="/cart" component={Wrapper} />
              <Route
                exact
                path="/purchasesuccessful"
                component={PurchaseSuccessful}
              />
            </Switch>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
