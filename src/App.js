import React, { useState, useEffect } from "react";
import IndexPage from "./pages/Index";
import { GlobalStyle } from "./utils/styles";
import { ThemeProvider } from "styled-components";
import LightTheme from "./theme/light";
import DarkTheme from "./theme/dark";
import Layout from "./components/layout/index";
import { Switch, Route, Redirect } from "react-router-dom";
import asynComponent from "./components/Hoc/asyncComponent";
import IngredientProvider from "./provider/IngredientProvider";
import Orders from "./components/Orders/Orders";
import Auth from "./pages/Auth";
import Logout from "./components/Logout/logout";
import { connect } from "react-redux";
import * as action from "./store/actions/authAction";

//same as Lazy Loading.
const AsyncNewPost = asynComponent(() => {
  return import("./pages/Checkout");
});

const App = (props) => {
  useEffect(() => {
    props.onTryAutoSignup();
  });

  let routes = (
    <Switch>
      <Route path="/auth" component={Auth} />
      <Route path="/" exact>
        {IndexPage}
      </Route>
      <Redirect to="/" />
    </Switch>
  );

  if (props.isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/" exact>
          {IndexPage}
        </Route>
        <Route path="/checkout" component={AsyncNewPost} />
        {props.isAuthenticated ? (
          <Route path="/orders" component={Orders} />
        ) : null}
        <Route path="/logout" component={Logout} />
        <Redirect to="/" />
      </Switch>
    );
  }

  const [theme, setTheme] = useState(LightTheme);
  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          setTheme((stateOfTheme) =>
            stateOfTheme.id === "light" ? DarkTheme : LightTheme
          );
        },
      }}
    >
      <GlobalStyle />
      <IngredientProvider>
        <Layout>{routes}</Layout>
      </IngredientProvider>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.authState.token != null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(action.authCheckState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
