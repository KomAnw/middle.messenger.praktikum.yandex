import {ICustomWSSEvent} from '../../api/types';
import {WS_ENDPOINT} from '../../api/constants';

type WSProps = {
  userId: number;
  chatId: number;
  token: string;
};

type ResolveProps = {
  socket: WebSocket;
  get: (content: number) => void;
  send: (offset: string) => void;
};

export const WSS = async ({
  userId,
  chatId,
  token,
}: WSProps): Promise<ResolveProps> => {
  return new Promise((resolve, reject) => {
    const socket = new WebSocket(`${WS_ENDPOINT}/${userId}/${chatId}/${token}`);

    const get = (offset: number) => {
      socket.send(
          JSON.stringify({
            content: String(offset),
            type: 'get old',
          })
      );
    };

    const send = (content: string) => {
      socket.send(
          JSON.stringify({
            content: content,
            type: 'message',
          })
      );
    };

    socket.addEventListener('open', () => {
      resolve({socket, send, get});
      setInterval(() => {
        socket.send(JSON.stringify({type: 'ping'}));
      }, 20000);
    });

    socket.addEventListener('error', (event: ICustomWSSEvent) => {
      reject(event.message);
    });

    socket.addEventListener('close', (event) => {
      if (event.wasClean) {
        console.log('Соединение закрыто чисто');
      } else {
        console.log('Обрыв соединения');
      }

      console.log(`Код: ${event.code} | Причина: ${event.reason}`);
    });
  });
};
