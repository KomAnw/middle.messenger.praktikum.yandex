export type ChatProps = {
  chatsData: ChatCard[];
};

export type ChatCard = {
  personName: string;
  personMessage: string;
  time: string;
  unreadMessages: string;
};
