import React from "react";
import { EducationInfo } from "./EducationInfo";
import { useTranslation } from "react-i18next";
import { BoldedParagraph, ItalicParagraph } from "../../ParagraphsAndHeaders";
import HorizontalCard from "../HorizontalCard";

function EducationCard({ educationInfo }: { educationInfo: EducationInfo }) {
  const { t } = useTranslation();

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
      detailComponent={educationInfo.descriptionComponent}
    />
  );
}

export default EducationCard;
