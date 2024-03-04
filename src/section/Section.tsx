import React from "react";
import styled from "styled-components";

interface SectionProps {
  id: string;
  header: string;
  component: JSX.Element;
  mobileIcon: JSX.Element;
}

const SectionContainer = styled.section`
  padding: 20px;
  margin: 10px;
  justify-content: center;
`;

const SectionHeader = styled.h2`
  font-size: 60px;
  margin-top: 30px;
  text-align: center;
`;

function Section(props: SectionProps) {
  return (
    <SectionContainer id={props.id} className={"sectionContainer"}>
      <SectionHeader>{props.header}</SectionHeader>
      {props.component}
    </SectionContainer>
  );
}

export default Section;
