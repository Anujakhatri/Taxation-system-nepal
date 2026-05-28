import { useTranslation } from "react-i18next";
import { FaCalculator } from "react-icons/fa";

const stats = [
  {
    icon: <FaCalculator />,
    title: "tax_calculator.income_tax_calculator",
    description: "guideliness.compute_tax",
    link: "tax_calculator.calculate_now",
    path: "/income-tax",
  },
  {
    icon: "🏢",
    title: "tax_calculator.corporate_tax_calculator",
    description: "guideliness.corporate_tax_calculation",
    link: "tax_calculator.calculate_now",
    path: "/corporate-tax",
  },
  {
    icon: "𝍑",
    title: "resources.vat_calculator",
    description: "vat.vat_detail",
    link: "tax_calculator.calculate_now",
    path: "/vat",
  },
  {
    icon: "🫪",
    title: "resources.Withholding_tax",
    description: "vat.calculate_tds",
    link: "tax_calculator.calculate_now",
    path: "/tds",
  },
];

const Dashboard_Mid = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[var(--background  -light)] py-16 px-4">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-18 max-w-4xl">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center 
             cursor-pointer border-t-4 border-transparent
             transition-all duration-300 ease-in-out
             hover:-translate-y-2 hover:shadow-lg hover:border-[var(--accent-teal)]"
          >
            {/* Icon */}
            <div className="text-4xl mb-4 text-[var(--primary-light)]">
              {stat.icon}
            </div>

            {/* Title */}
            <h2 className="font-bold text-xl text-black mb-3">
              {t(stat.title)}
            </h2>

            {/* Description */}
            <p className="text-xs font-semibold text-gray-500 mb-6 leading-relaxed">
              {t(stat.description)}
            </p>

            {/* Link */}
            <a
              href={stat.path}
              className="text-[var(--primary-light)] font-semibold text-xs hover:underline"
            >
              {t(stat.link)} →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard_Mid;
