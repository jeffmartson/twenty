FROM node:18.20.3-bullseye as docs

WORKDIR /app/docs

COPY ../../docs/package.json .
COPY ../../docs/yarn.lock .
RUN yarn

COPY ../../docs .

CMD ["yarn", "start"]