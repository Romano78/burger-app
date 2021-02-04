import React, { Component } from "react";
import CheckoutSummary from "../components/Order/CheckoutSummary/CheckoutSummary";
import { Route, Redirect } from "react-router-dom";
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
    let summary = <Redirect to="/" />;

    if (this.props.ingredientState) {
      summary = (
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

    return <>{summary}</>;
  }
}

const mapStateToProps = (state) => {
  return {
    ingredientState: state.ings.ingredients,
  };
};

export default connect(mapStateToProps)(Checkout);
