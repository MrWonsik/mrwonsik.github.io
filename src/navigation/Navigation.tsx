import React from "react";
import styled from "styled-components";
import LanguageSelector from "./LanguageSelector";
import { SectionDefinition } from "../types";
import { device } from "../const";

const NavigationContainer = styled.nav`
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size: 25px;
  background: ${(props) => props.theme.mainColor};
`;

const NavigationLinkContainer = styled.div`
  padding: 10px;
`;

const NavigationLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.textColor};
  &:hover {
    color: ${(props) => props.theme.accentColor};
  }
`;

const NavigationIcon = styled.span`
  display: none;

  @media ${device.mobile} {
    display: block;
  }
`;

const NavigationLabel = styled.span`
  display: block;

  @media ${device.mobile} {
    display: none;
  }

  &:hover {
    color: ${(props) => props.theme.accentColor};
  }
`;

interface NavigationCardProps {
  sectionsList: Array<SectionDefinition>;
}

function Navigation(props: NavigationCardProps) {
  return (
    <NavigationContainer>
      {props.sectionsList.map((section) => (
        <NavigationLinkContainer key={section.id}>
          <NavigationLink href={`#${section.id}`}>
            <NavigationIcon>{section.icon}</NavigationIcon>
            <NavigationLabel>{section.header}</NavigationLabel>
          </NavigationLink>
        </NavigationLinkContainer>
      ))}
      <LanguageSelector />
    </NavigationContainer>
  );
}

export default Navigation;
