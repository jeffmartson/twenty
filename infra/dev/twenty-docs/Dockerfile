FROM node:18.20.1-bullseye as docs

WORKDIR /app/docs

COPY ../../docs/package.json .
COPY ../../docs/yarn.lock .
RUN yarn

COPY ../../docs .

CMD ["yarn", "start"]