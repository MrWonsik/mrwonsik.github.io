import React from "react";
import { useTranslation } from "react-i18next";
import JustifiedParagraph from "../navigation/JustifiedParagraph";

//A brief introduction about yourself, including your name, professional title, and a summary of your skills, experiences, and interests.

function AboutMe() {
  const { t } = useTranslation();

  return (
    <div>
      <JustifiedParagraph>{t("aboutMe.firstParagraph")}</JustifiedParagraph>
      <JustifiedParagraph>{t("aboutMe.secondParagraph")}</JustifiedParagraph>
    </div>
  );
}

export default AboutMe;
