import { useTranslation } from "react-i18next";

const calculators = [
  { key: "tax_calculator.income_tax", path: "#" },
  { key: "tax_calculator.corporate_tax", path: "#" },
  { key: "resources.vat_calculator", path: "#" },
  { key: "resources.Withholding_tax", path: "#" },
];

const resource = [
  { key: "resources.tax_guideliness", path: "#" },
  { key: "resources.deductions", path: "#" },
  { key: "resources.FAQs", path: "#" },
  { key: "resources.glossary", path: "#" },
];

const laws = [
  { key: "resources.privacy_policy", path: "#" },
  { key: "resources.terms_of_use", path: "#" },
  { key: "resources.disclaimer", path: "#" },
];

const governmentLinks = [
  {
    key: "resources.inland_revenue_department",
  },
  {
    key: "resources.finance_office",
  },
  {
    key: "resources.nepal_act_tax",
  },
];

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[var(--text-dark)] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Calculators */}
          <div>
            <h4 className="text-white font-bold mb-3 text-sm uppercase tracking-wide">
              {t("tax_calculator.calculators")}
            </h4>
            <ul className="space-y-2">
              {calculators.map((calc) => (
                <li key={calc.key}>
                  <a
                    href={calc.path}
                    className="hover:text-white text-sm transition-colors"
                  >
                    {t(calc.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold mb-3 text-sm uppercase tracking-wide">
              {t("resources.resources")}
            </h4>
            <ul className="space-y-2">
              {resource.map((res) => (
                <li key={res.key}>
                  <a
                    href={res.path}
                    className="hover:text-white text-sm transition-colors"
                  >
                    {t(res.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-3 text-sm uppercase tracking-wide">
              {t("resources.legal")}
            </h4>
            <ul className="space-y-2">
              {laws.map((law) => (
                <li key={law.key}>
                  <a
                    href={law.path}
                    className="hover:text-white text-sm transition-colors"
                  >
                    {t(law.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Government Links */}
          <div>
            <h4 className="text-white font-bold mb-3 text-sm uppercase tracking-wide">
              {t("resources.government_links")}
            </h4>
            <ul className="space-y-2">
              {governmentLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.path}
                    className="hover:text-white text-sm transition-colors"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © {t("resources.tax_info_2025")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;