import React from "react";
import { EducationInfo } from "./EducationInfo";
import HorizontalCard from "../../components/HorizontalCard";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { AppTranslation } from "../../components/AppTranslation";

const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    text-align: left;
`;

const EducationParagraph = styled.p`
  margin: 0;
  font-size: 20px;
  line-height: 1.6;
  color: ${(props) => props.theme.textColor};
  opacity: 0.9;
`;

const QualList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 8px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const QualItem = styled.li`
  position: relative;
  padding-left: 24px;
  font-size: 20px;
  line-height: 1.5;
  color: ${(props) => props.theme.textColor};
  opacity: 0.95;

  &::before {
    content: ">";
    position: absolute;
    left: 0;
    top: -2px;
    color: ${(props) => props.theme.accentColor};
    font-size: 21px;
    font-weight: bold;
  }

  strong {
    color: ${(props) => props.theme.accentColor};
    font-weight: 700;
  }
`;

const UniversityName = styled.span`
  font-style: italic;
  font-size: 22px;
  color: ${(props) => props.theme.textColor};
  opacity: 0.85;
`;

const DegreeTitle = styled.h3`
  font-size: 25px;
  font-weight: 700;
  margin: 4px 0 0 0;
  color: ${(props) => props.theme.accentColor};
`;

const PKDescription = () => {
  return (
    <DescriptionContainer>
      <EducationParagraph>
        <AppTranslation translationKey={"education.pk.description.paragraph1"} />
      </EducationParagraph>
      <EducationParagraph>
        <AppTranslation translationKey={"education.pk.description.paragraph2"} />
      </EducationParagraph>
      <EducationParagraph>
        <AppTranslation translationKey={"education.pk.description.paragraph3"} />
      </EducationParagraph>
    </DescriptionContainer>
  );
};

const ZSEDescription = () => {
  const { t } = useTranslation();

  return (
    <DescriptionContainer>
      <EducationParagraph>
        <AppTranslation translationKey={"education.zse.description.paragraph1"} />
      </EducationParagraph>

      <QualList>
        <QualItem>
          <strong>E12:</strong> {t("education.zse.description.e12")}
        </QualItem>
        <QualItem>
          <strong>E13:</strong> {t("education.zse.description.e13")}
        </QualItem>
        <QualItem>
          <strong>E14:</strong> {t("education.zse.description.e14")}
        </QualItem>
      </QualList>

      <EducationParagraph>
        <AppTranslation translationKey={"education.zse.description.paragraph2"} />
      </EducationParagraph>
    </DescriptionContainer>
  );
};

function obtainDescriptionComponent(id: string) {
  switch (id) {
    case "pk":
      return <PKDescription />;
    case "zse":
      return <ZSEDescription />;
    default:
      console.error("invalid description component");
      return <></>;
  }
}

function EducationCard({ educationInfo }: { educationInfo: EducationInfo }) {
  const { t } = useTranslation();
  return (
    <HorizontalCard
      logo={{
        src: educationInfo.university.logoSrc,
        alt: educationInfo.university.name || "universityLogo",
      }}
      fields={[
        <UniversityName key="universityName">
          {educationInfo.university.name && t(educationInfo.university.name)}
        </UniversityName>,
        <DegreeTitle key="degreeTitle">
          {t(educationInfo.title)}
        </DegreeTitle>,
      ]}
      period={{
        startDate: `${t(educationInfo.startDate)} ${educationInfo.startYear}`,
        endDate: `${t(educationInfo.endDate)} ${educationInfo.endYear}`,
      }}
      detailComponent={obtainDescriptionComponent(educationInfo.id)}
    />
  );
}

export default EducationCard;