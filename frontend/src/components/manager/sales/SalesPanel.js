import React, { Fragment, useEffect } from "react";
import Sidebar from "../Sidebar";
import SalesList from "./SalesList";

export default function SalesPanel() {
  useEffect(() => {
    document.getElementById("sideSales").classList.add("active");
  });
  return (
    <Fragment>
      <Sidebar />
      <div className="container">
        <SalesList />
      </div>
    </Fragment>
  );
}
