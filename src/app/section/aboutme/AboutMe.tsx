import React from "react";
import { ThirdHeader } from "../../components/ParagraphsAndHeaders";
import Strengths from "./Strengths";
import styled from "styled-components";
import { TechOrbit, TechOrbitItem } from "./SvgContainer";
import QuoteBox from "./QuoteBox";
import PersonalCard from "./PersonalCard";
import { AppTranslation } from "../../components/AppTranslation";

const SubsectionContainer = styled.div`
  margin: 80px 0;
`;

const technologies = [
  { src: "/assets/tech-svg/java.svg", angle: 320, distance: 110 },
  { src: "/assets/tech-svg/spring.svg", angle: 50, distance: 50 },
  { src: "/assets/tech-svg/react.svg", angle: 230, distance: 110 },
  { src: "/assets/tech-svg/ts.svg", angle: 123, distance: 160 },

  { src: "/assets/tech-svg/html.svg", angle: 0, distance: 250 },
  { src: "/assets/tech-svg/css.svg", angle: 40, distance: 250 },
  { src: "/assets/tech-svg/js.svg", angle: 80, distance: 250 },
  { src: "/assets/tech-svg/mysql.svg", angle: 110, distance: 300 },
  { src: "/assets/tech-svg/postgresql.svg", angle: 170, distance: 230 },
  { src: "/assets/tech-svg/oracle.svg", angle: 223, distance: 243 },
  { src: "/assets/tech-svg/mongodb.svg", angle: 277, distance: 260 },
  { src: "/assets/tech-svg/JUnit5.png", angle: 313, distance: 245 },

  { src: "/assets/tech-svg/elasticsearch.svg", angle: 0, distance: 460 },
  { src: "/assets/tech-svg/mockito.png", angle: 155, distance: 370 },
  { src: "/assets/tech-svg/git.svg", angle: 240, distance: 370 },
  { src: "/assets/tech-svg/jira.svg", angle: 290, distance: 370 },
  { src: "/assets/tech-svg/jenkins.svg", angle: 193, distance: 370 },
  { src: "/assets/tech-svg/docker.svg", angle: 45, distance: 370 },
] as const;

const TechnologiesOrbit = () => (
  <TechOrbit>

    {technologies.map((technology) => (
      <TechOrbitItem
        key={technology.src}
        $angle={technology.angle}
        $distance={technology.distance}
      >
        <img src={technology.src} />
      </TechOrbitItem>
    ))}
  </TechOrbit>
);

function AboutMe() {
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
        <ThirdHeader>
          <AppTranslation translationKey={"skills.technologiesSubheader"} />
        </ThirdHeader>
        <TechnologiesOrbit />
      </SubsectionContainer>
    </div>
  );
}

export default AboutMe;