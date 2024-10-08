import React from "react";
import { EmploymentHistoryInfo } from "./EmploymentHistoryInfo";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { BoldedParagraph, ItalicParagraph } from "../../ParagraphsAndHeaders";
import { MdKeyboardArrowRight } from "react-icons/md";
import HorizontalCard from "../HorizontalCard";

const ResponsibilityContainer = styled.div`
  padding: 5px;
  & span {
    text-align: justify;
    margin-left: 10px;
  }
`;

function EmploymentHistoryCard({
  employmentHistory,
}: {
  employmentHistory: EmploymentHistoryInfo;
}) {
  const { t } = useTranslation();

  const obtainEndDate = () => {
    if (employmentHistory.endDate) {
      return `${t(employmentHistory.endDate)} ${employmentHistory.endYear}`;
    }
    return t("employmenthistory.current");
  };

  return (
    <HorizontalCard
      logo={{
        src: employmentHistory.company.logo,
        alt: "comapnyLogo",
      }}
      fields={[
        <BoldedParagraph key="companyName">
          {employmentHistory.company.name}
        </BoldedParagraph>,
        <ItalicParagraph key="companyRole">
          {employmentHistory.role}
        </ItalicParagraph>,
      ]}
      period={{
        startDate: `${t(employmentHistory.startDate)} ${employmentHistory.startYear}`,
        endDate: obtainEndDate(),
      }}
      detailComponent={
        <>
          {employmentHistory.responsibilities.map((responsible, index) => {
            return (
              <ResponsibilityContainer key={index}>
                <MdKeyboardArrowRight />
                <span>{t(responsible)}</span>
              </ResponsibilityContainer>
            );
          })}
        </>
      }
    />
  );
}

export default EmploymentHistoryCard;
