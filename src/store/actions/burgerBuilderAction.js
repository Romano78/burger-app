import * as actionTypes from "./actionNames";
import axios from "../../axios-orders";

export const addIngredient = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENTS,
    ingredientName: name,
  };
};

export const removeIngredient = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENTS,
    ingredientName: name,
  };
};

export const setIngredients = (ingredients) => {
  return {
    //need action type
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients,
  };
};

export const setError = () => {
  return {
    type: actionTypes.SET_ERROR,
  };
};

export const fetchIngredient = () => {
  return (dispatch) => {
    axios
      .get("/ingredients.json")
      .then((response) => {
        dispatch(setIngredients(response.data));
      })
      .catch((err) => {
        dispatch(setError());
      });
  };
};
