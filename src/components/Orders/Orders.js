import React, { Component } from "react";
import Order from "../Order/Order";
import { OrdersContainer } from "./Styles";
import axios from "../../axios-orders";
import withErrorHandler from "../withErrorHandler/withErrorHandler";

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };
  componentDidMount() {
    axios
      .get("/orders.json")
      .then((res) => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key,
          });
        }
        this.setState({ loading: false, orders: fetchedOrders });
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <OrdersContainer>
        {this.state.orders.map((order) => {
          console.log(order);
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

export default withErrorHandler(Orders, axios);
