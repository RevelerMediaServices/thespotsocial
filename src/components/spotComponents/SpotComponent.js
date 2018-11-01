import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Collapse } from "reactstrap";

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
          <Button className="accordionButton" block onClick={this.toggle}>
            {spot.CompanyName}
          </Button>
          <Collapse isOpen={this.state.collapse}>
            <div className="spotHeaderSection">
              {spot.PhoneNumberCombined} {spot.Address}
            </div>
          </Collapse>
        </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotComponent);
