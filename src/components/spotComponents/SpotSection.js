import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { getSpots } from "../../actions/spotAction";

import styled from "styled-components";

import { SpotComponent } from "./SpotComponent";

const SpotSectionWrapper = styled.div`
  .individualSpotComponent {
    padding-top: 1vh;
  }

  .spotHeaderSection {
    color: green;
    font-size: 5vh;
  }
`;

export class SpotsSection extends Component {
  constructor(props) {
    super(props);
    this.renderSpots = this.renderSpots.bind(this);
  }

  componentDidMount() {
    this.props.getSpots();
    console.log(this.props);
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
        {this.renderSpots()}
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
