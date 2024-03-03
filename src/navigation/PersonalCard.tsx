import React from "react";
import styled from "styled-components";
import SocialLinks from "./SocialLinks";

const PersonalCardContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  font-size: 30px;
`;

const AvatarContainer = styled.div`
  margin: 10px;
`;

const Avatar = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 10px;
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
