import React, { Component } from "react";
import Header from "../layout/Header";
import { Link } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <form>
        <Header />
        <div className="col d-flex justify-content-center">
          <div class="card mt-5 text-center" style={{ width: "30rem" }}>
            <div class="card-body">
              <h3 class="card-title">Manager Panel</h3>
              <div class="form-group mt-5">
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                ></input>
              </div>
              <div class="form-group mt-2">
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                ></input>
              </div>
              <Link to="#" class="btn btn-primary mt-4">
                Login
              </Link>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
