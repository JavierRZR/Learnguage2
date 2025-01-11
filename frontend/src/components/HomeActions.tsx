import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import axios from "axios";
import InputField from "../ui/InputField";
import Button from "../ui/Button";
import { RandomIcon } from "../assets/svg";
const HomeActions = () => {
  const { t } = useTranslation();
  const [userData, setUserData] = useState({ id: 0, name: "" });

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://randomuser.me/api/`);
      const data = response.data.results[0];
      setUserData({
        id: data.login.uuid,
        name: `${data.name.title} ${data.name.first} ${data.name.last}`,
      });
      //   console.log(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    //todo Descomentar para volver a llamar en inicio.
    // fetchData();
  }, []);

  return (
    <>
      <section className="flex flex-row items-center justify-center gap-10 p-16 text-center m-auto rounded-xl bg-neutral-200 dark:bg-neutral-950 bg-opacity-80 max-w-[800px]">
        <div className="w-[60%] text-start">
          <InputField>
            <label className="ps-1 text-sm font-semibold dark:opacity-80">
              {t("home.loginForm.usernameLabel")}
            </label>
            <div className="flex flex-row">
              <input
                type="text"
                placeholder={userData.name}
                className="h-10 ps-2  rounded-md rounded-e-none border-2 font-semibold text-lg border-neutral-400 bg-neutral-100 focus:border-neutral-400  dark:border-neutral-700 dark:bg-neutral-900"
              />
              <Button
                type="secondary"
                className={`rounded-none rounded-e-md border-s-0 border-neutral-500`}
                onClick={fetchData}
              >
                <RandomIcon size={18} />
              </Button>
            </div>
            <span className="ps-1 max-w-[90%] text-xs font-bold  opacity-80">
              {t("home.loginForm.usernameSublabel")}
            </span>
          </InputField>
        </div>
        <div className="w-[40%] flex flex-col items-center justify-center gap-5">
          <Button className="min-w-48" onClick={() => {}}>
            Crear sala
          </Button>
          <Button className="min-w-48" onClick={() => {}}>
            Buscar sala
          </Button>
        </div>
      </section>
    </>
  );
};

export default HomeActions;
