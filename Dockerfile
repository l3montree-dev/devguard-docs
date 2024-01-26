FROM node:18.16.0@sha256:c0a8990273163b3c17685bf98986c6e21d574cda0cbb97440147e9f73e71e973 as builder

WORKDIR /usr/app/

ENV NODE_ENV production
ENV PORT 3000
EXPOSE 3000

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

RUN npm run build

CMD [ "npm", "run", "serve" ]

