import * as actionTypes from "./actionNames";
import axios from "../../axios-orders";

export const purchasedBurgerStart = () => {
  return {
    type: actionTypes.PURCHASED_BURGER_START,
  };
};

export const purchasedBurger = (orderData, token) => {
  return (dispatch) => {
    dispatch(purchasedBurgerStart());
    axios
      .post(`/order.json?auth=${token}`, orderData)
      .then((response) => {
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
  return {
    //need action type
    type: actionTypes.SET_ORDER,
    order: order,
  };
};

export const setError = (err) => {
  console.log(err);
};

export const fetchOrders = (token, userId) => {
  return (dispatch) => {
    const fetchedOrders = [];
    const queryParams = `?auth=${token}&orderBy="userId"&equalTo="${userId}"`;
    axios
      .get(`/order.json${queryParams}`)
      .then((res) => {
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key,
          });
        }
        dispatch(setOrder(fetchedOrders));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
