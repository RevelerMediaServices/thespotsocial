import React, { Component } from "react";
import { connect } from "react-redux";

import styled from "styled-components";

const SpotNotesDiv = styled.div`
  .notePopUp {
    width: 50vw;
  }

  .newNoteandNotesButton {
    font-size: 1em;
    padding: 0.1em;
    margin-bottom: 0.1em;
  }

  .newNoteandNotesDiv {
    text-align: right;
  }
`;

export class SpotMarketingComponent extends Component {
  render() {
    return <SpotNotesDiv>Spot Component</SpotNotesDiv>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotMarketingComponent);
