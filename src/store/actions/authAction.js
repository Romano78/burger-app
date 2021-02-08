import * as actionType from "./actionNames";
import axios from "axios";
require("dotenv").config();

export const authStart = () => {
  return {
    type: actionType.AUTH_START,
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actionType.AUTH_SUCCESS,
    idToken: token,
    userId: userId,
  };
};

export const authError = (error) => {
  return {
    type: actionType.AUTH_FAILED,
    error: error,
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("userId");
  return {
    type: actionType.AUTH_LOGOUT,
  };
};

export const checkAuthTimeOut = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const auth = (email, password, isSignUp) => {
  return (dispatch) => {
    dispatch(authStart());
    const bodyPost = {
      email: email,
      password: password,
      returnSecureToken: true,
    };

    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_API_KEY}`;

    if (!isSignUp) {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_API_KEY}`;
    }

    axios
      .post(url, bodyPost)
      .then((res) => {
        const expirationDate = new Date(
          new Date().getTime() + res.data.expiresIn * 1000 // miliseconds do *1000 Experation Time and wrap it with the data
        );
        // setting token first element key and actual item
        localStorage.setItem("token", res.data.idToken);

        // if we want to fetch in the future we need the expiration time. but it's in second
        localStorage.setItem("expirationDate", expirationDate);
        localStorage.setItem("userId", res.data.localId);
        dispatch(authSuccess(res.data.idToken, res.data.localId));
        dispatch(checkAuthTimeOut(res.data.expiresIn));
      })
      .catch((err) => {
        dispatch(authError(err.response.data.error));
        setTimeout(() => {
          dispatch(authError(null));
        }, 2000);
      });
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(logout()); // could also return
    } else {
      const expirationTime = new Date(localStorage.getItem("expirationDate"));
      if (expirationTime < new Date()) {
        dispatch(logout());
      } else {
        const userId = localStorage.getItem("userId");
        dispatch(authSuccess(token, userId));
        dispatch(
          checkAuthTimeOut(
            (expirationTime.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};

export const setAuthRedirectPath = (path) => {
  return {
    type: actionType.SET_AUTH_REDIRECT_PATH,
    path: path,
  };
};
