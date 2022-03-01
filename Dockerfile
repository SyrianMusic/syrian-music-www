FROM node:16-alpine

RUN apk update
RUN apk add git

ARG PORT=8888
ENV PORT $PORT
ARG DEBUG_PORT=9229
ENV DEBUG_PORT $DEBUG_PORT
EXPOSE $PORT $DEBUG_PORT 9230

RUN mkdir -p usr/src/app/node_modules/.cache && chown -R node /usr/src
WORKDIR /usr/src

USER node
COPY package.json yarn.lock ./
RUN yarn
ENV PATH=/usr/src/node_modules/.bin:$PATH

WORKDIR /usr/src/app

COPY . .

CMD ["node"]
