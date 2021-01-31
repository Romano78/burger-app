import React, { Component } from "react";
import { ContactContainer, Form, Input } from "./Styles";
import Button from "../../UI/Button/Button";
import axios from "../../../axios-orders";
import { withRouter } from "react-router-dom";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    sending: false,
    totalPrice: 0,
  };

  orderHandler = (e) => {
    e.preventDefault();

    //for firebase add .json
    //production you should calculate the price on the server backend to make sure no one is hacking
    this.setState({ sending: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "Romain Pen",
        address: {
          street: "Saint Joseph",
          number: "400",
          country: "Canada",
          zipCode: "1H3T32",
        },
        email: "test@test.com",
      },
      deliveryMethod: "takeout",
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        console.log(response);
        this.setState({ sending: false, purchasing: false });
        this.props.history.push("/");
      })
      .catch((err) => {
        this.setState({ sending: false });
      });
  };

  render() {
    return (
      <ContactContainer>
        <h4>Enter your contact information</h4>
        <Form>
          <Input type="text" name="name" placeholder="Name" />
          <Input type="email" name="email" placeholder="Email" />
          <Input type="text" name="street" placeholder="Street" />
          <Input type="text" name="postal" placeholder="Postal Code" />
          <Button clicked={this.orderHandler} success>
            ORDER HERE
          </Button>
        </Form>
      </ContactContainer>
    );
  }
}

export default withRouter(ContactData);
