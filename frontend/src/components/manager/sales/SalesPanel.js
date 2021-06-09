import React, { Fragment } from "react";
import Sidebar from "../Sidebar";
import SalesList from "./SalesList";

export default function SalesPanel() {
  return (
    <Fragment>
      <Sidebar />
      <div className="container">
        <SalesList />
      </div>
    </Fragment>
  );
}
