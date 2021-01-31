import React, { useState } from "react";
import Index from "./pages/Index";
import { GlobalStyle } from "./utils/styles";
import { ThemeProvider } from "styled-components";
import LightTheme from "./theme/light";
import DarkTheme from "./theme/dark";
import Layout from "./components/layout/index";
import { Switch, Route } from "react-router-dom";
import asynComponent from "./components/Hoc/asyncComponent";
import IngredientProvider from "./provider/IngredientProvider";
import Orders from "./components/Orders/Orders";

//same as Lazy Loading.
const AsyncNewPost = asynComponent(() => {
  return import("./pages/Checkout");
});

const App = () => {
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
        <Layout>
          <Switch>
            <Route path="/" exact>
              <Index />
            </Route>
            {/* in order to get the props history etc you need to return route like this */}
            <Route path="/checkout" component={AsyncNewPost} />
            <Route path="/orders" component={Orders} />
            <Route render={() => <h1>Not Found</h1>} />
          </Switch>
        </Layout>
      </IngredientProvider>
    </ThemeProvider>
  );
};

export default App;
