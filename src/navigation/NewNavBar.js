import React, { Component } from "react";
import { connect } from "react-redux";

import { getUser, logout } from "../actions/userAction";

export class NewNavBar extends Component {
  render() {
    return <div>New Navigation</div>;
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {
  getUser,
  logout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewNavBar);
