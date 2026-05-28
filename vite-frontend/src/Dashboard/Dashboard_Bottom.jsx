import { useTranslation } from "react-i18next";
import Buttons from "../assets/buttons/Buttons";
const Dashboard_Bottom = () => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto py-18 bg-[var(--primary-dark)] text-white text-center ">
      <h1 className="font-bold text-4xl">
        {t("tax_calculator.rdy_to_calculate")}
      </h1>
      <p className="text-sm text-[var(--bg-light)] mt-4">
        {t("guideliness.description")}
      </p>
      <Buttons variant="accent" className="mt-6">
        {t("guideliness.start_now")}
      </Buttons>
    </div>
  );
};

export default Dashboard_Bottom;
