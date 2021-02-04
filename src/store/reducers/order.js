import * as actionName from "../actions/actionNames";

const initialState = {
  order: [],
  orders: [],
  error: false,
  loading: false,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionName.PURCHASE_BURGER_SUCCESS:
      const newOrder = {
        ...action.orderData,
        id: action.orderId,
      };
      return {
        ...state,
        order: state.order.concat({
          newOrder,
        }),
        loading: false,
      };

    case actionName.PURCHASE_BURGER_FAILED:
      return {
        ...state,
        loading: false,
      };

    case actionName.PURCHASED_BURGER_START:
      return {
        ...state,
        loading: true,
      };

    case actionName.SET_ORDER:
      return {
        ...state,
        order: action.order,
      };

    default:
      return state;
  }
};

export default orderReducer;
