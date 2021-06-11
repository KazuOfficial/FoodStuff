import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../actions/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Sidebar extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };

  render() {
    const { userName } = this.props.auth;
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
            <Link
              id="sideProducts"
              to="/manager"
              className="nav-link text-white"
              aria-current="page"
            >
              <svg className="bi me-2" width="16" height="16"></svg>
              Products
            </Link>
          </li>
          <li>
            <Link
              id="sideSales"
              to="/manager/sales"
              className="nav-link text-white"
            >
              <svg className="bi me-2" width="16" height="16"></svg>
              Sales
            </Link>
          </li>
          <li>
            <Link
              id="sideUsers"
              to="/manager/users"
              className="nav-link text-white"
            >
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
            <strong>{userName.slice(0, 20)}...</strong>
          </Link>
          <ul
            className="dropdown-menu dropdown-menu-dark text-small shadow"
            aria-labelledby="dropdownUser1"
          >
            <li>
              <button onClick={this.props.logout} className="dropdown-item">
                Sign out
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Sidebar);
