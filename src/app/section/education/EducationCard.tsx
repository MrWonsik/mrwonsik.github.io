import React from "react";
import { EducationInfo } from "./EducationInfo";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { BiSolidCalendar } from "react-icons/bi";
import { PiArrowFatLinesRightFill } from "react-icons/pi";
import { device } from "../../../const";
import {
  BoldedParagraph,
  ItalicParagraph,
  JustifiedParagraph,
} from "../../ParagraphsAndHeaders";

const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
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
  flex: 1;
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

function EducationCard({ educationInfo }: { educationInfo: EducationInfo }) {
  const { t } = useTranslation();

  return (
    <TabContainer>
      <BasicInfo>
        <CompanyLogoContainer>
          <img src={educationInfo.university.logoSrc} alt={"university logo"} />
        </CompanyLogoContainer>
        <NameAndRoleFields>
          <BoldedParagraph>{educationInfo.university.name}</BoldedParagraph>
          <ItalicParagraph>{educationInfo.title}</ItalicParagraph>
        </NameAndRoleFields>
        <PeriodContainer>
          <BiSolidCalendar />
          <p>{educationInfo.startDate}</p>
          <PiArrowFatLinesRightFill />
          <p>{educationInfo.endDate}</p>
        </PeriodContainer>
        {educationInfo.descriptionComponent}
      </BasicInfo>
    </TabContainer>
  );
}

export default EducationCard;
