FROM node:6

COPY MockServer/* ./
COPY MockServer/www/ ./www/
COPY MockServer/data/ ./data/
COPY dist/ ./www/demo/
COPY documentation/ ./www/documentation/

RUN npm install

EXPOSE 9000

# ENTRYPOINT [ "node", "index.js" ]
ENTRYPOINT ["/bin/bash"]