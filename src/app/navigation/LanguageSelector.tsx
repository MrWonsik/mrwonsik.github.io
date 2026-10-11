import React, { useEffect } from "react";
import i18n from "i18next";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

const LanguageButton = styled.button<{ $selected: boolean }>`
    cursor: pointer;
    background: none;
    border: none;
    padding: 4px 8px;
    font-size: 0.95rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: ${(props) => props.$selected ? props.theme.accentColor : props.theme.textColor};
    opacity: ${(props) => props.$selected ? 1 : 0.4};
    transition: opacity 0.2s ease, color 0.2s ease, transform 0.2s ease;

    &:hover {
        opacity: 1;
        color: ${(props) => props.theme.accentColor};
        transform: translateY(-1px);
    }
`;

const Separator = styled.span`
  color: ${(props) => props.theme.textColor};
  opacity: 0.2;
  font-size: 0.85rem;
`;

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
    <Container>
      <LanguageButton
        onClick={() => changeLanguage("pl-PL")}
        $selected={i18n.language === "pl-PL"}
      >
        PL
      </LanguageButton>
      <Separator>|</Separator>
      <LanguageButton
        onClick={() => changeLanguage("en-US")}
        $selected={i18n.language === "en-US"}
      >
        EN
      </LanguageButton>
    </Container>
  );
}

export default LanguageSelector;