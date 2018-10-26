import React, { Component } from "react";
import { connect } from "react-redux";

import { withRouter } from "react-router-dom";
import { getUser } from "../actions/userAction";
import { getComments } from "../actions/commentsAction";
import loadingReducer from "../reducers/loadingReducer";

export class LoadingComponent extends Component {
  componentWillMount() {
    const { userLoading, commentsLoading } = this.props;
    if (userLoading === undefined) {
      this.props.getUser();
    }
    if (commentsLoading === undefined) {
      this.props.getComments();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.commentsLoading === -1 && nextProps.user !== null) {
      this.props.getComments();
    }
  }

  render() {
    const { userLoading, commentsLoading, children } = this.props;
    if ((!userLoading && !commentsLoading) || this.props.user === null) {
      return <div>{children}</div>;
    } else {
      return (
        <div>
          <h2>Loading...</h2>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    userLoading: state.loading.user,
    commentsLoading: state.loading.comments
  };
};

const mapDispatchToProps = {
  getUser,
  getComments,
  loadingReducer
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoadingComponent)
);
