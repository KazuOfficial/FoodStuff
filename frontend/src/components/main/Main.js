import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Main extends Component {
  render() {
    return (
      <div>
        <hr />
        <br />
        <br />
        <div className="text-center">
          <img src="https://i.imgur.com/fkk9DVN.png" />
        </div>

        <div className="col-lg-6 col-lg-push-3 col-md-6 col-md-push-3 col-sm-6 col-sm-push-3">
          <div className="list-group">
            <Link to="/shop" className="list-group-item list-group-item-action">
              Kazu's Restaurant
              <span className="badge badge-primary badge">10AM-8PM</span>
              <br />
              <small>Kazu's Street 17</small>
            </Link>
          </div>
          <br />
          <hr />
        </div>
      </div>
    );
  }
}
