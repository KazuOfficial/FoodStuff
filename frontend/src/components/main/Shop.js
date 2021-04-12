import React, { Component } from "react";

export default class Shop extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <hr />
        <div id="foodmenu" className="col-lg-12 col-xs-12">
          <div className="list-group">
            <h4>Pizzas</h4>
            <br />
            <button
              type="button"
              className="list-group-item list-group-item-action circle"
            >
              <span className="badge badge-primary badge">$20</span>
              Pizza Attack On Titan
              <br />
              <small>Levi my love</small>
            </button>
            <br />
            <button
              type="button"
              className="list-group-item list-group-item-action circle"
            >
              <span className="badge badge-primary badge">$20</span>
              Pizza Tokyo Ghoul
              <br />
              <small>Kaneki ur a cool guy</small>
            </button>
            <br />
            <button
              type="button"
              className="list-group-item list-group-item-action circle"
            >
              <span className="badge badge-primary badge">$20</span>
              Pizza Sword Art Online
              <br />
              <small>Asuna ur beautiful!</small>
            </button>
            <br />
          </div>
        </div>
      </div>
    );
  }
}
