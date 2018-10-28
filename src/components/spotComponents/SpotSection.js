import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { getSpots } from "../../actions/spotAction";

export class SpotsSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      CompanyName: "",
      Address: ""
    };
    this.renderSpots = this.renderSpots.bind(this);
  }

  componentDidMount() {
    this.props.getSpots();
    console.log(this.props);
  }

  renderSpots() {
    return _.map(this.props.spots, (spot, key) => {
      return (
        <div key={key}>
          <div>
            <h2>{spot.CompanyName}</h2>
            <p>{spot.Address}</p>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="spotsBox">{this.renderSpots()}</div>;
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
