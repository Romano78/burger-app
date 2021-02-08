import React, { Component } from "react";
import styled from "styled-components";
// import PropTypes from "prop-types";
import { BodyContainer } from "./styles";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideBarDrawer from "../Navigation/SideDrawer/SideDrawer";
// const SideBarDrawer = lazy(() => import("../Navigation/SideDrawer/SideDrawer"));
// const Toolbar = lazy(() => import("../Navigation/Toolbar/Toolbar"));
import { connect } from "react-redux";

export const Wrapper = styled.div``;

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerCloseHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Wrapper>
        <Toolbar
          open={this.sideDrawerCloseHandler}
          isAuth={this.props.isAuthenticated}
        />
        <SideBarDrawer
          closed={this.sideDrawerCloseHandler}
          open={this.state.showSideDrawer}
          isAuth={this.props.isAuthenticated}
        />
        <BodyContainer>{this.props.children}</BodyContainer>
      </Wrapper>
    );
  }
}

// Layout.proptypes = {
//   children: PropTypes.object,
// };

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.authState.token !== null,
  };
};
export default connect(mapStateToProps)(Layout);
