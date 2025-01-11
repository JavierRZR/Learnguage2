import { useTranslation } from "react-i18next";
const HomeHeader = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="flex flex-row items-center justify-around gap-6 p-5 text-center">
        <div className=" w-[50%] flex flex-col items-center justify-center gap-14 p-5 text-start">
          <h1 className="text-pretty text-5xl font-bold">{t("home.header")}</h1>
          <p className="text-balance opacity-80 ">{t("home.subheader")}</p>
        </div>
        <div className=" h-96 w-80 bg-black"></div>
      </section>
    </>
  );
};

export default HomeHeader;
