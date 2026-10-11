import React from "react";
import styled from "styled-components";
import { SecondaryHeader } from "../components/ParagraphsAndHeaders";

interface SectionProps {
  id: string;
  displayHeader: boolean;
  header: string;
  component: JSX.Element;
  mobileIcon: JSX.Element;
  isLast: boolean;
}

interface SectionContainerProps {
  $isLast: boolean;
}

const SectionContainer = styled.section<SectionContainerProps>`
  padding: 20px;
  margin: 10px;
  margin-bottom: ${({ $isLast }) => ($isLast ? "160px" : "0")};
`;

function Section(props: SectionProps) {
  console.log(props.isLast);
  return (
    <SectionContainer id={props.id} className={"sectionContainer"} $isLast={props.isLast}>
      {props.displayHeader && <SecondaryHeader>{props.header}</SecondaryHeader>}
      {props.component}
    </SectionContainer>
  );
}

export default Section;
