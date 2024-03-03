import React from "react";
import styled from "styled-components";

interface SectionProps {
  id: string;
  header: string;
  component: JSX.Element;
}

const SectionContainer = styled.section`
  padding: 20px;
  margin: 10px;
`;

function Section(props: SectionProps) {
  return (
    <SectionContainer id={props.id} className={"sectionContainer"}>
      <div className={"sectionHeader"}>
        <h2>{props.header}</h2>
        {props.component}
      </div>
    </SectionContainer>
  );
}

export default Section;
