import { useTranslation } from "react-i18next";
import { FaGlobe, FaMobileAlt, FaLock, FaBolt } from "react-icons/fa";

const tabs = [
  {
    icon: <FaBolt />,
    title: "guideliness.instant_res",
    description: "guideliness.guide",
  },
  {
    icon: <FaGlobe />,
    title: "guideliness.bilingual",
    description: "guideliness.service",
  },
  {
    icon: <FaMobileAlt />,
    title: "guideliness.mobile_friendly",
    description: "guideliness.device",
  },
  {
    icon: <FaLock />,
    title: "guideliness.secure",
    description: "guideliness.data",
  },
];
const DashboardMid = () => {
  const { t } = useTranslation();
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 text-center">
      <h1 className="font-bold text-5xl">{t("guideliness.why_this_site")}</h1>
      <p className="text-xs font-semibold text-[var(--text-muted)] mt-4 leading-relaxed">
        {t("guideliness.tax_compliance_info")}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6"
          >
            {/* Icon box */}
            <div className="w-20 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center mb-5">
              <span className="text-4xl text-gray-800">{tab.icon}</span>
            </div>

            {/* Title */}
            <h3 className="font-extrabold text-black mb-2">{t(tab.title)}</h3>

            {/* Description */}
            <p className="text-xs font-semibold text-[var(--text-muted)] leading-relaxed text-center max-w-[800px]">
              {t(tab.description)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardMid;
