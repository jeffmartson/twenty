FROM node:18.20.8-bullseye as docs

WORKDIR /app/docs

COPY ../../docs/package.json .
COPY ../../docs/yarn.lock .
RUN yarn

COPY ../../docs .

CMD ["yarn", "start"]