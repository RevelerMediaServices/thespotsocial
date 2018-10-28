import React, { Component } from "react";
import { connect } from "react-redux";

import styled from "styled-components";

import { Collapse, Button } from "reactstrap";

import SpotList from "./SpotList";

const SpotComponentWrapper = styled.div`
  #spotComponentCollapseButton {
  }
`;

export class index extends Component {
  render() {
    return (
      <SpotComponentWrapper id="spotComponentWrapper">
        <SpotList />
      </SpotComponentWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
