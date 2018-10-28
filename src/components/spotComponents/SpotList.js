import React, { Component } from "react";
import { connect } from "react-redux";

import { Button, Collapse } from "reactstrap";

import { getSpots } from "../../actions/spotAction";

import _ from "lodash";

export class SpotList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapse: false
    };
    this.toggle = this.toggle.bind(this);
    this.renderSpots = this.renderSpots.bind(this);
  }

  componentDidMount() {
    this.props.getSpots();
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  renderSpots() {
    return _.map(this.props.spots, (spot, key) => {
      return (
        <div key={key}>
          test
          <Button onClick={this.toggle}>{spot.CompanyName}</Button>
          <Collapse>{spot.CompanyName}</Collapse>
        </div>
      );
    });
  }

  render() {
    return <div>test {this.renderSpots()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    spots: state.spots
  };
};

const mapDispatchToProps = {
  getSpots
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotList);
