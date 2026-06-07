import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import ne from "./ne.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ne: { translation: ne },
  },
  lng: "ne",
  fallbackLng: "ne",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;