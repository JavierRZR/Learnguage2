import { Link } from "react-router-dom";

interface RoomInfoProps {
  key: number;
  data: {
    id: number;
    room_id: string;
    lang: {
      id: number;
      name: string;
      ISO: string;
    };
    creator: {
      id: number;
      name: string;
    };
    description: string;
    maxUsers: number;
    users: { id: number }[];
  };
}

const RoomInfo = ({ data }: RoomInfoProps) => {
  const { id, room_id, lang, creator, description, maxUsers, users } = data;
  const desc =
    description.substring(0, 120) + (description.length >= 120 ? "..." : "");

  return (
    <Link
      to={`/room/${room_id}`}
      className={`m-auto w-[300px] h-auto min-h-[180px]  p-5 bg-neutral-200 bg-opacity-50 dark:bg-opacity-80 dark:bg-neutral-900 rounded-md  dark:text-neutral-300/90 text-start
        border-[1px]  border-neutral-300/10
        transition-all ease-in-out duration-300 hover:border-neutral-300/50 hover:border-2 hover:scale-105 dark:hover:brightness-125
        grid grid-cols-5 grid-rows-5 overflow-hidden`}
    >
      <div className="row-span-2 overflow-hidden my-1 opacity-80">
        <img className=" rounded-md" src={`/flags4x3/${lang.ISO}.svg`} />
      </div>
      <header className="col-span-4 row-span-2 px-5">
        <p className="font-bold">{lang.name}</p>
        <p className="text-sm font-medium "># {id}</p>
      </header>
      <div className="col-span-3 row-start-3 text-sm ">{creator.name}</div>
      <div
        className={`col-span-2 col-start-4 row-start-3 text-end ${users.length != maxUsers ? "text-emerald-700 dark:text-emerald-300/90" : "text-red-500/70"}`}
      >
        {users.length}/{maxUsers}
      </div>
      <p className="col-span-5 row-span-2 row-start-4 font-normal dark:font-extralight text-xs">
        {desc}
      </p>
    </Link>
  );
};

export default RoomInfo;
