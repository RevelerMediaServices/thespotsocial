import { Link } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser, logout } from "../actions/userAction";

export class NavBar extends Component {
  render() {
    return (
      <div className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header container-fluid">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <div className="icon-bar" />
              <div className="icon-bar" />
              <div className="icon-bar" />
            </button>

            <Link className="navbar-brand" to="/">
              the Spot Social
            </Link>
            <Link
              className="nav-item"
              to="/spotSection"
              style={{ padding: "10px" }}
            >
              Spots
            </Link>
            <Link
              className="nav-item"
              to="/notesSection"
              style={{ padding: "10px" }}
            >
              Notes
            </Link>
            <ul className="navbar-nav nav navbar-right">
              <li>
                {this.props.user ? (
                  <div>
                    Hi {this.props.user.displayName}
                    <Link to="/logout" onClick={() => this.props.logout()}>
                      Logout
                    </Link>
                  </div>
                ) : (
                  <div>
                    <Link className="" to="/login">
                      Login
                    </Link>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
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
)(NavBar);
