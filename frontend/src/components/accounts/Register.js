import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Register extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <h2>Register</h2>
        <div className="row">
          <div className="col-md-8">
            <hr />
            <form>
              <div className="form-group">
                <div className="col-md-10">
                  <label>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    //onChange={this.onChange}
                    //value={username}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-md-10">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    //onChange={this.onChange}
                    //value={username}
                  />
                </div>
              </div>
              <br />
              <br />
              <br />
              <div className="form-group">
                <div className="col-md-10">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    //onChange={this.onChange}
                    //value={password}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-md-10">
                  <label>Confirm password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password2"
                    //onChange={this.onChange}
                    //value={password}
                  />
                </div>
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <div className="form-group">
                <div className="col-md-10">
                  <input type="submit" className="btn btn-default" />
                </div>
              </div>
            </form>
            <br />
            <br />
            <p>
              <Link to="/register">Register as a new user</Link>
            </p>
            <p>
              <Link to="/forgot">Forgot your password?</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
