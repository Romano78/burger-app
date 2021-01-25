import React, { Component } from "react";
import Burger from "../Burger/Burger";
import BuildControl from "../../components/Burger/BuildControl";
import Modal from "../UI/Modal/Modal";
import OrderSummary from "../Burger/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.4,
  cheese: 0.5,
  bacon: 0.5,
  meat: 0.5,
}; // Gloabl variable in uppercase

class BurgerBuilder extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {};
  // } // old

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 5,
    purchasable: false,
    purchasing: false,
  }; // More Modern way even if old

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

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];

    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };

    updatedIngredients[type] = updatedCount;

    const priceAddition = INGREDIENT_PRICES[type];

    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceAddition;

    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelOrder = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    return alert("You continue !");
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };

    for (let key in disabledInfo) {
      console.log(disabledInfo[key]);
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    console.log(this.state.purchasing);

    return (
      <>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelOrder}
        >
          <OrderSummary
            ingredientSummary={this.state.ingredients}
            purchasedCancel={this.purchaseCancelOrder}
            purchasedContinued={this.purchaseContinueHandler}
            price={this.state.totalPrice}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControl
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabledInfoProps={disabledInfo}
          burgerPrice={this.state.totalPrice}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHandler}
        />
      </>
    );
  }
}

export default BurgerBuilder;
