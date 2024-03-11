import React from "react";
import styled from "styled-components";
import { Trans, useTranslation } from "react-i18next";
import EducationCard from "./EducationCard";
import { EducationInfo } from "./EducationInfo";
import { JustifiedParagraph } from "../../ParagraphsAndHeaders";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const PiArrowFatLineUpFillStyled = styled(MdKeyboardDoubleArrowUp)`
  font-size: 100px;
  align-self: center;
`;

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

function Education() {
  const { t } = useTranslation();

  const educationData: Array<EducationInfo> = [
    {
      id: "pk",
      university: {
        name: t("education.pk.name"),
        logoSrc: "/img/education/pk.png",
      },
      title: t("education.pk.title"),
      startDate: `${t("month.sep")} 2017`,
      endDate: `${t("month.sep")} 2021`,
      descriptionComponent: <PKDescription />,
    },
    {
      id: "zse",
      university: {
        name: t("education.zse.name"),
        logoSrc: "/img/education/zse.png",
      },
      title: t("education.zse.title"),
      startDate: `${t("month.sep")} 2012`,
      endDate: `${t("month.sep")} 2016`,
      descriptionComponent: <ZSEDescription />,
    },
  ];

  return (
    <EducationContainer>
      {educationData.map((education, index) => (
        <>
          <EducationCard key={education.id} educationInfo={education} />
          {educationData.length - 1 != index && <PiArrowFatLineUpFillStyled />}
        </>
      ))}
    </EducationContainer>
  );
}

export default Education;
