import React, { Component, lazy, Suspense } from "react";
import Burger from "../Burger/Burger";
// import BuildControl from "../../components/Burger/BuildControl";
import Modal from "../UI/Modal/Modal";
import OrderSummary from "../Burger/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../UI/Spinner/Spinner";
import withErrorHandler from "../withErrorHandler/withErrorHandler";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions/burgerBuilderAction";

const BuildControl = lazy(() => import("../../components/Burger/BuildControl"));

class BurgerBuilder extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {};
  // } // old
  state = {
    purchasing: false,
    sending: false,
  }; // More Modern way even if old

  componentDidMount() {
    this.props.fetchIngredientHandler();
  }

  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelOrder = () => {
    this.setState({ purchasing: false });
  };

  render() {
    const disabledInfo = {
      ...this.props.ingredientState,
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
            {this.props.ingredientState ? (
              <OrderSummary
                ingredientSummary={this.props.ingredientState}
                purchasedCancel={this.purchaseCancelOrder}
                purchasedContinued={this.purchaseContinueHandler}
                price={this.props.price}
              />
            ) : (
              <Spinner />
            )}
          </Modal>
          {this.props.ingredientState ? (
            <>
              <Burger ingredients={this.props.ingredientState} />
              <BuildControl
                ingredientAdded={this.props.addIngredientHandler}
                ingredientRemoved={this.props.removeIngredientHandler}
                disabledInfoProps={disabledInfo}
                burgerPrice={this.props.price}
                purchasable={this.updatePurchaseState(
                  this.props.ingredientState
                )}
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

const mapPropsToState = (state) => {
  return {
    ingredientState: state.ings.ingredients,
    price: state.ings.totalPrice,
    error: state.ings.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addIngredientHandler: (name) => dispatch(actionTypes.addIngredient(name)),
    removeIngredientHandler: (name) =>
      dispatch(actionTypes.removeIngredient(name)),
    fetchIngredientHandler: (ingredients) =>
      dispatch(actionTypes.fetchIngredient(ingredients)),
  };
};

export default connect(
  mapPropsToState,
  mapDispatchToProps
)(withErrorHandler(withRouter(BurgerBuilder), axios));
