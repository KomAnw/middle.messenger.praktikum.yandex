FROM node:16-alpine

WORKDIR /var/www

COPY package.json yarn.lock ./

RUN yarn

COPY . .

RUN yarn buildV2

EXPOSE 3000

CMD [ "node", "server.js" ]