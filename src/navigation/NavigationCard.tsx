import React from "react";
import styled from "styled-components";
import LanguageSelector from "./LanguageSelector";
import { SectionDefinition } from "../types";

const NavigationCardContainer = styled.nav`
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size: 25px;
`;

const NavigationLinkContainer = styled.div`
  padding: 10px;
`;

const NavigationLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.textColor};
  &:hover {
    filter: brightness(10);
  }
`;

interface NavigationCardProps {
  sectionsList: Array<SectionDefinition>;
}

function NavigationCard(props: NavigationCardProps) {
  return (
    <NavigationCardContainer>
      {props.sectionsList.map((section) => (
        <NavigationLinkContainer key={section.id}>
          <NavigationLink href={`#${section.id}`}>
            {section.header}
          </NavigationLink>
        </NavigationLinkContainer>
      ))}
      <LanguageSelector />
    </NavigationCardContainer>
  );
}

export default NavigationCard;
