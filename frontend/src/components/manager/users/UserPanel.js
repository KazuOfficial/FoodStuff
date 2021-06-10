import React, { Fragment } from "react";
import Sidebar from "../Sidebar";
import AddUser from "./AddUser";
import UserList from "./UserList";

export default function UserPanel() {
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
