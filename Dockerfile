FROM node:6

COPY dist/* ./MockServer/www

ADD ./MockServer/* ./

RUN npm install

EXPOSE 9000

ENTRYPOINT [ "node", "index.js" ]