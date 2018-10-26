import { Redirect } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser, logout } from "../../actions/userAction";

export class AuthenticatedComponent extends Component {
  render() {
    return (
      <ul className="">
        <li>
          {this.props.user ? (
            <div>
              <div>{this.props.children}</div>
            </div>
          ) : (
            <div>
              <Redirect className="" to="/login" />
            </div>
          )}
        </li>
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  getUser,
  logout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthenticatedComponent);
