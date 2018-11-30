import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Collapse } from "reactstrap";

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
        <div
          color="primary"
          id="accordionButtonSpotComponent"
          onClick={this.toggle}
        >
          <Row id="spotRow">
            <Col xs={4} className="spotCol" id="spotCol1">
              <div id="headerImgContainer">
                <img src={spot.profilePicture} alt="Company Profile" />
              </div>
            </Col>
            <Col xs={8} className="spotCol" id="spotCol2">
              <div id="headerCompany">{spot.CompanyName}</div>
              <div id="headerDescription">{spot.description}</div>
            </Col>
          </Row>
        </div>
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
