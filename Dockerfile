FROM node:6
MAINTAINER palinda.a@ustocktrade
WORKDIR MockServer
RUN npm install
COPY ../dist www
CMD node index.js
EXPOSE 8081