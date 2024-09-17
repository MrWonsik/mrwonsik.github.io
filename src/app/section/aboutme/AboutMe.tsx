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
      <Svg src="/assets/tech-svg/java.svg" />
      <Svg src="/assets/tech-svg/spring.svg" />
      <Svg src="/assets/tech-svg/JUnit5.png" />
      <Svg src="/assets/tech-svg/mockito.png" />
    </SvgContainer>
  );
};

const DatabaseTechnologies = () => {
  return (
    <SvgContainer>
      <Svg src="/assets/tech-svg/mysql.svg" />
      <Svg src="/assets/tech-svg/postgresql.svg" />
      <Svg src="/assets/tech-svg/oracle.svg" />
      <Svg src="/assets/tech-svg/mongodb.svg" />
      <Svg src="/assets/tech-svg/elasticsearch.svg" />
    </SvgContainer>
  );
};

const FrontendTechnologies = () => (
  <SvgContainer>
    <Svg src="/assets/tech-svg/html.svg" />
    <Svg src="/assets/tech-svg/css.svg" />
    <Svg src="/assets/tech-svg/js.svg" />
    <Svg src="/assets/tech-svg/ts.svg" />
    <Svg src="/assets/tech-svg/react.svg" />
  </SvgContainer>
);

const Tools = () => (
  <SvgContainer>
    <Svg src="/assets/tech-svg/git.svg" />
    <Svg src="/assets/tech-svg/jira.svg" />
    <Svg src="/assets/tech-svg/jenkins.svg" />
    <Svg src="/assets/tech-svg/docker.svg" />
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
        authorImageUrl={"/assets/unclebob.jpg"}
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
