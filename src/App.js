import React, { useState } from "react";
import Index from "./pages/Index";
import { GlobalStyle } from "./utils/styles";
import { ThemeProvider } from "styled-components";
import LightTheme from "./theme/light";
import DarkTheme from "./theme/dark";

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
      <Index />
    </ThemeProvider>
  );
};

export default App;
