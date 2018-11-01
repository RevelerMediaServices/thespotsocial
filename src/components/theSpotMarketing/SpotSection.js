import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { getSpots } from "../../actions/spotAction";

import { getNotes, addNotes, deleteNote } from "../../actions/notesAction";

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
    this.props.getNotes();
  }

  renderSpots() {
    return _.map(this.props.spots, (spot, key) => {
      return (
        <div key={key} className="individualSpotComponent">
          <SpotComponent
            getNotes={this.props.getNotes}
            addNotes={this.props.addNotes}
            deleteNote={this.props.deleteNote}
            spot={spot}
            spotID={key}
            notes={this.props.notes}
            user={this.props.user}
          />
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
  user: state.user,
  notes: state.notes
});

const mapDispatchToProps = {
  getSpots,
  getNotes,
  addNotes,
  deleteNote
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotsSection);
