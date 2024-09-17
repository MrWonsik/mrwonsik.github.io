import React, { Fragment } from "react";
import styled from "styled-components";
import EmploymentHistoryCard from "./EmploymentHistoryCard";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { employmentHistoryData } from "./data";

const EmploymentHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const PiArrowFatLineUpFillStyled = styled(MdKeyboardDoubleArrowUp)`
  font-size: 100px;
  align-self: center;
`;

function EmploymentHistory() {
  return (
    <EmploymentHistoryContainer>
      {employmentHistoryData.map((employmentHistory, index) => (
        <Fragment key={employmentHistory.id}>
          <EmploymentHistoryCard employmentHistory={employmentHistory} />
          {employmentHistoryData.length - 1 != index && (
            <PiArrowFatLineUpFillStyled />
          )}
        </Fragment>
      ))}
    </EmploymentHistoryContainer>
  );
}

export default EmploymentHistory;
