import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addUser } from "../../../actions/user";

class AddUser extends Component {
  state = {
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
  };

  static propTypes = {
    addUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, emailAddress, password } = this.state;
    this.props.addUser(
      firstName,
      lastName,
      emailAddress,
      password,
      this.props.auth.access_Token
    );
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { firstName, lastName, emailAddress, password } = this.state;
    return (
      <form onSubmit={this.onSubmit} className="mt-5">
        <h5>Add a user</h5>
        <div className="row">
          <div className="form-group col">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter first name"
              onChange={this.onChange}
              value={firstName}
              name="firstName"
            ></input>
          </div>
          <div className="form-group col">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter last name"
              onChange={this.onChange}
              value={lastName}
              name="lastName"
            ></input>
          </div>
          <div className="form-group col">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email address"
              onChange={this.onChange}
              value={emailAddress}
              name="emailAddress"
            ></input>
          </div>
          <div className="form-group col">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={this.onChange}
              value={password}
              name="password"
            ></input>
          </div>
        </div>
        <button type="submit" className="btn btn-success mt-2">
          Add
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  auth: state.auth,
});

export default connect(mapStateToProps, { addUser })(AddUser);
