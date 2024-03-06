import React, { useEffect } from "react";
import i18n from "i18next";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const FlagSvg = styled.svg`
  width: 30px;
  height: 30px;
`;

const LanguageButton = styled.button<{ selected: boolean }>`
  background: none;
  border: none;
  padding: 10px;
  filter: ${(props) => (props.selected ? "none" : "grayscale(1)")};
  &:hover {
    cursor: pointer;
    filter: brightness(1);
  }
`;

const PlFlagSvg = () => (
  <FlagSvg
    xmlns="http://www.w3.org/2000/svg"
    width="1280"
    height="800"
    viewBox="0 0 16 10"
  >
    <rect width="16" height="10" fill="#fff" />
    <rect width="16" height="5" fill="#dc143c" y="5" />
  </FlagSvg>
);

const EngFlagSvg = () => (
  <FlagSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 30"
    width="1000"
    height="600"
  >
    <clipPath id="t">
      <path d="M25,15h25v15zv15h-25zh-25v-15zv-15h25z" />
    </clipPath>
    <path d="M0,0v30h50v-30z" fill="#012169" />
    <path d="M0,0 50,30M50,0 0,30" stroke="#fff" strokeWidth="6" />
    <path
      d="M0,0 50,30M50,0 0,30"
      clipPath="url(#t)"
      stroke="#C8102E"
      strokeWidth="4"
    />
    <path
      d="M-1 11h22v-12h8v12h22v8h-22v12h-8v-12h-22z"
      fill="#C8102E"
      stroke="#FFF"
      strokeWidth="2"
    />
  </FlagSvg>
);

function LanguageSelector() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("app.pageTitle");
  });

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language).then(() => {
      document.title = t("app.pageTitle");
    });
  };

  return (
    <div>
      <LanguageButton
        onClick={() => changeLanguage("pl-PL")}
        selected={i18n.language === "pl-PL"}
      >
        <PlFlagSvg />
      </LanguageButton>
      <LanguageButton
        onClick={() => changeLanguage("en-US")}
        selected={i18n.language === "en-US"}
      >
        <EngFlagSvg />
      </LanguageButton>
    </div>
  );
}

export default LanguageSelector;
