import React from "react";
import { EducationInfo } from "./EducationInfo";
import {
  BoldedParagraph,
  ItalicParagraph,
  JustifiedParagraph,
} from "../../ParagraphsAndHeaders";
import HorizontalCard from "../HorizontalCard";
import { Trans, useTranslation } from "react-i18next";
import styled from "styled-components";

const DescriptionContainer = styled.div`
  margin: 30px 0;
  display: block;
  text-align: left;
`;

const PKDescription = () => {
  return (
    <DescriptionContainer>
      <JustifiedParagraph>
        <Trans i18nKey={"education.pk.description.paragraph1"} />
      </JustifiedParagraph>
      <JustifiedParagraph>
        <Trans i18nKey={"education.pk.description.paragraph2"} />
      </JustifiedParagraph>
      <JustifiedParagraph>
        <Trans i18nKey={"education.pk.description.paragraph3"} />
      </JustifiedParagraph>
    </DescriptionContainer>
  );
};

const ZSEDescription = () => {
  const { t } = useTranslation();

  return (
    <DescriptionContainer>
      <JustifiedParagraph>
        {t("education.zse.description.paragraph1")}
      </JustifiedParagraph>
      <p>
        <strong>E12</strong> - {t("education.zse.description.e12")}
      </p>
      <p>
        <strong>E13</strong> - {t("education.zse.description.e13")}
      </p>
      <p>
        <strong>E14</strong> - {t("education.zse.description.e14")}
      </p>
      <JustifiedParagraph>
        <Trans i18nKey={"education.zse.description.paragraph2"} />
      </JustifiedParagraph>
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
  return (
    <HorizontalCard
      logo={{
        src: educationInfo.university.logoSrc,
        alt: "universityLogo",
      }}
      fields={[
        <BoldedParagraph key="companyName">
          {educationInfo.university.name}
        </BoldedParagraph>,
        <ItalicParagraph key="companyRole">
          {educationInfo.title}
        </ItalicParagraph>,
      ]}
      period={{
        startDate: educationInfo.startDate,
        endDate: educationInfo.endDate,
      }}
      detailComponent={obtainDescriptionComponent(educationInfo.id)}
    />
  );
}

export default EducationCard;
