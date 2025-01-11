import { Outlet } from "react-router-dom";
// import "tippy.js/dist/tippy.css";

import { LoginContextProvider } from "../contexts/LoginProvider";
import { ThemeProvider } from "../contexts/ThemeProvider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "sonner";
// import svg from "../assets/svgBackground.svg";
// import svgLight from "../assets/svgBackground.svg";

const Layout = () => {
  return (
    <>
      <Toaster />
      <LoginContextProvider>
        <ThemeProvider>
          <div
            className="flex h-full min-h-screen flex-col items-center justify-start gap-24 
            bg-neutral-100 text-neutral-900
            selection:bg-neutral-300 dark:bg-neutral-900 dark:text-neutral-100 dark:selection:bg-neutral-600
            transition-colors duration-300 "
            // bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] dark:bg-neutral-900
            // style={{
            //   backgroundImage: `url("${svg}")`,
            //   backgroundRepeat: "repeat space",
            // }}
          >
            <Navbar />
            <main className="flex  w-full max-w-6xl  flex-col items-start justify-start gap-32 px-5">
              <Outlet />
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </LoginContextProvider>
    </>
  );
};
export default Layout;
