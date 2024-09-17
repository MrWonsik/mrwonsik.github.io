import React from "react";
import styled from "styled-components";
import SocialLinks from "./SocialLinks";
import { useTranslation } from "react-i18next";
import { JustifiedParagraph } from "../../ParagraphsAndHeaders";
import { device } from "../../../const";

const PersonalCardContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  @media ${device.mobile} {
    flex-direction: column;
  }
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
  max-width: 350px;
  align-items: baseline;
  @media ${device.mobile} {
    align-items: center;
  }
`;

const Field = styled.p`
  font-size: 28px;
  margin: 5px;
`;

const FieldJobRole = styled(Field)`
  font-size: 30px;
  font-weight: 700;
`;

function PersonalCard() {
  const { t } = useTranslation();

  return (
    <PersonalCardContainer>
      <AvatarContainer>
        <Avatar src="/assets/avatar.jpg" />
      </AvatarContainer>
      <FieldsContainer>
        <Field>Tomasz Wąsacz</Field>
        <FieldJobRole>{t("app.fieldJobRole")}</FieldJobRole>
        <SocialLinks />
        <JustifiedParagraph>{t("aboutMe.firstParagraph")}</JustifiedParagraph>
      </FieldsContainer>
    </PersonalCardContainer>
  );
}

export default PersonalCard;
