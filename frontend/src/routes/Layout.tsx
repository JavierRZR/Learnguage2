import { Outlet } from "react-router-dom";
// import "tippy.js/dist/tippy.css";
import lightSvg from "../assets/svgBgLight.svg";
import darkSvg from "../assets/svgBgDark.svg";

import { MyContextValue, useThemeContext } from "../contexts/ThemeProvider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  const { theme }: MyContextValue = useThemeContext();
  return (
    <>
      <div
        className="flex h-full min-h-screen flex-col items-center justify-start gap-24
            text-neutral-900
            transition-colors duration-300 
            selection:bg-neutral-300 dark:bg-neutral-900 dark:text-neutral-100 dark:selection:bg-neutral-600 "
        style={{
          backgroundImage: `url("${theme == "light" ? lightSvg : darkSvg}")`,
          backgroundRepeat: "repeat space",
        }}
      >
        <Navbar />
        <main className="flex  w-full max-w-6xl  flex-col items-start justify-start gap-32 px-5">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};
export default Layout;
