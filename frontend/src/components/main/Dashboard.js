import React, { Fragment } from "react";
import WelcomeImage from "./WelcomeImage";
import Card from "./Card";
import Footer from "../layout/Footer";

import Header from "../layout/Header";

export default function Dashboard() {
  return (
    <Fragment>
      <Header />
      <WelcomeImage />
      <div className="container">
        <hr />
        <Card />
        <Footer />
      </div>
    </Fragment>
  );
}
