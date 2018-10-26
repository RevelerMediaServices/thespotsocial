import React, { Component } from "react";
import { connect } from "react-redux";
import { googleLogin, twitterLogin } from "../../actions/userAction";
import { Redirect } from "react-router-dom";

export class Login extends Component {
  isLoggedIn() {
    return this.props.user ? (
      <Redirect to="/" />
    ) : (
      <div className="container">
        <div className="row text-center">
          <h1>Login with a Social Network</h1>
        </div>

        <div className="col-sm-6">
          <button
            className="btn btn-danger but-lg"
            onClick={this.props.googleLogin}
          >
            Login with Google
          </button>
        </div>

        <div className="col-sm-6">
          <button
            className="btn btn-danger but-lg"
            onClick={this.props.twitterLogin}
          >
            Login with Twitter
          </button>
        </div>
      </div>
    );
  }

  render() {
    return <div>{this.isLoggedIn()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  googleLogin,
  twitterLogin
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
