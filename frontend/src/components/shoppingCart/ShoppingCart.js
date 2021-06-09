import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeFromCart } from "../../actions/cart";
import { bindActionCreators } from "redux";
import "../payment/StripeContainer";

import "./ShoppingCart.css";
import StripeContainer from "../payment/StripeContainer";

class ShoppingCart extends Component {
  handleClick = (e) => {
    this.props.removeFromCart(e.target.value);
  };

  onClick = (e) => {
    e.target.classList.add("collapse");
    document.getElementById("stripeContainer").classList.remove("collapse");
  };

  render() {
    const { cart, subTotal } = this.props.cart;
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
                        <div id="col" className="col">
                          <a href="#">-</a>
                          <a href="#" className="border">
                            1
                          </a>
                          <a href="#">+</a>
                        </div>
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
  return bindActionCreators({ removeFromCart }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
