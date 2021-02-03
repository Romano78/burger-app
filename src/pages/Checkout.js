import React, { Component } from "react";
import CheckoutSummary from "../components/Order/CheckoutSummary/CheckoutSummary";
import { Route } from "react-router-dom";
import ContactData from "../components/Order/Contact/ContactData";
import { connect } from "react-redux";

class Checkout extends Component {
  onCheckoutCancelled = () => {
    this.props.history.goBack();
  };

  onCheckoutContinued = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    return (
      <>
        <CheckoutSummary
          ingredient={this.props.ingredientState}
          onCheckoutCancelled={this.onCheckoutCancelled}
          onCheckoutContinued={this.onCheckoutContinued}
        />
        <Route
          path={`${this.props.match.path}/contact-data`}
          render={() => <ContactData />}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ingredientState: state.ingredients,
  };
};

export default connect(mapStateToProps)(Checkout);
