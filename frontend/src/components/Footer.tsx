import { MyContextValue, useThemeContext } from "../contexts/ThemeProvider";

import { GithubIcon } from "../assets/svg";
import IconButton from "../ui/IconButton";

const Footer = () => {
  const { theme }: MyContextValue = useThemeContext();

  return (
    <footer className="mt-auto flex w-full max-w-6xl flex-row items-center justify-between p-5 text-neutral-500">
      <span className="select-none font-mono">Learnguage</span>

      <a
        href="https://github.com/JavierRZR/Learnguage2"
        target="_blank"
        className="flex items-center"
      >
        <span className="me-2 font-mono">Github</span>
        <IconButton>
          <GithubIcon
            className="duration-150 hover:scale-105"
            strokeWidth={theme == "light" ? "1.5" : "1"}
          />
        </IconButton>
      </a>
    </footer>
  );
};

export default Footer;
