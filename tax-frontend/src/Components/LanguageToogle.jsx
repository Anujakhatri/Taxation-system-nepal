import { useTranslation } from "react-i18next";

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ne" : "en");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      {i18n.language === "en" ? "नेपाली" : "English"}
    </button>
  );
}
