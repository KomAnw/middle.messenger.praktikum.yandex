import { ChatData } from "src/pages/Chat/types";

export type AppState = {
  user: User | null;
  chats: ChatData[] | null;
  selectedChat: SelectedChat | null;
};

export type SelectedChat = {
  id: number;
  token: string;
  messages: Message[];
};

export type Message = {
  chat_id: number;
  content: string;
  file: any;
  id: number;
  is_read: boolean;
  time: string;
  type: string;
  user_id: number;
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
