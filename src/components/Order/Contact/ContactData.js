import React, { Component } from "react";
import { ContactContainer, Form } from "./Styles";
import Button from "../../UI/Button/Button";
import axios from "../../../axios-orders";
import { withRouter } from "react-router-dom";
import Input from "../../UI/Input/Input";
import OrderFormHelper from "../../Helper/OrderFormHelper";
import { connect } from "react-redux";
import withErrorHandler from "../../withErrorHandler/withErrorHandler";
import * as orderAction from "../../../store/actions/orderAction";

class ContactData extends Component {
  state = {
    orderForm: {
      name: OrderFormHelper(
        "input",
        "text",
        "Name",
        "",
        true,
        false,
        null,
        null,
        false
      ),
      street: OrderFormHelper(
        "input",
        "text",
        "Street",
        "",
        true,
        false,
        false,
        null,
        null,
        false
      ),
      number: OrderFormHelper(
        "input",
        "text",
        "Number",
        "",
        true,
        false,
        false,
        null,
        null,
        false
      ),
      country: OrderFormHelper(
        "input",
        "text",
        "Country",
        "",
        true,
        false,
        false,
        null,
        null,
        false
      ),
      zipCode: OrderFormHelper(
        "input",
        "text",
        "Zip Code",
        "",
        true,
        false,
        5,
        5,
        false
      ),
      email: OrderFormHelper("input", "email", "Email", "", true, false),
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            {
              value: "takeout",
              displayValue: "Takeout",
            },
            {
              value: "delivery",
              displayValue: "Delivery",
            },
          ],
        },
        validation: {
          required: true,
        },
        valid: true,
        value: "takeout",
      },
    },
    formIsNotValid: true,
  };

  orderHandler = (e) => {
    e.preventDefault();
    //for firebase add .json
    //production you should calculate the price on the server backend to make sure no one is hacking

    const formData = {};
    for (let formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] = this.state.orderForm[
        formElementIdentifier
      ].value;
    }

    const order = {
      ingredients: this.props.ingredientState,
      price: this.props.price,
      orderData: formData,
    };

    //THIS IS WHERE YOU CALL ACXIONS

    this.props.onOrderBurgerHandler(order);

    this.props.history.push("/");
  };

  checkValidity = (value, rules) => {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= 5 && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= 5 && isValid;
    }

    return isValid;
  };

  inputChangedHandler = (e, inputIdentifier) => {
    const updatedOrderForm = {
      ...this.state.orderForm,
    };

    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier],
    };

    updatedFormElement.value = e.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );

    updatedFormElement.touched = true;

    updatedOrderForm[inputIdentifier] = updatedFormElement;

    let formIsNotValid = true;

    for (let inputsIdentifier in updatedOrderForm) {
      formIsNotValid =
        updatedOrderForm[inputsIdentifier].valid && formIsNotValid;
    }

    this.setState({
      orderForm: updatedOrderForm,
      formIsNotValid: !formIsNotValid,
    });
  };

  render() {
    const formElementsArray = [];

    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }

    return (
      <ContactContainer>
        <h4>Enter your contact information</h4>
        <Form onSubmit={this.orderHandler}>
          {formElementsArray.map((formEl) => {
            return (
              <Input
                isValid={formEl.config.valid}
                touched={formEl.config.touched}
                key={formEl.id}
                elementType={formEl.config.elementType}
                elementConfig={formEl.config.elementConfig}
                change={(e) => this.inputChangedHandler(e, formEl.id)}
                value={formEl.config.value}
              />
            );
          })}
          <Button success disabled={this.state.formIsNotValid}>
            ORDER
          </Button>
        </Form>
      </ContactContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ingredientState: state.ings.ingredients,
    price: state.ings.totalPrice,
    loading: state.orderState.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onOrderBurgerHandler: (orderData) =>
      dispatch(orderAction.purchasedBurger(orderData)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withErrorHandler(ContactData, axios)));
