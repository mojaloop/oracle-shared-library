FROM node:10-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json .env .istanbul.yml ./

RUN npm install

COPY . .

COPY --chown=node:node . .

USER node

EXPOSE 3030

CMD [ "node", "src/server.js" ]