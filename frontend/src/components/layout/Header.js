import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            FoodStuff
          </Link>
          <Link className="navbar-brand justify-content-end" to="/cart">
            🛒
          </Link>
        </div>
      </nav>
    );
  }
}
