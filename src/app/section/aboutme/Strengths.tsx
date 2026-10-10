import React from "react";
import styled from "styled-components";
import { TbWorldWww } from "react-icons/tb";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { GiBroom } from "react-icons/gi";
import { GiNinjaHead } from "react-icons/gi";
import { SiBlueprint } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import {
  BoldedParagraph,
  JustifiedParagraph,
} from "../../components/ParagraphsAndHeaders";
import { device } from "../../../const";
import { AppTranslation } from "../../components/AppTranslation";

const StrengthsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: space-around;
`;

const StrengthBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  text-align: center;
  @media ${device.tablet} {
    max-width: unset;
  }
`;

const StrengthIconContainer = styled.div`
  font-size: 80px;
  color: ${(props) => props.theme.accentColor};
`;

const StrengthHeader = styled(BoldedParagraph)`
  margin: 10px;
  color: ${(props) => props.theme.accentColor};
`;

function Strengths() {
  const strengthsCards = [
    {
      key: "webApplicationDeveloper",
      icon: <TbWorldWww />,
      header: <AppTranslation translationKey="skills.strengths.webApplicationDeveloper.header" />,
      description: <AppTranslation translationKey="skills.strengths.webApplicationDeveloper.description" />,
    },
    {
      key: "cleanCodePractitioner",
      icon: <GiBroom />,
      header: <AppTranslation translationKey="skills.strengths.cleanCodePractitioner.header" />,
      description: <AppTranslation translationKey="skills.strengths.cleanCodePractitioner.description" />,
    },
    {
      key: "refactoringNinja",
      icon: <GiNinjaHead />,
      header: <AppTranslation translationKey="skills.strengths.refactoringNinja.header" />,
      description: <AppTranslation translationKey="skills.strengths.refactoringNinja.description" />,
    },
    {
      key: "qualityDrivenDeveloper",
      icon: <IoShieldCheckmarkSharp />,
      header: <AppTranslation translationKey="skills.strengths.qualityDrivenDeveloper.header" />,
      description: <AppTranslation translationKey="skills.strengths.qualityDrivenDeveloper.description" />,
    },
    {
      key: "architectureEnthusiast",
      icon: <SiBlueprint />,
      header: <AppTranslation translationKey="skills.strengths.architectureEnthusiast.header" />,
      description: <AppTranslation translationKey="skills.strengths.architectureEnthusiast.description" />,
    },
    {
      key: "programmingPassion",
      icon: <FaJava />,
      header: <AppTranslation translationKey="skills.strengths.programingPassion.header" />,
      description: <AppTranslation translationKey="skills.strengths.programingPassion.description" />,
    },
  ];

  return (
    <StrengthsGrid>
      {strengthsCards.map((strengthCard) => {
        return (
          <StrengthBlock key={strengthCard.key}>
            <StrengthIconContainer>{strengthCard.icon}</StrengthIconContainer>
            <StrengthHeader>{strengthCard.header}</StrengthHeader>
            <JustifiedParagraph>{strengthCard.description}</JustifiedParagraph>
          </StrengthBlock>
        );
      })}
    </StrengthsGrid>
  );
}

export default Strengths;
