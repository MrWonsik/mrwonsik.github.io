import React, { Fragment } from "react";
import styled from "styled-components";
import EducationCard from "./EducationCard";
import { educationData } from "./data";
import { TimelineConnector } from "../../components/TimelineConnector";

const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

function Education() {
  return (
    <EducationContainer>
      {educationData.map((education, index) => (
        <Fragment key={education.id}>
          <EducationCard educationInfo={education} />
          {educationData.length - 1 != index && <TimelineConnector />}
        </Fragment>
      ))}
    </EducationContainer>
  );
}

export default Education;
