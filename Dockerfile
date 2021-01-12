FROM node:12.18.4-alpine

WORKDIR /app

RUN apk update \
 && apk upgrade \
 && apk add --update bash

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000
