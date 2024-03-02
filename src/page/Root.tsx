import React from "react";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

//A contact page with your contact information, including email address, phone number, LinkedIn profile, GitHub profile, or other social media profiles.
//You can also include a contact form for visitors to send you messages directly from your website.

function Root() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("greeting")}</h1>
      <button onClick={() => i18n.changeLanguage("pl")}>PL</button>
      <button onClick={() => i18n.changeLanguage("en")}>EN</button>
      <Outlet />
    </div>
  );
}

export default Root;
