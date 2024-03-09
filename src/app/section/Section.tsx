import React from "react";
import styled from "styled-components";
import { SecondaryHeader } from "../ParagraphsAndHeaders";

interface SectionProps {
  id: string;
  displayHeader: boolean;
  header: string;
  component: JSX.Element;
  mobileIcon: JSX.Element;
}

const SectionContainer = styled.section`
  padding: 20px;
  margin: 10px;
  justify-content: center;
`;

function Section(props: SectionProps) {
  return (
    <SectionContainer id={props.id} className={"sectionContainer"}>
      {props.displayHeader && <SecondaryHeader>{props.header}</SecondaryHeader>}
      {props.component}
    </SectionContainer>
  );
}

export default Section;
