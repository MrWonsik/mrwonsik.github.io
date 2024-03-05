import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import BackendTechnologies from "../skills/BackendTechnologies";
import FrontendTechnologies from "../skills/FrontendTechnologies";
import DatabaseTechnologies from "../skills/DatabaseTechnologies";
import Tools from "../skills/Tools";
import Strengths from "../skills/Strengths";

const SkillsContainer = styled.div``;

const SubsectionContainer = styled.div`
  margin: 80px 0;
`;

const SubsectionHeader = styled.h3`
  font-size: 40px;
  margin-top: 10px;
  text-align: center;
`;

interface SkillsSubsection {
  key: string;
  header?: string;
  component: JSX.Element;
}

function Skills() {
  const { t } = useTranslation();

  const skillsSubsection: Array<SkillsSubsection> = [
    {
      key: "strengths",
      component: <Strengths />,
    },
    {
      key: "certifications",
      header: t("skills.certificationsSubheader"),
      component: <></>,
    },
    {
      key: "backend",
      header: t("skills.backendTechnologiesSubheader"),
      component: <BackendTechnologies />,
    },
    {
      key: "frontend",
      header: t("skills.frontendTechnologiesSubheader"),
      component: <FrontendTechnologies />,
    },
    {
      key: "databases",
      header: t("skills.databaseTechnologiesSubheader"),
      component: <DatabaseTechnologies />,
    },
    {
      key: "tools",
      header: t("skills.toolsSubheader"),
      component: <Tools />,
    },
  ];

  return (
    <SkillsContainer>
      {skillsSubsection.map((skillSubsection) => (
        <SubsectionContainer key={skillSubsection.key}>
          {skillSubsection.header && (
            <SubsectionHeader>{skillSubsection.header}</SubsectionHeader>
          )}
          {skillSubsection.component}
        </SubsectionContainer>
      ))}
    </SkillsContainer>
  );
}

export default Skills;
