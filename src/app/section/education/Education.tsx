import React from "react";
import styled from "styled-components";
import EducationCard from "./EducationCard";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { educationData } from "./data";

const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const PiArrowFatLineUpFillStyled = styled(MdKeyboardDoubleArrowUp)`
  font-size: 100px;
  align-self: center;
`;

function Education() {
  return (
    <EducationContainer>
      {educationData.map((education, index) => (
        <>
          <EducationCard key={education.id} educationInfo={education} />
          {educationData.length - 1 != index && <PiArrowFatLineUpFillStyled />}
        </>
      ))}
    </EducationContainer>
  );
}

export default Education;
