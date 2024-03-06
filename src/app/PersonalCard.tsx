import React from "react";
import styled from "styled-components";
import SocialLinks from "./SocialLinks";
import { useTranslation } from "react-i18next";

const PersonalCardContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-size: 30px;
`;

const AvatarContainer = styled.div`
  margin: 10px;
  max-width: 350px;
  max-height: 350px;
`;

const Avatar = styled.img`
  width: 90%;
  height: 90%;
  border-radius: 50%;
  border: ${(props) => `10px solid ${props.theme.textColor}`};
`;

const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Field = styled.p`
  margin: 5px;
`;

const FieldJobRole = styled(Field)`
  font-weight: 700;
`;

function PersonalCard() {
  const { t } = useTranslation();

  return (
    <PersonalCardContainer>
      <AvatarContainer>
        <Avatar src="/img/avatar.jpg" />
      </AvatarContainer>
      <FieldsContainer>
        <Field>Tomasz Wąsacz</Field>
        <FieldJobRole>{t("app.fieldJobRole")}</FieldJobRole>
        <SocialLinks />
      </FieldsContainer>
    </PersonalCardContainer>
  );
}

export default PersonalCard;
