import * as actionTypes from "./actionNames";
import axios from "../../axios-orders";

export const purchasedBurgerStart = () => {
  return {
    type: actionTypes.PURCHASED_BURGER_START,
  };
};

export const purchasedBurger = (orderData) => {
  return (dispatch) => {
    dispatch(purchasedBurgerStart());
    axios
      .post("/order.json", orderData)
      .then((response) => {
        console.log(response.data);
        dispatch(purchaseBurgerSuccess(response.data, orderData));
      })
      .catch((err) => {
        dispatch(purchaseBurgerFailed(err));
      });
  };
};

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData,
  };
};

export const purchaseBurgerFailed = (error) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAILED,
    error: error,
  };
};

export const setOrder = (order) => {
  console.log(order);
  return {
    //need action type
    type: actionTypes.SET_ORDER,
    order: order,
  };
};

export const setError = (err) => {
  console.log(err);
};

export const fetchOrders = () => {
  return (dispatch) => {
    const fetchedOrders = [];
    axios
      .get("/order.json")
      .then((res) => {
        for (let key in res.data) {
          console.log(key);
          fetchedOrders.push({
            ...res.data[key],
            id: key,
          });
        }
        dispatch(setOrder(fetchedOrders));
      })
      .catch((err) => {
        dispatch(setError(err));
      });
  };
};
