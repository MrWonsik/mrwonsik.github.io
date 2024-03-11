import React from "react";
import { useTranslation } from "react-i18next";
import { ThirdHeader } from "../../ParagraphsAndHeaders";
import Strengths from "./Strengths";
import styled from "styled-components";
import { Svg, SvgContainer } from "./SvgContainer";
import QuoteBox from "../../QuoteBox";
import PersonalCard from "./PersonalCard";

const SubsectionContainer = styled.div`
  margin: 80px 0;
`;

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

function AboutMe() {
  const { t } = useTranslation();

  return (
    <div>
      <PersonalCard />
      <SubsectionContainer>
        <Strengths />
      </SubsectionContainer>
      <QuoteBox
        author={"Bob Martin"}
        authorImageUrl={"/img/unclebob.jpg"}
        sentence={"It is not enough for code to work."}
      />
      <SubsectionContainer>
        <ThirdHeader>{t("skills.technologiesSubheader")}</ThirdHeader>
        <div>
          <BackendTechnologies />
          <FrontendTechnologies />
          <DatabaseTechnologies />
          <Tools />
        </div>
      </SubsectionContainer>
    </div>
  );
}

export default AboutMe;
