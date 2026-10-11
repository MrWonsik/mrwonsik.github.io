import React from "react";
import styled from "styled-components";
import SocialLinks from "./SocialLinks";
import { Trans } from "react-i18next";
import { JustifiedParagraph } from "../../components/ParagraphsAndHeaders";
import { device } from "../../../const";
import { AppTranslation } from "../../components/AppTranslation";

const PersonalCardContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  filter: ${(props) => props.theme.showFilterDropShadow ? `drop-shadow(0px 0px 100px ${props.theme.accentColor}18)` : "none"};
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
  border: ${(props) => `10px solid ${props.theme.accentColor}`};
`;

const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
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
  color: ${(props) => props.theme.accentColor};
`;

function PersonalCard() {

  return (
    <PersonalCardContainer>
      <AvatarContainer>
        <Avatar src="/assets/avatar.jpg" />
      </AvatarContainer>
      <FieldsContainer>
        <Field>Tomasz Wąsacz</Field>
        <FieldJobRole>
          <AppTranslation translationKey={"app.fieldJobRole"} />
        </FieldJobRole>
        <SocialLinks />
        <JustifiedParagraph>
          <AppTranslation translationKey={"aboutMe.firstParagraph"} />
        </JustifiedParagraph>
      </FieldsContainer>
    </PersonalCardContainer>
  );
}

export default PersonalCard;
