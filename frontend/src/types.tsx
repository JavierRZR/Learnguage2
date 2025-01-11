export interface RoomInfoProps {
  key: number;
  data: RoomProps;
}

export interface RoomProps {
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
}

export interface PaginationProps<T> {
  items: T[];
  numPerPage: number;
  returnData: (data: T[]) => void;
}
