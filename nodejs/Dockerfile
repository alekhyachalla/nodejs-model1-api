FROM node:10

# Create app directory
WORKDIR /usr/src/app/

COPY index.js  /usr/src/app/

COPY customers.js  /usr/src/app/

COPY package*.json  /usr/src/app/

RUN npm install

RUN npm install -g nodemon

RUN npm install request --save

EXPOSE 8080

CMD [ "nodemon", "index.js" ]
