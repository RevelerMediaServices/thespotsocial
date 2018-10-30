import React, { Component } from "react";
import { connect } from "react-redux";

import { withRouter } from "react-router-dom";
import { getUser } from "../actions/userAction";
import { getComments } from "../actions/commentsAction";
import { getSpots } from "../actions/spotAction";
import { getNotes } from "../actions/notesAction";
import loadingReducer from "../reducers/loadingReducer";

export class LoadingComponent extends Component {
  componentWillMount() {
    const {
      userLoading,
      commentsLoading,
      spotsLoading,
      notesLoading
    } = this.props;
    if (userLoading === undefined) {
      this.props.getUser();
    }
    if (commentsLoading === undefined) {
      this.props.getComments();
    }
    if (spotsLoading === undefined) {
      this.props.getSpots();
    }
    if (notesLoading === undefined) {
      this.props.getNotes();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.commentsLoading === -1 &&
      nextProps.user !== null &&
      nextProps.spotsLoading &&
      nextProps.notes.Loading
    ) {
      this.props.getComments();
      this.props.getNotes();
    }
  }

  render() {
    const {
      userLoading,
      commentsLoading,
      children,
      spotsLoading,
      notesLoading
    } = this.props;
    if (
      (!userLoading && !commentsLoading && !spotsLoading && !notesLoading) ||
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
    spotsLoading: state.loading.spots,
    notesLoading: state.loading.notes
  };
};

const mapDispatchToProps = {
  getUser,
  getComments,
  getSpots,
  loadingReducer,
  getNotes
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoadingComponent)
);
