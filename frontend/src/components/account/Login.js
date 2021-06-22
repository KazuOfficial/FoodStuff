import React, { Component } from "react";
import Header from "../layout/Header";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
import { bindActionCreators } from "redux";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.username != "" && this.state.password != "") {
      this.props.login(this.state.username, this.state.password);
    }
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/manager" />;
    }

    const { username, password } = this.state;
    const { error } = this.props.auth;
    return (
      <>
        <Header />
        {error != null ? (
          <div className="container mt-3">
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          </div>
        ) : null}
        <form onSubmit={this.onSubmit}>
          <div className="col d-flex justify-content-center">
            <div className="card mt-5 text-center" style={{ width: "30rem" }}>
              <div className="card-body">
                <h3 className="card-title">Manager Panel</h3>
                <div className="form-group mt-5">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    value={username}
                    name="username"
                    onChange={this.onChange}
                  ></input>
                </div>
                <div className="form-group mt-2">
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    value={password}
                    name="password"
                    onChange={this.onChange}
                  ></input>
                </div>
                <button type="submit" className="btn btn-primary mt-4">
                  Login
                </button>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
