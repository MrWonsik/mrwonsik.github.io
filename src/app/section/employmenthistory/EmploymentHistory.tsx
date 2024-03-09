import React from "react";
import { EmploymentHistoryInfo } from "./EmploymentHistoryInfo";
import styled from "styled-components";
import EmploymentHistoryCard from "./EmploymentHistoryCard";
import { useTranslation } from "react-i18next";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

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
  const { t } = useTranslation();

  const employmentHistoryData: Array<EmploymentHistoryInfo> = [
    {
      id: 1,
      company: {
        name: "Cornerstone OnDemand",
        logo: "/img/companies/cornerstone.png",
      },
      role: "Software Engineer",
      startDate: `${t("month.mar")} 2022`,
      responsibilities: [
        t("employmenthistory.cornerstone.softwareengineer.resp1"),
        t("employmenthistory.cornerstone.softwareengineer.resp2"),
        t("employmenthistory.cornerstone.softwareengineer.resp3"),
        t("employmenthistory.cornerstone.softwareengineer.resp4"),
        t("employmenthistory.cornerstone.softwareengineer.resp5"),
      ],
    },
    {
      id: 2,
      company: {
        name: "Cornerstone OnDemand",
        logo: "/img/companies/cornerstone.png",
      },
      role: "Junior Software Engineer",
      startDate: `${t("month.sep")} 2020`,
      endDate: `${t("month.mar")} 2022`,
      responsibilities: [
        t("employmenthistory.cornerstone.juniorsoftwareengineer.resp1"),
        t("employmenthistory.cornerstone.juniorsoftwareengineer.resp2"),
        t("employmenthistory.cornerstone.juniorsoftwareengineer.resp3"),
        t("employmenthistory.cornerstone.juniorsoftwareengineer.resp4"),
        t("employmenthistory.cornerstone.juniorsoftwareengineer.resp5"),
      ],
    },
    {
      id: 3,
      company: {
        name: "Saba Software",
        logo: "/img/companies/saba.png",
      },
      role: "Intern Software Developer",
      startDate: `${t("month.jan")} 2020`,
      endDate: `${t("month.sep")} 2020`,
      responsibilities: [
        t("employmenthistory.cornerstone.internsoftwaredeveloper.resp1"),
        t("employmenthistory.cornerstone.internsoftwaredeveloper.resp2"),
        t("employmenthistory.cornerstone.internsoftwaredeveloper.resp3"),
        t("employmenthistory.cornerstone.internsoftwaredeveloper.resp4"),
        t("employmenthistory.cornerstone.internsoftwaredeveloper.resp5"),
      ],
    },
    {
      id: 3,
      company: {
        name: "i2B IT to Business Solutions",
        logo: "/img/companies/i2b.png",
      },
      role: "IT Specialist",
      startDate: `${t("month.jan")} 2020`,
      endDate: `${t("month.sep")} 2020`,
      responsibilities: [
        t("employmenthistory.i2b.itspecialist.resp1"),
        t("employmenthistory.i2b.itspecialist.resp2"),
        t("employmenthistory.i2b.itspecialist.resp3"),
        t("employmenthistory.i2b.itspecialist.resp4"),
        t("employmenthistory.i2b.itspecialist.resp5"),
        t("employmenthistory.i2b.itspecialist.resp6"),
        t("employmenthistory.i2b.itspecialist.resp7"),
        t("employmenthistory.i2b.itspecialist.resp8"),
        t("employmenthistory.i2b.itspecialist.resp9"),
        t("employmenthistory.i2b.itspecialist.resp10"),
      ],
    },
  ];

  return (
    <EmploymentHistoryContainer>
      {employmentHistoryData.map((employmentHistory, index) => (
        <>
          <EmploymentHistoryCard
            key={employmentHistory.id}
            employmentHistory={employmentHistory}
          />
          {employmentHistoryData.length - 1 != index && (
            <PiArrowFatLineUpFillStyled />
          )}
        </>
      ))}
    </EmploymentHistoryContainer>
  );
}

export default EmploymentHistory;
