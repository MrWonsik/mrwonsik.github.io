import React from "react";
import styled from "styled-components";
import SocialLinks from "./SocialLinks";

const PersonalCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
`;

const AvatarContainer = styled.div`
  border-radius: 10px;
  overflow: hidden;
  margin: 10px;
`;

const Avatar = styled.img`
  width: 150px;
  height: 150px;
`;

const Field = styled.p`
  margin: 5px;
`;

const FieldJobRole = styled(Field)`
  font-weight: 700;
`;

function PersonalCard() {
  return (
    <PersonalCardContainer>
      <AvatarContainer>
        <Avatar src="/img/avatar.jpg" />
      </AvatarContainer>
      <Field>Tomasz Wąsacz</Field>
      <FieldJobRole>Software Engineer</FieldJobRole>
      <SocialLinks />
    </PersonalCardContainer>
  );
}

export default PersonalCard;
