import { useEffect } from "react";
import axios from "axios";
import HomeHeader from "../components/HomeHeader";
import HomeActions from "../components/HomeActions";
import RoomsList from "../components/RoomsList";

const Home = () => {
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACK_URL}/helloServer`);
  }, []);

  return (
    <>
      {/* Breefing de funcionalidad  */}
      <HomeHeader />
      {/* Login y busqueda / creación */}
      <HomeActions />
      {/* Listado de salas */}
      <RoomsList />
    </>
  );
};

export default Home;
