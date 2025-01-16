import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";

import { ThemeProvider } from "./contexts/ThemeProvider";
import Layout from "./routes/Layout";
import Home from "./routes/Home";
import Room from "./routes/Room";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "room/:roomId",
        element: <Room />,
      },
      { path: "*", element: <h1>404 NOT FOUND</h1> },
    ],
  },
  {
    path: "/:fromUrl",
    element: <p>SE CIERRA</p>,
  },
]);

function App() {
  return (
    <>
      <ThemeProvider>
        <Toaster />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
