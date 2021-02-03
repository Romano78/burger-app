import * as actionNames from "./actionNames";

const initialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  },
  totalPrice: 5,
};

const INGREDIENT_PRICES = {
  salad: 0.4,
  cheese: 0.5,
  bacon: 0.5,
  meat: 0.5,
}; // Gloabl variable in uppercase

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionNames.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          // overwrite a proprety in a given javascpit object
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
      };

    case actionNames.REMOVE_INGREDIENTS:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          // overwrite a proprety in a given javascpit object
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
      };
    default:
      return state;
  }
};

export default reducer;
