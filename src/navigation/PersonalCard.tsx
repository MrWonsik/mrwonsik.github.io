import React from "react";
import styled from "styled-components";
import LanguageSelector from "./LanguageSelector";

const PersonalCardContainer = styled.div`
  padding: 20px;
  background: ${(props) => props.theme.accentColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
`;

const AvatarContainer = styled.div``;

const Avatar = styled.img``;

const Field = styled.p``;

const SocialLink = () => {
  const SocialLinkContainer = styled.div`
    display: flex;
    flex-direction: row;
  `;

  const Social = styled.span`
    padding: 10px;
  `;

  return (
    <SocialLinkContainer>
      <Social>LinkedIn</Social>
      <Social>GitHub</Social>
    </SocialLinkContainer>
  );
};

function PersonalCard() {
  return (
    <PersonalCardContainer>
      <LanguageSelector />
      <AvatarContainer>
        <Avatar src={"obrazek.jpg"} />
      </AvatarContainer>
      <Field>Tomasz Wąsacz</Field>
      <Field>Software Enginner</Field>
      <SocialLink />
    </PersonalCardContainer>
  );
}

export default PersonalCard;
