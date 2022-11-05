import Chat from './Chat';

const mok = [
  {
    personName: 'Артур',
    personMessage: 'Друзья, у меня для вас особенный выпуск новостей!...',
    time: '18:30',
    unreadMessages: '1',
  },
  {
    personName: 'Артур',
    personMessage: 'felaf vsdmvlk fewjfmwe',
    time: '18:30',
    unreadMessages: '1',
  },
  {
    personName: 'Артур',
    personMessage: 'Миллионы россиян ежедневно проводят десятки часов свое...',
    time: '18:30',
    unreadMessages: '2',
  },
  {
    personName: 'Артур',
    personMessage: 'Друзья, у меня для вас особенный выпуск новостей!...',
    time: '18:30',
    unreadMessages: '',
  },
  {
    personName: 'Артур',
    personMessage: 'Миллионы россиян ежедневно проводят десятки часов свое...',
    time: '18:30',
    unreadMessages: '',
  },
];

export const ChatComponent = Chat({chatsData: mok});
