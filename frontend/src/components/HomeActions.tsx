import { useTranslation } from "react-i18next";
import { ChangeEvent, useEffect, useState } from "react";
import InputField from "../ui/InputField";
import Button from "../ui/Button";
import { RandomIcon } from "../assets/svg";
import useUserContext from "../contexts/UserContext";
import fetchRandomName from "../utils/fetchRandomName.ts";

const HomeActions = () => {
  const { t } = useTranslation();
  const { userId, name, changeName } = useUserContext();
  const [userData, setUserData] = useState({ id: userId, name: name });
  const [inputValue, setInputValue] = useState(name);

  const fetchData = async () => {
    const name = await fetchRandomName();
    setUserData({
      id: userId,
      name: name,
    });
    setInputValue(name);
  };

  useEffect(() => {
    changeName(userData.name);
    setInputValue(userData.name); // Actualiza el valor del input cuando cambia userData
  }, [userData, changeName]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    changeName(e.target.value);
  };

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
                value={inputValue}
                onChange={handleInputChange}
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
