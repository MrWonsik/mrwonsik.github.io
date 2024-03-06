import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Strengths from "./Strengths";
import { Svg, SvgContainer } from "./SvgContainer";
import Courses from "./Courses";

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubsectionContainer = styled.div`
  margin: 40px 0;
`;

const SubsectionHeader = styled.h3`
  font-size: 40px;
  margin-top: 30px;
  text-align: center;
`;

const TechnologiesContainer = styled.div``;

const BackendTechnologies = () => {
  return (
    <SvgContainer>
      <Svg src="/img/tech-svg/java.svg" />
      <Svg src="/img/tech-svg/spring.svg" />
      <Svg src="/img/tech-svg/JUnit5.png" />
      <Svg src="/img/tech-svg/mockito.png" />
    </SvgContainer>
  );
};

const DatabaseTechnologies = () => {
  return (
    <SvgContainer>
      <Svg src="/img/tech-svg/mysql.svg" />
      <Svg src="/img/tech-svg/postgresql.svg" />
      <Svg src="/img/tech-svg/oracle.svg" />
      <Svg src="/img/tech-svg/mongodb.svg" />
      <Svg src="/img/tech-svg/elasticsearch.svg" />
    </SvgContainer>
  );
};

const FrontendTechnologies = () => (
  <SvgContainer>
    <Svg src="/img/tech-svg/html.svg" />
    <Svg src="/img/tech-svg/css.svg" />
    <Svg src="/img/tech-svg/js.svg" />
    <Svg src="/img/tech-svg/ts.svg" />
    <Svg src="/img/tech-svg/react.svg" />
  </SvgContainer>
);

const Tools = () => (
  <SvgContainer>
    <Svg src="/img/tech-svg/git.svg" />
    <Svg src="/img/tech-svg/jira.svg" />
    <Svg src="/img/tech-svg/jenkins.svg" />
    <Svg src="/img/tech-svg/docker.svg" />
  </SvgContainer>
);

function Skills() {
  const { t } = useTranslation();

  return (
    <SkillsContainer>
      <SubsectionContainer>
        <Strengths />
      </SubsectionContainer>
      <SubsectionContainer>
        <SubsectionHeader>
          {t("skills.certificationsSubheader")}
        </SubsectionHeader>
        <Courses />
      </SubsectionContainer>
      <SubsectionContainer>
        <SubsectionHeader>{t("skills.technologiesSubheader")}</SubsectionHeader>
        <TechnologiesContainer>
          <BackendTechnologies />
          <FrontendTechnologies />
          <DatabaseTechnologies />
          <Tools />
        </TechnologiesContainer>
      </SubsectionContainer>
    </SkillsContainer>
  );
}

export default Skills;
