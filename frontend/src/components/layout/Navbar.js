import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <Link to="/">
              <span className="navbar-brand">FoodStuff</span>
            </Link>
          </div>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <Link to="/login">
                <span>Login</span>
              </Link>
            </li>
            <li>
              <Link to="/register">
                <span>Register</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
