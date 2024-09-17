import React, { ReactNode } from "react";
import { BiSolidCalendar } from "react-icons/bi";
import { PiArrowFatLinesRightFill } from "react-icons/pi";
import styled from "styled-components";
import { device } from "../../const";

const CardContainer = styled.div`
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

const Fields = styled.div`
  padding: 20px;
  & p {
    margin: 5px;
  }
`;

const PeriodContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  & p {
    margin: 10px;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
`;

interface HorizontalCardProps {
  logo: {
    src: string;
    alt: string;
  };
  fields: Array<JSX.Element>;
  period: {
    startDate: string;
    endDate: string;
  };
  detailComponent: JSX.Element;
}

function HorizontalCard({
  logo,
  fields,
  period,
  detailComponent,
}: HorizontalCardProps) {
  return (
    <CardContainer>
      <BasicInfo>
        <CompanyLogoContainer>
          <img src={logo.src} alt={logo.alt} />
        </CompanyLogoContainer>
        <Fields>{fields.map((f: ReactNode) => f)}</Fields>
        {period && (
          <PeriodContainer>
            <BiSolidCalendar />
            <p>{period.startDate}</p>
            <PiArrowFatLinesRightFill />
            <p>{period.endDate}</p>
          </PeriodContainer>
        )}
      </BasicInfo>
      <Details>{detailComponent}</Details>
    </CardContainer>
  );
}

export default HorizontalCard;
