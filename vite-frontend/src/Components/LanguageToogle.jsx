import { useTranslation } from "react-i18next";

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <div className="flex gap-1 bg-[#003893] p-2 rounded">
      <button
        onClick={() => i18n.changeLanguage("ne")}
        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
          currentLang === "ne"
            ? "bg-[var(--accent-teal)] text-white"
            : "text-white"
        }`}
      >
        नेपाली
      </button>
      <button
        onClick={() => i18n.changeLanguage("en")}
        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
          currentLang === "en"
            ? "bg-[var(--accent-teal)] text-white"
            : " text-white"
        }`}
      >
        EN
      </button>
    </div>
  );
}
