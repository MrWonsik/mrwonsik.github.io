import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const SubsectionContainer = styled.div`
  margin: 50px 0;
`;

const SubsectionHeader = styled.h3`
  font-size: 40px;
  margin-top: 10px;
  text-align: center;
`;

const TechnologiesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: wrap;
`;

const TechnologySvg = styled.img`
  max-width: 100px;
  max-height: 100px;
  padding: 10px;
`;

const Technologies = () => {
  return (
    <TechnologiesContainer>
      <TechnologySvg src="/img/tech-svg/java.svg" />
      <TechnologySvg src="/img/tech-svg/spring.svg" />
      <TechnologySvg src="/img/tech-svg/html.svg" />
      <TechnologySvg src="/img/tech-svg/css.svg" />
      <TechnologySvg src="/img/tech-svg/js.svg" />
      <TechnologySvg src="/img/tech-svg/ts.svg" />
      <TechnologySvg src="/img/tech-svg/react.svg" />
    </TechnologiesContainer>
  );
};

function Skills() {
  const { t } = useTranslation();

  return (
    <div>
      <SubsectionContainer>
        <SubsectionHeader>{t("skills.technologiesSubheader")}</SubsectionHeader>
        <Technologies />
      </SubsectionContainer>
      <SubsectionContainer>
        <SubsectionHeader>{t("skills.toolsSubheader")}</SubsectionHeader>
      </SubsectionContainer>
      <SubsectionContainer>
        <SubsectionHeader>{t("skills.skillsSubheader")}</SubsectionHeader>
      </SubsectionContainer>
      <SubsectionContainer>
        <SubsectionHeader>
          {t("skills.certificationsSubheader")}
        </SubsectionHeader>
      </SubsectionContainer>
    </div>
  );
}

export default Skills;
