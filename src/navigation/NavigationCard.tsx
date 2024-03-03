import React from "react";
import styled from "styled-components";
import LanguageSelector from "./LanguageSelector";
import { SectionDefinition } from "../types";

const NavigationCardContainer = styled.nav`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: ${(props) => `1px ${props.theme.accentColor} solid`};
  border-bottom: ${(props) => `1px ${props.theme.accentColor} solid`};
  border-radius: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin: 10px;
`;

const NavigationLinkContainer = styled.div`
  padding: 10px;
`;

const NavigationLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.textColor};
  &:hover {
    color: red;
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
