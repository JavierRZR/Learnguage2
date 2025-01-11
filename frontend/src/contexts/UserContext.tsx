import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import fetchRandomName from "../utils/fetchRandomName.ts";
type UserContext = {
  userId: string;
  name: string;
  changeName: (id: string) => void;
};

const uuid = uuidv4();
const name = await fetchRandomName();

const useUserContext = create<UserContext>()((set) => ({
  userId: uuid,
  name: name,
  changeName: (name) => {
    set((state) => ({ name: name, userId: state.userId }));
  },
}));

export default useUserContext;
