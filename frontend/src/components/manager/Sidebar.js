import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Sidebar extends Component {
  render() {
    return (
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark vh-100 position-absolute"
        style={{ width: "280px" }}
      >
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg className="bi me-2" width="40" height="32"></svg>
          <span className="fs-4">Foodstuff</span>
        </Link>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to="/manager" className="nav-link active" aria-current="page">
              <svg className="bi me-2" width="16" height="16"></svg>
              Products
            </Link>
          </li>
          <li>
            <Link to="/manager/sales" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16"></svg>
              Sales
            </Link>
          </li>
          <li>
            <Link to="/manager/users" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16"></svg>
              Users
            </Link>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <Link
            to="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://avatars.githubusercontent.com/u/40916869?v=4"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            ></img>
            <strong>Kazu</strong>
          </Link>
          <ul
            className="dropdown-menu dropdown-menu-dark text-small shadow"
            aria-labelledby="dropdownUser1"
          >
            <li>
              <Link className="dropdown-item" to="#">
                Profile
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Sign out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
