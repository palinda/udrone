FROM node:6

COPY dist/* ./MockServer/www/demo/
COPY documentation/* ./MockServer/www/documentation/

ADD ./MockServer/* ./

RUN npm install

EXPOSE 9000

# ENTRYPOINT [ "node", "index.js" ]
ENTRYPOINT ["/bin/bash"]