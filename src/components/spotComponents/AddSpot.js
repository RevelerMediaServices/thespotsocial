import React, { Component } from "react";
import { connect } from "react-redux";

import { addSpot } from "../../actions/spotAction";

export class AddSpot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      CompanyName: "",
      Address: "",
      category: "",
      City: "",
      Email: "",
      Facebook: "",
      FaxNumberCombined: "",
      GooglePlus: "",
      LastUpdatedOn: "",
      PhoneNumberCombined: "",
      Twitter: "",
      Website: "",
      ZIPCode: "",
      profilePicture: "",
      subCategory: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const spot = {
      CompanyName: this.state.CompanyName,
      Address: this.state.CompanyName,
      category: this.state.category,
      City: this.state.City,
      Email: this.state.Email,
      Facebook: this.state.Facebook,
      FaxNumberCombined: this.state.FaxNumberCombined,
      GooglePlus: this.state.GooglePlus,
      LastUpdatedOn: this.state.LastUpdatedOn,
      PhoneNumberCombined: this.state.PhoneNumberCombined,
      Twitter: this.state.Twitter,
      Website: this.state.Website,
      ZIPCode: this.state.ZIPCode,
      profilePicture: this.state.profilePicture,
      subCategory: this.state.subCategory,,
      description: this.state.description,
      uid: this.props.user.uid,
      spotID: this.props.spotID
    };
    this.props.addSpot(spot);
    this.setState({
      CompanyName: "",
      Address: "",
      category: "",
      City: "",
      Email: "",
      Facebook: "",
      FaxNumberCombined: "",
      GooglePlus: "",
      LastUpdatedOn: "",
      PhoneNumberCombined: "",
      Twitter: "",
      Website: "",
      ZIPCode: "",
      profilePicture: "",
      subCategory: "",
      description: ""
    });
  }

  render() {
    return (
      <div>
        <form>
            <h1 id="addSpotFormHeader">Add Spot</h1>
            <label for="addSpotForm">Spot Name</label>
            <input
            type="text"
            name="CompanyName"
            value={this.state.Companyname}
            onChange={this.handleChange}
            placeholder="Spot Name"
            />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  addSpot
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddSpot);
