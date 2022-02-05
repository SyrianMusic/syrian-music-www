FROM node:16-alpine

RUN mkdir -p /app
WORKDIR /app

RUN apk update
RUN apk add git

COPY package.json ./
COPY yarn.lock ./
RUN yarn

COPY . ./

EXPOSE 8888

CMD ["node"]
