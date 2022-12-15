export type ChatProps = {
  chatsData: ChatData[];
};

export type ChatData = {
  avatar: string | null;
  created_by: number;
  id: number;
  last_message: {
    user: {
      first_name: string;
      second_name: string;
      avatar: string;
      email: string;
      login: string;
      phone: string;
    };
    time: string;
    content: string;
  } | null;
  title: string;
  unread_count: number;
};
