import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../store/actions/authAction";
import { Redirect } from "react-router-dom";

class Logout extends Component {
  componentDidMount() {
    this.props.onLogoutt();
  }
  render() {
    return <Redirect to="/" />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogoutt: () => dispatch(action.logout()),
  };
};

export default connect(null, mapDispatchToProps)(Logout);
