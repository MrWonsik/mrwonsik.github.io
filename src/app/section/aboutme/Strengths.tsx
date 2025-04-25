import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { TbWorldWww } from "react-icons/tb";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { GiBroom } from "react-icons/gi";
import { GiNinjaHead } from "react-icons/gi";
import { SiBlueprint } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import {
  BoldedParagraph,
  JustifiedParagraph,
} from "../../ParagraphsAndHeaders";
import { device } from "../../../const";

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
`;

const StrengthHeader = styled(BoldedParagraph)`
  margin: 10px;
`;

function Strengths() {
  const { t } = useTranslation();

  const strengthsCards = [
    {
      icon: <TbWorldWww />,
      header: t("skills.strengths.webApplicationDeveloper.header"),
      description: t("skills.strengths.webApplicationDeveloper.description"),
    },
    {
      icon: <GiBroom />,
      header: t("skills.strengths.cleanCodePractitioner.header"),
      description: t("skills.strengths.cleanCodePractitioner.description"),
    },
    {
      icon: <GiNinjaHead />,
      header: t("skills.strengths.refactoringNinja.header"),
      description: t("skills.strengths.refactoringNinja.description"),
    },
    {
      icon: <IoShieldCheckmarkSharp />,
      header: t("skills.strengths.qualityDrivenDeveloper.header"),
      description: t("skills.strengths.qualityDrivenDeveloper.description"),
    },
    {
      icon: <SiBlueprint />,
      header: t("skills.strengths.architectureEnthusiast.header"),
      description: t("skills.strengths.architectureEnthusiast.description"),
    },
    {
      icon: <FaJava />,
      header: t("skills.strengths.programingPassion.header"),
      description: t("skills.strengths.programingPassion.description")
    }
  ];

  return (
    <StrengthsGrid>
      {strengthsCards.map((strengthCard) => {
        return (
          <StrengthBlock key={strengthCard.header}>
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
