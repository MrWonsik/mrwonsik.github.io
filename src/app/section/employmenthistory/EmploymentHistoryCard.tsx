import React from "react";
import { EmploymentHistoryInfo } from "./EmploymentHistoryInfo";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import HorizontalCard from "../../components/HorizontalCard";
import { AppTranslation } from "../../components/AppTranslation";

const ResponsibilityList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const ResponsibilityItem = styled.li`
    position: relative;
    padding-left: 24px;
    font-size: 20px;
    line-height: 1.6;
    color: ${(props) => props.theme.textColor};
    opacity: 0.9;
    text-align: left;

    &::before {
        content: "•";
        position: absolute;
        left: 0;
        top: -2px;
        color: ${(props) => props.theme.accentColor};
        font-size: 1.4rem;
        font-weight: bold;
    }
`;

const CompanyName = styled.span`
    font-style: italic;
    font-size: 22px;
    color: ${(props) => props.theme.textColor || "#e2e8f0"};
    opacity: 0.85;
`;

const CompanyRole = styled.h3`
    font-size: 25px;
    font-weight: 700;
    margin: 4px 0 0 0;
    color: ${(props) => props.theme.accentColor || "#8b5cf6"};
`;

function EmploymentHistoryCard({ employmentHistory }: { employmentHistory: EmploymentHistoryInfo }) {
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
        alt: employmentHistory.company.name || "companyLogo",
      }}
      fields={[
        <CompanyName key="companyName">
          {employmentHistory.company.name}
        </CompanyName>,
        <CompanyRole key="companyRole">
          {employmentHistory.role}
        </CompanyRole>,
      ]}
      period={{
        startDate: `${t(employmentHistory.startDate)} ${employmentHistory.startYear}`,
        endDate: obtainEndDate(),
      }}
      detailComponent={
        <ResponsibilityList>
          {employmentHistory.responsibilities.map((responsible, index) => (
            <ResponsibilityItem key={index}>
              <AppTranslation translationKey={responsible} />
            </ResponsibilityItem>
          ))}
        </ResponsibilityList>
      }
    />
  );
}

export default EmploymentHistoryCard;