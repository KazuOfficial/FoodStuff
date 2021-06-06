import React, { Component } from "react";

export default class WelcomeImage extends Component {
  render() {
    return (
      <div>
        <img
          src="https://i.imgur.com/Cy6U2Zv.png"
          class="img-fluid w-100"
          style={{ height: 180 }}
          alt="..."
        ></img>
      </div>
    );
  }
}
