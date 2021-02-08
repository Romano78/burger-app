import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import burgerBuilder from "./store/reducers/burgerBuilder";
import order from "./store/reducers/order";
import authReducer from "./store/reducers/auth";
import thunk from "redux-thunk";

const rootReucer = combineReducers({
  ings: burgerBuilder,
  orderState: order,
  authState: authReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReucer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
