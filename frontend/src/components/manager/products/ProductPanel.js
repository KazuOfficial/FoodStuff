import React, { Fragment } from "react";
import AddProduct from "./AddProduct";
import ProductList from "./ProductList";
import RemoveProduct from "./RemoveProduct";
import Sidebar from "../Sidebar";

export default function ProductPanel() {
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
