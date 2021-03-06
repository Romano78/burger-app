import * as actionNames from "../actions/actionNames";
import { objectAssign } from "../../utilities/objectAssign";

const initialState = {
  ingredients: null,
  totalPrice: 5,
  error: false,
  building: false,
};

const INGREDIENT_PRICES = {
  salad: 0.4,
  cheese: 0.5,
  bacon: 0.5,
  meat: 0.5,
}; // Gloabl variable in uppercase

const addIngredients = (state, action) => {
  return objectAssign(state, {
    ingredients: {
      ...state.ingredients,
      // overwrite a proprety in a given javascpit object
      [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
    },
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
    building: true,
  });
};

const removeIngredients = (state, action) => {
  return objectAssign(state, {
    ingredients: {
      ...state.ingredients,
      // overwrite a proprety in a given javascpit object
      [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
    },
    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
    building: true,
  });
};

const setIngredients = (state, action) => {
  return objectAssign(state, {
    ingredients: {
      salad: action.ingredients.salad,
      bacon: action.ingredients.bacon,
      cheese: action.ingredients.cheese,
      meat: action.ingredients.meat,
    },
    totalPrice: 5,
    error: false,
    building: false,
  });
};

const burgerBuilder = (state = initialState, action) => {
  switch (action.type) {
    case actionNames.ADD_INGREDIENTS:
      return addIngredients(state, action);
    case actionNames.REMOVE_INGREDIENTS:
      return removeIngredients(state, action);
    case actionNames.SET_INGREDIENTS:
      return setIngredients(state, action);
    case actionNames.SET_ERROR:
      return objectAssign(state, { error: true });
    default:
      return state;
  }
};

export default burgerBuilder;
