import React, { Fragment } from "react";
import styled from "styled-components";
import EmploymentHistoryCard from "./EmploymentHistoryCard";
import { employmentHistoryData } from "./data";
import { TimelineConnector } from "../../components/TimelineConnector";

const EmploymentHistoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

function EmploymentHistory() {
  return (
    <EmploymentHistoryContainer>
      {employmentHistoryData.map((employmentHistory, index) => (
        <Fragment key={employmentHistory.id}>
          <EmploymentHistoryCard employmentHistory={employmentHistory} />
          {employmentHistoryData.length - 1 != index && (<TimelineConnector />)}
        </Fragment>
      ))}
    </EmploymentHistoryContainer>
  );
}

export default EmploymentHistory;