import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
  };
  render() {
    const { cart } = this.props.cart;
    const { isAuthenticated } = this.props.auth;
    const authLinks = (
      <Link className="navbar-brand justify-content-end" to="/manager">
        Manager
      </Link>
    );
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            FoodStuff
          </Link>
          <Link className="navbar-brand justify-content-end" to="/cart">
            🛒
            <span className="badge bg-warning text-dark">
              {cart != 0 && cart.length}
            </span>
          </Link>
          {isAuthenticated ? authLinks : null}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  auth: state.auth,
});

export default connect(mapStateToProps)(Header);
