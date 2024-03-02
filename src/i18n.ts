// i18n.js or i18n.ts

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationPL from "./locales/pl.json";
import translationEN from "./locales/en.json";

// Define translations for your languages
const resources = {
  en: {
    translation: translationEN,
  },
  pl: {
    translation: translationPL,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "pl", // default language
    fallbackLng: "pl", // fallback language
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
