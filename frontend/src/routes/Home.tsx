import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import axios from "axios";
import MyToast from "../ui/MyToast";

const Home = () => {
  const { t } = useTranslation();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACK_URL}/helloServer`);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center gap-14 p-5 text-center">
      <h1 className="text-pretty text-6xl font-bold">{t("title")}</h1>
      <p className="text-balance opacity-80 md:max-w-[70%] lg:max-w-[70%]">
        {t("title")}
      </p>
      {/* Relleno */}
      <MyToast />
    </section>
  );
};

export default Home;
