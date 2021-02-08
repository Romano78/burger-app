import React, { Component } from "react";
import Order from "../Order/Order";
import { OrdersContainer } from "./Styles";
import axios from "../../axios-orders";
import withErrorHandler from "../withErrorHandler/withErrorHandler";
import { connect } from "react-redux";
import * as action from "../../store/actions/orderAction";

class Orders extends Component {
  componentDidMount() {
    this.props.orderHandler(this.props.token, this.props.userId);
  }

  render() {
    return (
      <OrdersContainer>
        {this.props.orderState.map((order) => {
          return (
            <Order
              key={order.id}
              ingredients={order.ingredients}
              price={order.price}
            />
          );
        })}
      </OrdersContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orderState: state.orderState.order,
    loadingState: state.orderState.loading,
    token: state.authState.token,
    userId: state.authState.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    orderHandler: (token, userId) =>
      dispatch(action.fetchOrders(token, userId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));
