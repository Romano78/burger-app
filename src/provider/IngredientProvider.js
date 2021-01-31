import React, { Component } from "react";
import IngredientContext from "../context/IngredientContext";
import axios from "../axios-orders";

const INGREDIENT_PRICES = {
  salad: 0.4,
  cheese: 0.5,
  bacon: 0.5,
  meat: 0.5,
};
class IngredientProvider extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 1,
      meat: 1,
    },
    totalPrice: 5,
    purchasable: false,
    purchasing: false,
    sending: false,
    error: false,
  };

  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    this.setState({ purchasable: sum > 0 });
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };

    updatedIngredients[type] = updatedCount;

    const priceAddition = INGREDIENT_PRICES[type];

    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  componentWillMount() {
    console.log("render");
    axios
      .get("/ingredients.json")
      .then((response) => {
        this.setState({
          ingredients: response?.data,
        });
      })
      .catch((err) => {
        this.setState({ error: true });
      });
  }

  valueProp = {
    state: this.state,
    INGREDIENT_PRICES,
    addIngredientHandler: this.addIngredientHandler,
    updatePurchaseState: this.updatePurchaseState,
  };

  render() {
    return (
      <IngredientContext.Provider value={this.valueProp}>
        {this.props.children}
      </IngredientContext.Provider>
    );
  }
}
// Gloabl variable in uppercase

export default IngredientProvider;
