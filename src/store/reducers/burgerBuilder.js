import * as actionNames from "../actions/actionNames";

const initialState = {
  ingredients: null,
  totalPrice: 5,
  error: false,
};

const INGREDIENT_PRICES = {
  salad: 0.4,
  cheese: 0.5,
  bacon: 0.5,
  meat: 0.5,
}; // Gloabl variable in uppercase

const burgerBuilder = (state = initialState, action) => {
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
    case actionNames.SET_INGREDIENTS:
      return {
        ...state,
        ingredients: {
          salad: action.ingredients.salad,
          bacon: action.ingredients.bacon,
          cheese: action.ingredients.cheese,
          meat: action.ingredients.meat,
        },
        error: false,
      };
    case actionNames.SET_ERROR:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export default burgerBuilder;
