import { useState } from "react";
import { useTranslation } from "react-i18next";
import RoomInfo from "./RoomInfo";
import Pagination from "../ui/Pagination";
import { RoomProps } from "../types";

const RoomsList = () => {
  const { t } = useTranslation();
  const [rooms] = useState<RoomProps[]>([
    {
      id: 1,
      room_id: "1",
      lang: { id: 1, name: "Español", ISO: "es" },
      creator: { id: 1, name: "John Doe" },
      description:
        "Sala única de testeo de la APP. No funciona en móviles la conexión de la webcam.  No funciona en móviles la conexión de la webcam.  No funciona en móviles la conexión de la webcam.  No funciona en móviles la conexión de la webcam. Si no aparecen las cámaras y voces: abrir una nueva pestaña.",
      maxUsers: 12,
      users: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    },
    {
      id: 2,
      room_id: "2",
      lang: { id: 1, name: "Japonés", ISO: "jp" },
      creator: { id: 1, name: "Ricardo" },
      description:
        "Descripción molona para hacer una prueba de este tostón que es insertar datos en la BBDD.",
      maxUsers: 12,
      users: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    },
    {
      id: 3,
      room_id: "3",
      lang: { id: 1, name: "Japonés", ISO: "jp" },
      creator: { id: 1, name: "Ricardo" },
      description:
        "Descripción molona para hacer una prueba de este tostón que es insertar datos en la BBDD.",
      maxUsers: 12,
      users: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    },
    {
      id: 4,
      room_id: "4",
      lang: { id: 1, name: "Japonés", ISO: "jp" },
      creator: { id: 1, name: "Ricardo" },
      description:
        "Descripción molona para hacer una prueba de este tostón que es insertar datos en la BBDD.",
      maxUsers: 12,
      users: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    },
    {
      id: 5,
      room_id: "2",
      lang: { id: 1, name: "Japonés", ISO: "jp" },
      creator: { id: 1, name: "Ricardo" },
      description:
        "Descripción molona para hacer una prueba de este tostón que es insertar datos en la BBDD.",
      maxUsers: 4,
      users: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    },
    {
      id: 6,
      room_id: "3",
      lang: { id: 1, name: "Japonés", ISO: "jp" },
      creator: { id: 1, name: "Ricardo" },
      description:
        "Descripción molona para hacer una prueba de este tostón que es insertar datos en la BBDD.",
      maxUsers: 12,
      users: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    },
    {
      id: 7,
      room_id: "4",
      lang: { id: 1, name: "Japonés", ISO: "jp" },
      creator: { id: 1, name: "Ricardo" },
      description:
        "Descripción molona para hacer una prueba de este tostón que es insertar datos en la BBDD.",
      maxUsers: 12,
      users: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    },
    {
      id: 8,
      room_id: "1",
      lang: { id: 1, name: "Español", ISO: "es" },
      creator: { id: 1, name: "John Doe" },
      description:
        "Sala única de testeo de la APP. No funciona en móviles la conexión de la webcam.  No funciona en móviles la conexión de la webcam.  No funciona en móviles la conexión de la webcam.  No funciona en móviles la conexión de la webcam. Si no aparecen las cámaras y voces: abrir una nueva pestaña.",
      maxUsers: 12,
      users: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    },
    {
      id: 9,
      room_id: "2",
      lang: { id: 1, name: "Japonés", ISO: "jp" },
      creator: { id: 1, name: "Ricardo" },
      description:
        "Descripción molona para hacer una prueba de este tostón que es insertar datos en la BBDD.",
      maxUsers: 12,
      users: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    },
    {
      id: 10,
      room_id: "3",
      lang: { id: 1, name: "Japonés", ISO: "jp" },
      creator: { id: 1, name: "Ricardo" },
      description:
        "Descripción molona para hacer una prueba de este tostón que es insertar datos en la BBDD.",
      maxUsers: 12,
      users: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    },
    {
      id: 11,
      room_id: "4",
      lang: { id: 1, name: "Japonés", ISO: "jp" },
      creator: { id: 1, name: "Ricardo" },
      description:
        "Descripción molona para hacer una prueba de este tostón que es insertar datos en la BBDD.",
      maxUsers: 12,
      users: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    },
    {
      id: 12,
      room_id: "2",
      lang: { id: 1, name: "Japonés", ISO: "jp" },
      creator: { id: 1, name: "Ricardo" },
      description:
        "Descripción molona para hacer una prueba de este tostón que es insertar datos en la BBDD.",
      maxUsers: 4,
      users: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    },
    {
      id: 13,
      room_id: "3",
      lang: { id: 1, name: "Japonés", ISO: "jp" },
      creator: { id: 1, name: "Ricardo" },
      description:
        "Descripción molona para hacer una prueba de este tostón que es insertar datos en la BBDD.",
      maxUsers: 12,
      users: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    },
    {
      id: 14,
      room_id: "4",
      lang: { id: 1, name: "Japonés", ISO: "jp" },
      creator: { id: 1, name: "Ricardo" },
      description:
        "Descripción molona para hacer una prueba de este tostón que es insertar datos en la BBDD.",
      maxUsers: 12,
      users: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    },
    {
      id: 15,
      room_id: "1",
      lang: { id: 1, name: "Español", ISO: "es" },
      creator: { id: 1, name: "John Doe" },
      description:
        "Sala única de testeo de la APP. No funciona en móviles la conexión de la webcam.  No funciona en móviles la conexión de la webcam.  No funciona en móviles la conexión de la webcam.  No funciona en móviles la conexión de la webcam. Si no aparecen las cámaras y voces: abrir una nueva pestaña.",
      maxUsers: 12,
      users: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    },
    {
      id: 16,
      room_id: "2",
      lang: { id: 1, name: "Japonés", ISO: "jp" },
      creator: { id: 1, name: "Ricardo" },
      description:
        "Descripción molona para hacer una prueba de este tostón que es insertar datos en la BBDD.",
      maxUsers: 12,
      users: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    },
    {
      id: 17,
      room_id: "3",
      lang: { id: 1, name: "Japonés", ISO: "jp" },
      creator: { id: 1, name: "Ricardo" },
      description:
        "Descripción molona para hacer una prueba de este tostón que es insertar datos en la BBDD.",
      maxUsers: 12,
      users: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    },
    {
      id: 18,
      room_id: "4",
      lang: { id: 1, name: "Japonés", ISO: "jp" },
      creator: { id: 1, name: "Ricardo" },
      description:
        "Descripción molona para hacer una prueba de este tostón que es insertar datos en la BBDD.",
      maxUsers: 12,
      users: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    },
    {
      id: 19,
      room_id: "2",
      lang: { id: 1, name: "Japonés", ISO: "jp" },
      creator: { id: 1, name: "Ricardo" },
      description:
        "Descripción molona para hacer una prueba de este tostón que es insertar datos en la BBDD.",
      maxUsers: 4,
      users: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    },
    {
      id: 20,
      room_id: "3",
      lang: { id: 1, name: "Japonés", ISO: "jp" },
      creator: { id: 1, name: "Ricardo" },
      description:
        "Descripción molona para hacer una prueba de este tostón que es insertar datos en la BBDD.",
      maxUsers: 12,
      users: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    },
    {
      id: 21,
      room_id: "4",
      lang: { id: 1, name: "Japonés", ISO: "jp" },
      creator: { id: 1, name: "Ricardo" },
      description:
        "Descripción molona para hacer una prueba de este tostón que es insertar datos en la BBDD.",
      maxUsers: 12,
      users: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    },
    {
      id: 22,
      room_id: "1",
      lang: { id: 1, name: "Español", ISO: "es" },
      creator: { id: 1, name: "John Doe" },
      description:
        "Sala única de testeo de la APP. No funciona en móviles la conexión de la webcam.  No funciona en móviles la conexión de la webcam.  No funciona en móviles la conexión de la webcam.  No funciona en móviles la conexión de la webcam. Si no aparecen las cámaras y voces: abrir una nueva pestaña.",
      maxUsers: 12,
      users: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    },
    {
      id: 23,
      room_id: "2",
      lang: { id: 1, name: "Japonés", ISO: "jp" },
      creator: { id: 1, name: "Ricardo" },
      description:
        "Descripción molona para hacer una prueba de este tostón que es insertar datos en la BBDD.",
      maxUsers: 12,
      users: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    },
    {
      id: 24,
      room_id: "3",
      lang: { id: 1, name: "Japonés", ISO: "jp" },
      creator: { id: 1, name: "Ricardo" },
      description:
        "Descripción molona para hacer una prueba de este tostón que es insertar datos en la BBDD.",
      maxUsers: 12,
      users: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    },
    {
      id: 25,
      room_id: "4",
      lang: { id: 1, name: "Japonés", ISO: "jp" },
      creator: { id: 1, name: "Ricardo" },
      description:
        "Descripción molona para hacer una prueba de este tostón que es insertar datos en la BBDD.",
      maxUsers: 12,
      users: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    },
    {
      id: 26,
      room_id: "2",
      lang: { id: 1, name: "Japonés", ISO: "jp" },
      creator: { id: 1, name: "Ricardo" },
      description:
        "Descripción molona para hacer una prueba de este tostón que es insertar datos en la BBDD.",
      maxUsers: 4,
      users: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    },
    {
      id: 27,
      room_id: "3",
      lang: { id: 1, name: "Japonés", ISO: "jp" },
      creator: { id: 1, name: "Ricardo" },
      description:
        "Descripción molona para hacer una prueba de este tostón que es insertar datos en la BBDD.",
      maxUsers: 12,
      users: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    },
    {
      id: 28,
      room_id: "4",
      lang: { id: 1, name: "Japonés", ISO: "jp" },
      creator: { id: 1, name: "Ricardo" },
      description:
        "Descripción molona para hacer una prueba de este tostón que es insertar datos en la BBDD.",
      maxUsers: 12,
      users: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    },
  ]);
  const [shownRooms, setShownRooms] = useState<RoomProps[]>([]);

  function showNewRooms(newRooms: RoomProps[]) {
    setShownRooms(newRooms);
  }

  return (
    <>
      <section className="flex flex-col items-start gap-6 p-5 text-center w-[100%]">
        <div className=" flex flex-col  text-start">
          <h1 className="text-pretty text-2xl font-bold">
            {t("home.roomsList.header")}
          </h1>
        </div>
        <div id="grid-salas">
          {shownRooms.map((sala) => {
            return <RoomInfo key={sala.id} data={sala} />;
          })}
        </div>
        <div className="w-full flex justify-center">
          <Pagination items={rooms} numPerPage={9} returnData={showNewRooms} />
        </div>
      </section>
    </>
  );
};

export default RoomsList;
