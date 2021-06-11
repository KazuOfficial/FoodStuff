import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { removeFromCart } from "../../actions/cart";
import { salePost } from "../../actions/sales";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import "../payment/StripeContainer";
import "./ShoppingCart.css";
import StripeContainer from "../payment/StripeContainer";

class ShoppingCart extends Component {
  state = {
    emailAddress: "",
  };

  static propTypes = {
    salePost: PropTypes.func.isRequired,
  };

  handleClick = (e) => {
    this.props.removeFromCart(e.target.value);
  };

  onClick = (e) => {
    const { cart, quantity, subTotal } = this.props.cart;
    var fullString = "";
    cart.map((element) => {
      fullString = fullString.concat(element.productName, ", ");
    });
    if (this.state.emailAddress != "") {
      this.props.salePost(
        fullString,
        quantity,
        this.state.emailAddress,
        subTotal + 5
      );
      e.target.classList.add("collapse");
      document.getElementById("stripeContainer").classList.remove("collapse");
      document.getElementById("emailAddress").classList.add("collapse");
    }
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { cart, subTotal } = this.props.cart;
    const { emailAddress } = this.state;
    return (
      <div className="body mt-5">
        <div id="card" className="card">
          <div id="row" className="row">
            <div className="col-md-8 cart">
              <div className="title">
                <div id="row" className="row">
                  <div className="col">
                    <h4>
                      <b>Shopping Cart</b>
                    </h4>
                  </div>
                  <div
                    id="col"
                    className="col align-self-center text-right text-muted"
                  >
                    {cart.length != 0 ? <span>{cart.length} items</span> : null}
                  </div>
                </div>
              </div>
              {cart != 0 &&
                cart.map((element, index) => {
                  return (
                    <div
                      key={index}
                      id="row"
                      className="row border-top border-bottom"
                    >
                      <div id="row" className="row main align-items-center">
                        <div id="col" className="col-2"></div>
                        <div id="col" className="col">
                          <div id="row" className="row text-muted">
                            Pizza
                          </div>
                          <div id="row" className="row">
                            {element.productName}
                          </div>
                        </div>
                        {/* <div id="col" className="col">
                          <a href="#">-</a>
                          <a href="#" className="border">
                            1
                          </a>
                          <a href="#">+</a>
                        </div> */}
                        <div id="col" className="col">
                          &pound; {element.price}
                          <button
                            value={element.productName}
                            onClick={this.handleClick}
                            className="close btn"
                          >
                            &#10005;
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              {cart.length < 1 ? (
                <h4 className="ms-3 fw-bold">CART IS EMPTY</h4>
              ) : null}
              <div className="back-to-shop">
                <Link to="/">&larr;</Link>
                <span className="text-muted">Back to shop</span>
              </div>
            </div>
            {cart.length != 0 ? (
              <div className="col-md-4 summary">
                <div>
                  <h5 id="h5">
                    <b>Summary</b>
                  </h5>
                </div>
                <hr />
                <div className="row">
                  <div id="col" className="col" style={{ paddingLeft: 0 }}>
                    {cart.length != 0 ? <span>ITEMS {cart.length}</span> : null}
                  </div>
                  <div id="col" className="col text-right">
                    <span>&pound; {subTotal.toFixed(2)}</span>
                  </div>
                </div>
                <form>
                  <p>SHIPPING</p>
                  <select id="select">
                    <option className="text-muted">
                      Standard Delivery: &pound;5.00
                    </option>
                  </select>
                  {/* <p>GIVE CODE</p>
                                  <input
                                    id="code"
                                    className="inputClass"
                                    placeholder="Enter your code"
                                  ></input> */}
                </form>
                <div
                  id="row"
                  className="row"
                  style={{
                    borderTop: "px solid rgba(0,0,0,.1)",
                    padding: "2vh 0",
                  }}
                >
                  <div id="col" className="col">
                    TOTAL PRICE
                  </div>
                  <div id="col" className="col text-right">
                    <span>&pound; {(subTotal + 5).toFixed(2)}</span>
                  </div>
                </div>
                <div id="stripeContainer" className="collapse">
                  <StripeContainer />
                </div>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email address"
                  onChange={this.onChange}
                  value={emailAddress}
                  name="emailAddress"
                  id="emailAddress"
                ></input>
                <button onClick={this.onClick} id="btn" className="btn">
                  CHECKOUT
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  subTotal: state.subTotal,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ removeFromCart, salePost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
