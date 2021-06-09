import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import cart from "../../reducers/cart";

class Header extends Component {
  render() {
    const { cart } = this.props.cart;
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
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Header);
