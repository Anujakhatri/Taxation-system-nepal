import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">

          {/* Calculators */}
          <div>
            <h4 className="text-white font-medium mb-3 text-sm uppercase tracking-wide">
              {t("tax_calculator.calculators")}
            </h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white text-sm transition-colors">{t("tax_calculator.income_tax")}</a></li>
              <li><a href="#" className="hover:text-white text-sm transition-colors">{t("tax_calculator.corporate_tax")}</a></li>
              <li><a href="#" className="hover:text-white text-sm transition-colors">{t("resources.vat_calculator")}</a></li>
              <li><a href="#" className="hover:text-white text-sm transition-colors">{t("resources.Withholding Tax")}</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-medium mb-3 text-sm uppercase tracking-wide">
              {t("resources.resources")}
            </h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white text-sm transition-colors">{t("resources.tax_guideliness")}</a></li>
              <li><a href="#" className="hover:text-white text-sm transition-colors">{t("resources.deductions")}</a></li>
              <li><a href="#" className="hover:text-white text-sm transition-colors">{t("resources.FAQs")}</a></li>
              <li><a href="#" className="hover:text-white text-sm transition-colors">{t("resources.glossary")}</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-medium mb-3 text-sm uppercase tracking-wide">
              {t("resources.legal")}
            </h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white text-sm transition-colors">{t("resources.privacy_policy")}</a></li>
              <li><a href="#" className="hover:text-white text-sm transition-colors">{t("resources.terms_of_use")}</a></li>
              <li><a href="#" className="hover:text-white text-sm transition-colors">{t("resources.disclaimer")}</a></li>
            </ul>
          </div>

          {/* Government Links */}
          <div>
            <h4 className="text-white font-medium mb-3 text-sm uppercase tracking-wide">
              {t("resources.government_links")}
            </h4>
            <ul className="space-y-2">
              <li><a href="https://ird.gov.np/" target="_blank" rel="noreferrer" className="hover:text-white text-sm transition-colors flex items-center gap-1">
                {t("resources.inland_revenue_department")}
                <i className="ti ti-external-link" style={{fontSize:"12px"}} aria-hidden="true" />
              </a></li>
              <li><a href="https://mof.gov.np/" target="_blank" rel="noreferrer" className="hover:text-white text-sm transition-colors flex items-center gap-1">
                {t("resources.finance_office")}
                <i className="ti ti-external-link" style={{fontSize:"12px"}} aria-hidden="true" />
              </a></li>
              <li><a href="https://en.ican.org.np/_browsable/file/career/8Income-Tax-Act-2058.pdf" target="_blank" rel="noreferrer" className="hover:text-white text-sm transition-colors flex items-center gap-1">
                {t("resources.nepal_act_tax")}
                <i className="ti ti-external-link" style={{fontSize:"12px"}} aria-hidden="true" />
              </a></li>
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