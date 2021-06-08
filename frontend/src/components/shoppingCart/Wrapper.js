import React, { Fragment } from "react";
import ShoppingCart from "./ShoppingCart";

import Header from "../layout/Header";

export default function Wrapper() {
  return (
    <Fragment>
      <Header />
      <ShoppingCart />
    </Fragment>
  );
}
