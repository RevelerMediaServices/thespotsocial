import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { getSpots } from "../../actions/spotAction";

import styled from "styled-components";

import { Container } from "reactstrap";

import { SpotComponent } from "./SpotComponent";

const SpotSectionWrapper = styled.div`
  .individualSpotComponent {
    padding-top: 1vh;
  }

  .spotHeaderSection {
    color: green;
    font-size: 5vh;
  }

  #accordionButtonSpotComponent {
    font-size: 3.5vw;
    font-family: "Fjalla One", sans-serif;
  }

  #spotRow {
    border-bottom: 2px solid black;
    margin: 2%;
    height: 18vh;
  }

  .spotCol {
  }

  #headerImgContainer {
    width: 100%;
    height: 90%;
    overflow: hidden;
  }

  #spotCol1 {
    img {
      width: 100%;
    }
  }

  #headerCompany {
    font-size: 3vw;
    font-weight: 800;
    font-family: "Fjalla One", sans-serif;
    text-align: center;
  }

  #headerDescription {
    font-size: 2.5vw;
    font-family: "Noto Sans", sans-serif;
    padding: 1vh;
    text-align: justify;
  }

  #spotCol2 {
  }
`;

export class SpotsSection extends Component {
  constructor(props) {
    super(props);
    this.renderSpots = this.renderSpots.bind(this);
  }

  componentDidMount() {
    this.props.getSpots();
  }

  renderSpots() {
    return _.map(this.props.spots, (spot, key) => {
      return (
        <div key={key} className="individualSpotComponent">
          <SpotComponent spot={spot} />
        </div>
      );
    });
  }

  render() {
    return (
      <SpotSectionWrapper className="spotsBox">
        <Container>{this.renderSpots()}</Container>
      </SpotSectionWrapper>
    );
  }
}

const mapStateToProps = state => ({
  spots: state.spots,
  user: state.user
});

const mapDispatchToProps = {
  getSpots
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotsSection);
