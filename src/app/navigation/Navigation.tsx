import React from "react";
import styled from "styled-components";
import LanguageSelector from "./LanguageSelector";
import { SectionDefinition } from "../../types";
import { device } from "../../const";
import ThemeSelector from "./ThemeSelector";

const NavigationContainer = styled.nav`
    text-align: center;
    display: flex;
    flex-direction: row;
    @media ${device.mobile} {
        padding: 0;
        justify-content: space-around;
    }
`;

const LinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex: 1;
    gap: 30px;
    
    @media ${device.mobile} {
        padding: 10px;
        justify-content: space-around;
    }
`;

const NavigationLinkContainer = styled.div`
    padding: 20px;

    @media ${device.mobile} {
        padding: 0;
    }
`;

const NavigationLink = styled.a`
    text-decoration: none;
    color: ${(props) => props.theme.textColor};
    text-transform: uppercase;
    transition: color 0.2s ease;

    &:hover {
        color: ${(props) => props.theme.accentColor};
    }
`;

const NavigationIcon = styled.span`
    display: none;

    @media ${device.mobile} {
        display: block;
        transition: transform 0.2s ease, color 0.2s ease;
        font-size: 30px;
        
        &:hover {
            transform: scale(1.15);
        }
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
      <LinksContainer>
        {props.sectionsList
          .filter((section) => section.visibleOnNav)
          .map((section) => (
            <NavigationLinkContainer key={section.id}>
              <NavigationLink href={`#${section.id}`}>
                <NavigationIcon>{section.icon}</NavigationIcon>
                <NavigationLabel>{section.header}</NavigationLabel>
              </NavigationLink>
            </NavigationLinkContainer>
          ))}
        <ThemeSelector />
        <LanguageSelector />
      </LinksContainer>

    </NavigationContainer>
  );
}

export default Navigation;