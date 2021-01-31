import React, { Component, lazy, Suspense } from "react";
import Burger from "../Burger/Burger";
// import BuildControl from "../../components/Burger/BuildControl";
import Modal from "../UI/Modal/Modal";
import OrderSummary from "../Burger/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../UI/Spinner/Spinner";
import withErrorHandler from "../withErrorHandler/withErrorHandler";
import { withRouter } from "react-router-dom";

const BuildControl = lazy(() => import("../../components/Burger/BuildControl"));

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
    ingredients: null,
    totalPrice: 5,
    purchasable: false,
    purchasing: false,
    sending: false,
    error: false,
  }; // More Modern way even if old

  componentDidMount() {
    console.log(this.props);
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
    // //for firebase add .json
    // //production you should calculate the price on the server backend to make sure no one is hacking
    // this.setState({ sending: true });
    // const order = {
    //   ingredients: this.state.ingredients,
    //   price: this.state.totalPrice,
    //   customer: {
    //     name: "Romain Pen",
    //     address: {
    //       street: "Saint Joseph",
    //       number: "400",
    //       country: "Canada",
    //       zipCode: "1H3T32",
    //     },
    //     email: "test@test.com",
    //   },
    //   deliveryMethod: "takeout",
    // };
    // axios
    //   .post("/orders.json", order)
    //   .then((response) => {
    //     console.log(response);
    //     this.setState({ sending: false, purchasing: false });
    //   })
    //   .catch((err) => {
    //     this.setState({ sending: false });
    //   });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <Modal
            show={this.state.purchasing}
            modalClosed={this.purchaseCancelOrder}
          >
            {!this.state.sending && this.state.ingredients ? (
              <OrderSummary
                ingredientSummary={this.state.ingredients}
                purchasedCancel={this.purchaseCancelOrder}
                purchasedContinued={this.purchaseContinueHandler}
                price={this.state.totalPrice}
              />
            ) : (
              <Spinner />
            )}
          </Modal>
          {this.state.ingredients && !this.state.error ? (
            <>
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
          ) : (
            <>
              <p>Ingredients cannot be loaded</p>
              <Spinner />
            </>
          )}
        </Suspense>
      </>
    );
  }
}

export default withErrorHandler(withRouter(BurgerBuilder), axios);
