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
import * as actionNames from "../../store/actionNames";

const BuildControl = lazy(() => import("../../components/Burger/BuildControl"));

class BurgerBuilder extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {};
  // } // old
  state = {
    totalPrice: 5,
    purchasing: false,
    sending: false,
    error: false,
  }; // More Modern way even if old

  componentDidMount() {
    // axios
    //   .get("/ingredients.json")
    //   .then((response) => {
    //     this.setState({
    //       ingredients: response?.data,
    //     });
    //   })
    //   .catch((err) => {
    //     this.setState({ error: true });
    //   });
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
            {!this.state.sending && this.props.ingredientState ? (
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
          {this.props.ingredientState && !this.state.error ? (
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
    ingredientState: state.ingredients,
    price: state.totalPrice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addIngredientHandler: (name) =>
      dispatch({ type: actionNames.ADD_INGREDIENTS, ingredientName: name }),
    removeIngredientHandler: (name) =>
      dispatch({ type: actionNames.REMOVE_INGREDIENTS, ingredientName: name }),
  };
};

export default connect(
  mapPropsToState,
  mapDispatchToProps
)(withErrorHandler(withRouter(BurgerBuilder), axios));
