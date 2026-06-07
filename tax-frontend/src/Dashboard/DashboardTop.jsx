import { useTranslation } from "react-i18next";
import Buttons from "../assets/buttons/Buttons";

const DashboardTop = () => {
    const { t } = useTranslation();
    return (
        <div className="w-full py-20 bg-[var(--primary-light)] text-white text-center px-4">
            {/* Title - heavy black weight like the image */}
            <h1 className="font-black text-5xl md:text-6xl leading-tight tracking-tight">
                {t("guideliness.nepal_tax_structure")}
            </h1>

            {/* Subtitle - italic like the image */}
            <p className="text-base italic text-white/80 mt-6">
                {t("guideliness.nepal_tax_law")}
            </p>

            {/* Buttons */}
            <div className="mt-10 gap-4 flex justify-center flex-wrap">
                <Buttons
                    variant="accent"
                    className="px-8 py-3 text-base font-bold rounded-xl"
                >
                    {t("tax_calculator.calculate_tax")}
                </Buttons>
                <Buttons
                    variant="outline"
                    className="px-8 py-3 text-base font-bold rounded-xl border-white text-white hover:bg-white hover:text-[var(--primary)]"
                >
                    {t("guideliness.view_tax_guide")}
                </Buttons>
            </div>
        </div>
    );
};

export default DashboardTop;