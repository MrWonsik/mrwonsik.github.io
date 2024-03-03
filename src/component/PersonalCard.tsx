import React from "react";
import styled from "styled-components";

const PersonalCardContainer = styled.div`
  position: sticky;
  padding: 20px;
  min-width: 300px;
  height: 300px;
  background: ${(props) => props.theme.accentColor};
`;

function PersonalCard() {
  return <PersonalCardContainer></PersonalCardContainer>;
}

export default PersonalCard;
