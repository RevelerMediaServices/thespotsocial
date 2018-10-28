import React, { Component } from "react";
import { connect } from "react-redux";

import { withRouter } from "react-router-dom";
import { getUser } from "../actions/userAction";
import { getComments } from "../actions/commentsAction";
import { getSpots } from "../actions/spotAction";
import loadingReducer from "../reducers/loadingReducer";

export class LoadingComponent extends Component {
  componentWillMount() {
    const { userLoading, commentsLoading, spotsLoading } = this.props;
    if (userLoading === undefined) {
      this.props.getUser();
    }
    if (commentsLoading === undefined) {
      this.props.getComments();
    }
    if (spotsLoading === undefined) {
      this.props.getSpots();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.commentsLoading === -1 &&
      nextProps.user !== null &&
      nextProps.spotsLoading
    ) {
      this.props.getComments();
    }
  }

  render() {
    const { userLoading, commentsLoading, children, spotsLoading } = this.props;
    if (
      (!userLoading && !commentsLoading && !spotsLoading) ||
      this.props.user === null
    ) {
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
    commentsLoading: state.loading.comments,
    spotsLoading: state.loading.spots
  };
};

const mapDispatchToProps = {
  getUser,
  getComments,
  getSpots,
  loadingReducer
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoadingComponent)
);
