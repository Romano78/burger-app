import * as actionName from "../actions/actionNames";
import { objectAssign } from "../../utilities/objectAssign";

const initialState = {
  order: [],
  orders: [],
  error: false,
  loading: false,
};

const purchaseOrder = (state, action) => {
  const newOrder = {
    ...action.orderData,
    id: action.orderId,
  };
  return objectAssign(state, {
    order: state.order.concat({
      newOrder,
    }),
    loading: false,
  });
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionName.PURCHASE_BURGER_SUCCESS:
      return purchaseOrder(state, action);

    case actionName.PURCHASE_BURGER_FAILED:
      return objectAssign(state, { loading: false });

    case actionName.PURCHASED_BURGER_START:
      return objectAssign(state, { loading: true });

    case actionName.SET_ORDER:
      return objectAssign(state, { order: action.order });

    default:
      return state;
  }
};

export default orderReducer;
