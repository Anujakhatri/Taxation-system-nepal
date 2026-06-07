import { useTranslation } from "react-i18next";
import nepaliLogo from "../../assets/images/नेपाली.gif";
import englishLogo from "../../assets/images/nepali.gif";
import LanguageToggle from "../LanguageToogle";

const navlist = [
  { key: "tax_calculator.calculators", path: "/#quick-access-section" },
  { key: "resources.law", path: "/#resources" },
  { key: "contact.contact", path: "/contact" },
  { key: "form.login", path: "/login" },
  { key: "form.register", path: "/register" },
];

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === "en";

  return (
    <div className="bg-[var(--primary-dark)] text-white px-8 sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between py-6">
        <div className="flex items-center gap-3">
          <img
            src={isEnglish ? englishLogo : nepaliLogo}
            alt={t("tax_calculator.tax_info")}
            className="w-10 h-10 rounded-sm"
          />
          <div>
            <h1 className="text-xl font-bold">
              {t("tax_calculator.tax_info")}
            </h1>
            <p className="text-xs text-gray-300 font-semibold">
              {t("tax_calculator.tax_info_calculator")}
            </p>
          </div>
        </div>

        <ul className="flex gap-12">
          {navlist.map((item) => (
            <li key={item.key}>
              <a href={item.path}>{t(item.key)}</a>
            </li>
          ))}
        </ul>

        <LanguageToggle />
      </nav>
    </div>
  );
};

export default Navbar;