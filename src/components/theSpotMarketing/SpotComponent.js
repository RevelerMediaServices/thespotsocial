import React, { Component } from "react";
import { Button, Collapse } from "reactstrap";
import { NoteSection } from "./NoteSection";

export class SpotComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapse: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    const spot = this.props.spot;
    return (
      <div>
        <Button id="accordionButton" block onClick={this.toggle}>
          {spot.CompanyName}
        </Button>
        <Collapse isOpen={this.state.collapse}>
          <div className="spotHeaderSection">
            <NoteSection
              spotID={this.props.spotID}
              getNotes={this.props.getNotes}
              addNotes={this.props.addNotes}
              deleteNote={this.props.deleteNote}
              notes={this.props.notes}
              user={this.props.user}
            />
          </div>
        </Collapse>
      </div>
    );
  }
}

export default SpotComponent;
