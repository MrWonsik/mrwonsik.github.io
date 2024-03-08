import React from "react";
import { EmploymentHistoryInfo } from "./EmploymentHistoryInfo";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { BiSolidCalendar } from "react-icons/bi";
import { PiArrowFatLinesRightFill } from "react-icons/pi";
import { device } from "../../../const";
import { BoldedParagraph, ItalicParagraph } from "../../ParagraphsAndHeaders";
import { MdKeyboardArrowRight } from "react-icons/md";

const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 100px;
  @media ${device.tablet} {
    flex-direction: column;
    gap: 50px;
  }
`;

const CompanyLogoContainer = styled.div`
  max-width: 300px;
  min-width: 50px;
  align-self: center;
  & img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const BasicInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 10px 10px;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 40%;
  & p {
    margin: 5px;
  }
`;

const NameAndRoleFields = styled.div`
  padding: 20px;
  & ${BoldedParagraph}, & ${ItalicParagraph} {
    margin: 5px;
  }
`;

const PeriodContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  & p {
    font-size: 22px;
    margin: 10px;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

const ResponsibilityContainer = styled.div`
  padding: 5px;
  & span {
    margin-left: 10px;
  }
`;

function EmploymentHistoryCard({
  employmentHistory,
}: {
  employmentHistory: EmploymentHistoryInfo;
}) {
  const { t } = useTranslation();

  return (
    <TabContainer>
      <BasicInfo>
        <CompanyLogoContainer>
          <img src={employmentHistory.company.logo} alt={"company logo"} />
        </CompanyLogoContainer>
        <NameAndRoleFields>
          <BoldedParagraph>{employmentHistory.company.name}</BoldedParagraph>
          <ItalicParagraph>{employmentHistory.role}</ItalicParagraph>
        </NameAndRoleFields>
        <PeriodContainer>
          <BiSolidCalendar />
          <p>{employmentHistory.startDate}</p>
          <PiArrowFatLinesRightFill />
          <p>{employmentHistory.endDate || t("employmenthistory.current")}</p>
        </PeriodContainer>
      </BasicInfo>
      <Details>
        {employmentHistory.responsibilities.map((responsible, index) => {
          return (
            <ResponsibilityContainer key={index}>
              <MdKeyboardArrowRight />
              <span>{responsible}</span>
            </ResponsibilityContainer>
          );
        })}
      </Details>
    </TabContainer>
  );
}

export default EmploymentHistoryCard;
