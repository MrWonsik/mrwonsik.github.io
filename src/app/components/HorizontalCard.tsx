import React, { ReactNode, useEffect, useRef, useState } from "react";
import { BiSolidCalendar } from "react-icons/bi";
import styled from "styled-components";
import { device } from "../../const";

interface CardContainerProps {
  $isActive: boolean;
}

const CardContainer = styled.div<CardContainerProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 28px;
    padding: 28px;
    border-radius: 16px;
    background-color: ${(props) => props.theme.mainColor};

    border: 1px solid ${(props) => props.$isActive ? props.theme.accentColor : "rgba(255, 255, 255, 0.08)"};
    box-shadow: ${(props) => props.$isActive
            ? `0 10px 30px -5px ${props.theme.accentColor}33, 0 0 20px 2px${props.theme.accentColor}22, 0 4px 12px rgba(0, 0, 0, 0.25)`
            : "0 4px 12px rgba(0, 0, 0, 0.25)"};

    overflow: hidden;

    transform: ${(props) => props.$isActive ? "translateY(-4px) scale(1.01)" : "translateY(0) scale(1)"};
    transition: border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);

    @media ${device.tablet} {
        flex-direction: column;
        gap: 24px;
    }
`;

const BasicInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 400px;
    flex-shrink: 0;

    @media ${device.tablet} {
        width: 100%;
    }
`;

const CompanyLogoContainer = styled.div`
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 14px;

    img {
        max-width: 150px;
        max-height: 100%;
        object-fit: contain;
        filter: ${(props) => props.theme.showFilterDropShadow ? `drop-shadow(0px 0px 50px ${props.theme.accentColor}60)` : "none"};
    }
`;

const Fields = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 16px;
`;

const PeriodContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 22px;
    color: ${(props) => props.theme.textColor};
    opacity: 0.85;
    background: rgba(255, 255, 255, 0.05);
    padding: 8px 14px;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.08);

    svg {
        color: ${(props) => props.theme.accentColor};
        font-size: 30px;
    }
`;

const Details = styled.div`
    flex: 1;
    position: relative;
    padding-left: 28px;

    &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 2px;
        border-radius: 2px;
        background: linear-gradient(
                to bottom,
                rgba(255, 255, 255, 0.05) 0%,
                ${(props) => props.theme.accentColor} 50%,
                rgba(255, 255, 255, 0.05) 100%
        );
    }

    @media ${device.tablet} {
        padding-left: 0;
        padding-top: 24px;
        width: 100%;

        &::before {
            top: 0;
            left: 0;
            right: 0;
            bottom: auto;
            width: 100%;
            height: 2px;
            background: linear-gradient(
                    to right,
                    rgba(255, 255, 255, 0.05) 0%,
                    ${(props) => props.theme.accentColor} 50%,
                    rgba(255, 255, 255, 0.05) 100%
            );
        }
    }
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
  const [isFocused, setIsFocused] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFocused(entry.isIntersecting);
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    const currentCard = cardRef.current;
    if (currentCard) {
      observer.observe(currentCard);
    }

    return () => {
      if (currentCard) {
        observer.unobserve(currentCard);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <CardContainer ref={cardRef} $isActive={isFocused}>
      <BasicInfo>
        <CompanyLogoContainer>
          <img src={logo.src} alt={logo.alt} />
        </CompanyLogoContainer>
        <Fields>{fields.map((f: ReactNode) => f)}</Fields>
        {period && (
          <PeriodContainer>
            <BiSolidCalendar />
            <span>
              {period.startDate} – {period.endDate}
            </span>
          </PeriodContainer>
        )}
      </BasicInfo>
      <Details>{detailComponent}</Details>
    </CardContainer>
  );
}

export default HorizontalCard;