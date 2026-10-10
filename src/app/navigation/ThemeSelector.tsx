import React from "react";
import styled from "styled-components";
import { IoIosSunny, IoIosMoon  } from "react-icons/io";
import { useThemeContext } from "../../main"; // lub IoMoonOutline / IoSunOutline z react-icons/io5

const ThemeIconButton = styled.button`
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.textColor};
    transition: transform 0.2s ease, color 0.2s ease;
    font-size: 30px;

    &:hover {
        color: ${(props) => props.theme.accentColor};
        transform: scale(1.15);
    }

    &:focus {
        outline: none;
    }
`;

function ThemeSelector() {
  const { isDarkMode, toggleTheme } = useThemeContext();

  return (
    <ThemeIconButton
      onClick={toggleTheme}
      title={isDarkMode ? "Przełącz na jasny motyw" : "Przełącz na ciemny motyw"}
      aria-label="Toggle theme"
    >
      {isDarkMode ? <IoIosSunny /> : <IoIosMoon />}
    </ThemeIconButton>
  );
}

export default ThemeSelector;