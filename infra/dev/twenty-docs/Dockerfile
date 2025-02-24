FROM node:18.20.7-bullseye as docs

WORKDIR /app/docs

COPY ../../docs/package.json .
COPY ../../docs/yarn.lock .
RUN yarn

COPY ../../docs .

CMD ["yarn", "start"]