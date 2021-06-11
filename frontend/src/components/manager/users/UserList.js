import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadUsers } from "../../../actions/user";
import { bindActionCreators } from "redux";

class UserList extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    loadUsers: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.loadUsers(this.props.auth.access_Token);
  }

  render() {
    const { userList } = this.props.user;
    return (
      <div className="table-responsive">
        <table className="table table-striped mt-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Email</th>
              {/* <th scope="col">Roles</th> */}
            </tr>
          </thead>
          <tbody>
            {userList &&
              userList.map(function (element, count) {
                count++;
                return (
                  <tr key={count}>
                    <th scope="row">{count}</th>
                    <td>{element.email}</td>
                    {/* <td>{element.roles}</td> */}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  auth: state.auth,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadUsers }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
