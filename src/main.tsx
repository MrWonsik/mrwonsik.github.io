import React, { createContext, useContext, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./i18n";
import App from "./App";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, Theme } from "./theme";

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: true,
  toggleTheme: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Barlow Condensed", sans-serif;
    font-weight: 400;
    font-style: normal;
    color: ${(props) => props.theme.textColor};
    font-size: 25px;
    margin: 0;
    background: ${(props) => props.theme.mainColor};
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  
  html {
    scroll-behavior: smooth;
  }
`;

function Root() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true;
  });

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const currentTheme: Theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}