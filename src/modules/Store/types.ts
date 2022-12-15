import { ChatData } from "src/pages/Chat/types";

export type AppState = {
  user: User | null;
  chats: ChatData[] | null;
  selectedChat: any | null;
};

export type User = {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  avatar: string;
  email: string;
  phone: string;
};

export interface ICustomEvent extends Event {
  detail?: any;
}
