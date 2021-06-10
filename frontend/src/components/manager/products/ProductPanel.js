import React, { Fragment, useEffect } from "react";
import AddProduct from "./AddProduct";
import ProductList from "./ProductList";
import RemoveProduct from "./RemoveProduct";
import Sidebar from "../Sidebar";

export default function ProductPanel() {
  useEffect(() => {
    document.getElementById("sideProducts").classList.add("active");
  });
  return (
    <Fragment>
      <Sidebar />
      <div className="container">
        <ProductList />
        <AddProduct />
        <RemoveProduct />
      </div>
    </Fragment>
  );
}
