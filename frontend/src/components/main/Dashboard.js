import React, { Fragment } from "react";
import WelcomeImage from "./WelcomeImage";
import Card from "./Card";

export default function Dashboard() {
  return (
    <Fragment>
      <WelcomeImage />
      <div className="container">
        <hr />
        <Card />
      </div>
    </Fragment>
  );
}
