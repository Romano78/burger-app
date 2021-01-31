import React, { Component } from "react";
import CheckoutSummary from "../components/Order/CheckoutSummary/CheckoutSummary";
import { Route } from "react-router-dom";
import ContactData from "../components/Order/Contact/ContactData";

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
  };

  onCheckoutCancelled = () => {
    this.props.history.goBack();
  };

  onCheckoutContinued = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};

    for (let param of query.entries()) {
      ingredients[param[0]] = +param[1];
      console.log(param);
    }

    this.setState({
      ingredients: ingredients,
    });
  }

  render() {
    return (
      <>
        <CheckoutSummary
          ingredient={this.state.ingredients}
          onCheckoutCancelled={this.onCheckoutCancelled}
          onCheckoutContinued={this.onCheckoutContinued}
        />
        <Route
          path={`${this.props.match.path}/contact-data`}
          render={() => <ContactData ingredients={this.state.ingredients} />}
        />
      </>
    );
  }
}

export default Checkout;
