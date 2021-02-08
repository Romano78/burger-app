import * as actionType from "../actions/actionNames";
import { objectAssign } from "../../utilities/objectAssign";

const intialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  authRedirect: "/",
};

const authStart = (state) => {
  return objectAssign(state, {
    error: null,
    loading: true,
  });
};

const authSuccess = (state, action) => {
  return objectAssign(state, {
    token: action.idToken,
    userId: action.userId,
    error: null,
    loading: false,
  });
};

const authFail = (state, action) => {
  return objectAssign(state, {
    error: action.error,
    loading: false,
  });
};

const authLogout = (state) => {
  return objectAssign(state, { token: null, userId: null });
};

const setAuthRedirectPath = (state, action) => {
  return objectAssign(state, {
    authRedirect: action.path,
  });
};

const AuthReducer = (state = intialState, action) => {
  switch (action.type) {
    case actionType.AUTH_START:
      return authStart(state, action);
    case actionType.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionType.AUTH_FAILED:
      return authFail(state, action);
    case actionType.AUTH_LOGOUT:
      return authLogout(state, action);
    case actionType.SET_AUTH_REDIRECT_PATH:
      return setAuthRedirectPath(state, action);
    default:
      return state;
  }
};

export default AuthReducer;
