import React, { Fragment, useEffect } from "react";
import Sidebar from "../Sidebar";
import AddUser from "./AddUser";
import UserList from "./UserList";

export default function UserPanel() {
  useEffect(() => {
    document.getElementById("sideUsers").classList.add("active");
  });
  return (
    <Fragment>
      <Sidebar />
      <div className="container">
        <UserList />
        <AddUser />
      </div>
    </Fragment>
  );
}
