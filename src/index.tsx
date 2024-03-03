import React from "react";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import "./i18n";
import App from "./App";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const theme = {
  mainColor: "#E2E8DD",
  textColor: "#4E5340",
  buttonColor: "#697268",
  accentColor: "#B7D1DA",
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Barlow Condensed", sans-serif;
    font-weight: 400;
    font-style: normal;
    color: ${(props) => props.theme.textColor};
    font-size: 20px;
    margin: 0;
    background: ${(props) => props.theme.mainColor};
  }
`;

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </React.StrictMode>,
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
