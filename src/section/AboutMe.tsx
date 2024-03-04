import React from "react";
import { useTranslation } from "react-i18next";

//A brief introduction about yourself, including your name, professional title, and a summary of your skills, experiences, and interests.

function AboutMe() {
  const { t } = useTranslation();

  return (
    <div>
      <p>{t("aboutMe.firstParagraph")}</p>
      <p>{t("aboutMe.secondParagraph")}</p>
    </div>
  );
}

export default AboutMe;
