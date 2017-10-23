FROM node:6
MAINTAINER palinda.a@ustocktrade

COPY dist www

WORKDIR MockServer
RUN npm install
CMD node index.js
EXPOSE 8081