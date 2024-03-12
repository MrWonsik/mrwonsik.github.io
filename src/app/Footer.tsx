import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0;
  & p {
    margin: 5px;
  }
`;

function Footer() {
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <p>© 2024 Tomasz Wąsacz. {t("app.allRightsReserved")}</p>
    </FooterContainer>
  );
}

export default Footer;
