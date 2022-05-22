import React, { useState } from "react";
import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";

import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./assets/css/themes";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

const App = () => {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <>
      <Header />
      <div className="container">
        <div class="row">
          <div
            className="col-12"
            style={{ margin: "0px auto 0 auto", width: "1024px" }}
          >
            <Outlet />
          </div>
        </div>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyles />
          <StyledApp className="selector-theme">
            <button onClick={() => themeToggler()}>Cambio color</button>
          </StyledApp>
        </ThemeProvider>
      </div>
      <Footer />
    </>
  );
};

export default App;
