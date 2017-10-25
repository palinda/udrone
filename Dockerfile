FROM node:6

COPY dist/* ./www/demo/
COPY documentation/* ./www/documentation/
COPY MockServer/data/* ./data/

ADD MockServer/index.js ./
ADD MockServer/package.json ./

RUN npm install

EXPOSE 9000

# ENTRYPOINT [ "node", "index.js" ]
ENTRYPOINT ["/bin/bash"]