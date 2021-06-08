import React, { Component } from "react";

import "./ShoppingCart.css";

export default class ShoppingCart extends Component {
  render() {
    return (
      <div className="body mt-5">
        <div id="card" class="card">
          <div id="row" class="row">
            <div class="col-md-8 cart">
              <div class="title">
                <div id="row" class="row">
                  <div class="col">
                    <h4>
                      <b>Shopping Cart</b>
                    </h4>
                  </div>
                  <div
                    id="col"
                    class="col align-self-center text-right text-muted"
                  >
                    3 items
                  </div>
                </div>
              </div>
              <div id="col row" class="row border-top border-bottom">
                <div id="row" class="row main align-items-center">
                  <div id="col" class="col-2"></div>
                  <div id="col" class="col">
                    <div id="row" class="row text-muted">
                      Shirt
                    </div>
                    <div id="row" class="row">
                      Cotton T-shirt
                    </div>
                  </div>
                  <div id="col" class="col">
                    <a href="#">-</a>
                    <a href="#" class="border">
                      1
                    </a>
                    <a href="#">+</a>
                  </div>
                  <div id="col" class="col">
                    &euro; 44.00 <span class="close">&#10005;</span>
                  </div>
                </div>
              </div>
              <div id="row" class="row">
                <div id="row" class="row main align-items-center">
                  <div id="col" class="col-2"></div>
                  <div id="col" class="col">
                    <div id="row" class="row text-muted">
                      Shirt
                    </div>
                    <div id="row" class="row">
                      Cotton T-shirt
                    </div>
                  </div>
                  <div id="col" class="col">
                    <a href="#">-</a>
                    <a href="#" class="border">
                      1
                    </a>
                    <a href="#">+</a>
                  </div>
                  <div id="col" class="col">
                    &euro; 44.00 <span class="close">&#10005;</span>
                  </div>
                </div>
              </div>
              <div id="row" class="row border-top border-bottom">
                <div id="row" class="row main align-items-center">
                  <div id="col" class="col-2"></div>
                  <div id="col" class="col">
                    <div id="row" class="row text-muted">
                      Shirt
                    </div>
                    <div id="row" class="row">
                      Cotton T-shirt
                    </div>
                  </div>
                  <div id="col" class="col">
                    <a href="#">-</a>
                    <a href="#" class="border">
                      1
                    </a>
                    <a href="#">+</a>
                  </div>
                  <div id="col" class="col">
                    &euro; 44.00 <span class="close">&#10005;</span>
                  </div>
                </div>
              </div>
              <div class="back-to-shop">
                <a href="#">&larr;</a>
                <span class="text-muted">Back to shop</span>
              </div>
            </div>
            <div class="col-md-4 summary">
              <div>
                <h5 id="h5">
                  <b>Summary</b>
                </h5>
              </div>
              <hr />
              <div class="row">
                <div id="col" class="col" style={{ paddingLeft: 0 }}>
                  ITEMS 3
                </div>
                <div id="col" class="col text-right">
                  &euro; 132.00
                </div>
              </div>
              <form>
                <p>SHIPPING</p>
                <select id="select">
                  <option class="text-muted">
                    Standard-Delivery- &euro;5.00
                  </option>
                </select>
                <p>GIVE CODE</p>
                <input
                  id="code"
                  className="inputClass"
                  placeholder="Enter your code"
                ></input>
              </form>
              <div
                id="row"
                class="row"
                style={{
                  borderTop: "px solid rgba(0,0,0,.1)",
                  padding: "2vh 0",
                }}
              >
                <div id="col" class="col">
                  TOTAL PRICE
                </div>
                <div id="col" class="col text-right">
                  &euro; 137.00
                </div>
              </div>
              <button id="btn" class="btn">
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
