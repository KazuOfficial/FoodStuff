import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Sidebar extends Component {
  render() {
    return (
      <div
        class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark vh-100 position-absolute"
        style={{ width: "280px" }}
      >
        <Link
          to="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg class="bi me-2" width="40" height="32"></svg>
          <span class="fs-4">Foodstuff</span>
        </Link>
        <hr />
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <Link to="/manager" class="nav-link active" aria-current="page">
              <svg class="bi me-2" width="16" height="16"></svg>
              Products
            </Link>
          </li>
          <li>
            <Link to="/manager/sells" class="nav-link text-white">
              <svg class="bi me-2" width="16" height="16"></svg>
              Sells
            </Link>
          </li>
          <li>
            <Link to="/manager/users" class="nav-link text-white">
              <svg class="bi me-2" width="16" height="16"></svg>
              Users
            </Link>
          </li>
        </ul>
        <hr />
        <div class="dropdown">
          <Link
            to="#"
            class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://avatars.githubusercontent.com/u/40916869?v=4"
              alt=""
              width="32"
              height="32"
              class="rounded-circle me-2"
            ></img>
            <strong>Kazu</strong>
          </Link>
          <ul
            class="dropdown-menu dropdown-menu-dark text-small shadow"
            aria-labelledby="dropdownUser1"
          >
            <li>
              <Link class="dropdown-item" to="#">
                Profile
              </Link>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <Link class="dropdown-item" to="#">
                Sign out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
